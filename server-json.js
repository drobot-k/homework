/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const jsonServer = require('json-server')
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const fs = require("fs");
const moment = require('moment');
const fetch = require('node-fetch');
const server = jsonServer.create()
const router = jsonServer.router('./tests/test-data/db.json')
const middlewares = jsonServer.defaults()

const getErrors = (errorsToSend) => {
  let errors = [];
  if (errorsToSend && Array.isArray(errorsToSend)) {
    errors = [...errorsToSend];
  }

  return {
    errors
  };
};

const getError = (title, detail, status, pathToAttribute) => {
  let errors = [];
  errors.push({
    title,
    detail,
    status,
    source: pathToAttribute ? { pointer: pathToAttribute } : null
  });

  return getErrors(errors);
};

const secretKey = '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611';
const hashingSecret = "f844b09ff50c";

const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_SECRET = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';

const generateAccessToken = (userData) => {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(userData, secretKey, { expiresIn: '1800s' });
}

const pathToSave = 'public/uploads';
const urlBase = '/uploads/';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(path.join(__dirname, pathToSave))) {
      fs.mkdirSync(path.join(__dirname, pathToSave));
    }
    cb(null, path.join(__dirname, pathToSave));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = path.win32.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  }
});

const upload = multer({ storage });

const getUnauthorizedError = () => getError('Login', 'You are not authorized, please log in', 401, null);
const getForbiddenError = () => getError('Forbidden', 'You don\'t have permissions to this resource', 403, null);

const getBaseRoute = (req) => {
  const path = req.path.split('/');
  return path.length > 1 ? path[1] : '/';
};

const isAuthorized = (req) => {
  const baseRoute = getBaseRoute(req);
  if (req.path === '/recaptcha' || req.path === '/users' || req.path === '/token' || req.path === '/logger-errors' || ((baseRoute === 'meetings' || baseRoute === 'books' || baseRoute === 'speakers' || baseRoute === 'reports') && req.method === 'GET')) {
    return 200;
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return 401;
  }

  try {
    let user = jwt.verify(token, secretKey);
    req.app.set('sessionUser', user);
    return 200;
  }
  catch (e) {
    return 403;
  }
};

// // Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.post('/token', function (req, res) {
  const emailFromBody = req.body.email;
  const passwordFromBody = req.body.password;
  const hashedPassword = crypto.createHmac('sha256', hashingSecret).update(passwordFromBody).digest('hex');

  const db = router.db; //lowdb instance
  const user = db.get('users').find({ email: emailFromBody, password: hashedPassword }).value();

  if (user) {
    const token = generateAccessToken({ email: user.email, username: user.username });
    res.json({ token });
  }
  else {
    res.status(401).json(getError('Login', 'Error logging in user with that e-mail and password', 401, null));
  }
});

// Check authorization
server.use((req, res, next) => {
  const authorizeCode = isAuthorized(req);
  if (authorizeCode === 200) {
    next() // continue to JSON Server router
  }
  else if (authorizeCode === 401) {
    console.log('authorize=', authorizeCode);
    res.status(401).json(getUnauthorizedError());
  }
  else if (authorizeCode === 403) {
    res.status(403).json(getForbiddenError());
  }
  else {
    res.status(403).json(getForbiddenError());
  }
});

// Get current user
server.use((req, res, next) => {
  if (req.path === '/users/me' && req.method === 'GET') {
    let storedUser = req.app.get('sessionUser');
    console.log('storedUser=', storedUser);
    if (!storedUser) {
      res.sendStatus(404);
    }
    else {
      const db = router.db; //lowdb instance
      const user = db.get('users').find({ username: storedUser.username }).value();
      const userCopy = Object.assign({}, user);

      delete userCopy.password;
      res.json(userCopy);
    }
  }
  else {
    next();
  }
});

// Disable get, modify or delete users
server.use((req, res, next) => {
  if (getBaseRoute(req) === 'users' && (req.method === 'PATCH' || req.method === 'DELETE')) {
    res.sendStatus(404);
  }
  else if (getBaseRoute(req) === 'users' && req.method === 'GET') {
    let urlSegms = req.url.split('/');
    let idStr = urlSegms[urlSegms.length - 1];
    let id = parseInt(idStr);
    id = isNaN(id) ? idStr : id;

    const db = router.db; //lowdb instance
    const user = db.get('users').find({ id: id }).value();
    const userCopy = Object.assign({}, user);

    delete userCopy.password;
    res.json(userCopy);
  }
  else {
    // Continue to JSON Server router
    next();
  }
});

// Validate user to add
server.use((req, res, next) => {
  const db = router.db; //lowdb instance
  const email = db.get('users').find({ email: req.body.email }).value();

  const valid = !req.body || req.body && !email;
  if (getBaseRoute(req) === 'users' && req.method === 'POST' && !valid) {
    res.status(422).json(getError('email', 'email is already taken', 422, '/data/attributes/email'));
  }
  else if (getBaseRoute(req) === 'users' && req.method === 'POST') {
    const hashedPassword = crypto.createHmac('sha256', hashingSecret).update(req.body.password).digest('hex');
    req.body.password = hashedPassword;
    next();
  }
  else {
    // Continue to JSON Server router
    next();
  }
});

server.use(async (request, response, next) => {
  if (request.path === '/recaptcha' && request.query.key) {
    const { success } = await (await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${request.query.key}`,
    })).json();

    response.json({ success });
  } else {
    next();
  }
});

server.post("/FileUpload", upload.any(), function (req, res) {

  let filedata = req.files;

  if (!filedata) {
    res.status(500).json(getError('File upload', 'Error during file upload', 500, null));
  }
  else {
    res.status(201).json({ filename: filedata[0].filename });
  }
});

server.post('/saveURL', function (req, res) {
  const entityId = req.body.id;
  const entityName = req.body.entityName;
  const fileName = req.body.fileName;

  const db = router.db; //lowdb instance
  const book = db.get(entityName).find({ id: entityId }).assign({ coverURL: `${urlBase}${fileName}` }).write();
  res.status(200).json(book);
});

function responseInterceptor(req, res, next) {
  var originalSend = res.send;

  res.send = function() {
    let body = arguments[0];

    if (req.method === 'DELETE') {
      let urlSegms = req.url.split('/');
      let idStr = urlSegms[urlSegms.length - 1];
      let id = parseInt(idStr);
      id = isNaN(id) ? idStr : id;

      let newBody = Object.assign({}, JSON.parse(body));
      newBody.id = id;
      arguments[0] = JSON.stringify(newBody);
    }

    originalSend.apply(res, arguments);
  };

  next();
}

server.use(responseInterceptor);

// server.use((request, response, next) => {
//   const speaker = Number(request.query.speaker);
//   const book = Number(request.query.book);
//   const date = moment(request.query.date).toDate();
//   // console.log(speaker, '\n', book, '\n', date)

//   if (request.method === 'GET' && request.path === '?_expand=speaker&_expand=book' && !Number.isNaN(speaker)) {
//     const speakers = router.db.get('speakers').filter((b) => b.speaker === speaker);

//     response.json(speakers)}

//   if (request.method === 'GET' && request.path === '?_expand=speaker&_expand=book' && !Number.isNaN(book)) {
//     const books = router.db.get('books').filter((b) => b.book === book);

//     response.json(books)}

//   if (request.method === 'GET' && request.path === '/meetings' && !Number.isNaN(date)) {
//     const dates = router.db.get('meetings').filter((b) => b.date === date);

//     response.json(dates)

//   } else {
//     next();
//   }
// });

server.use((request, response, next) => {
  const speaker = Number(request.query.speaker);
  const book = Number(request.query.book);
  const date = moment(request.query.date).toDate();
  // console.log(speaker, '\n', book, '\n', date, request.query.date)
  if (request.method === 'GET' && request.path === '/meetings' && !Number.isNaN(book) || !Number.isNaN(speaker) || request.query.date!=undefined) {
    const meetingstemp = []
    let reports = []
    if (!Number.isNaN(book) && !Number.isNaN(speaker)) {
      reports = router.db.get('reports').filter((r) => r.bookId === book && r.speakerId === speaker).value()
    } else if(!Number.isNaN(book) || !Number.isNaN(speaker)) {
      reports = router.db.get('reports').filter((r) => r.bookId === book || r.speakerId === speaker).value()
    }
    else{
      reports = router.db.get('reports');
      // console.log(reports)
    }

    const meetings = router.db.get('meetings').filter((m) => {
          if(request.query.date!=undefined) {
            // var ourdate = new Date(String(m.Date));
            // ourdate.setDate(ourdate.getDate() + 1);
            // var datemeet = new Date(request.query.date + "T19:00:00.000Z");
            // return String(ourdate) == String(datemeet);
            return moment(date).isSame(m.date);
          }
          return true;
        });
    const meetings2 = meetings.filter((m) => {
      const temp = reports.find((report) =>  m.id === report.meetingId);
      return temp !=undefined;
    }).value();
    response.json(meetings2);
  } 
  
  else if (request.method === 'POST' && request.path === '/logger-errors') {
    request.body.clientIP = request.ip;
    next();
  }
  else {
    next();
  }
});

// Use default router
server.use(router)

let port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
});