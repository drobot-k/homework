export default {
  errors: {
    description: "Это поле",
    inclusion: "{{description}} is not included in the list",
    exclusion: "{{description}} is reserved",
    invalid: "{{description}} is invalid",
    confirmation: "{{description}} не совпадает с {{on}}",
    accepted: "{{description}} must be accepted",
    empty: "{{description}} не может быть пустым",
    blank: "{{description}} должно быть заполнено",
    present: "{{description}} must be blank",
    collection: "{{description}} must be a collection",
    singular: "{{description}} can't be a collection",
    tooLong: "{{description}} слишком длинное (максимум {{max}} символов)",
    tooShort: "{{description}} слишком короткое (минимум {{min}} символа)",
    before: "{{description}} must be before {{before}}",
    after: "{{description}} must be after {{after}}",
    wrongDateFormat: "{{description}} must be in the format of {{format}}",
    wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
    notANumber: "{{description}} must be a number",
    notAnInteger: "{{description}} must be an integer",
    greaterThan: "{{description}} must be greater than {{gt}}",
    greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
    equalTo: "{{description}} must be equal to {{is}}",
    lessThan: "{{description}} must be less than {{lt}}",
    lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
    otherThan: "{{description}} должен отличаться от {{value}}",
    odd: "{{description}} must be odd",
    even: "{{description}} must be even",
    positive: "{{description}} must be positive",
    date: "{{description}} must be a valid date",
    onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
    onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
    email: "{{description}} должно иметь корректный формат e-mail адреса",
    phone: "{{description}} must be a valid phone number",
    url: "{{description}} должно иметь корректный формат URL-адреса",
    passwordDescription: 'Пароль и подтверждение пароля',
    passwordDontMatch: 'не совпадают'
  },

  menu: {
    bookClub: 'Книжный клуб',
    desktop: 'Рабочий стол',
    meetings: 'Встречи клуба',
    books: 'Книги',
    speakers: 'Спикеры',
    submitYourApplication: 'Оставить заявку',
    plan: 'Запланировать',
    register: 'Регистрация',
    login: 'Войти',
    logout: 'Выйти',
    hello: 'Привет',
  },

  register: {
    register: 'Регистрация',
    email: 'имя@например.ru',
    password: 'Пароль',
    back: 'Назад',
  },

  login: {
    login: 'Вход',
    email: 'имя@например.ru',
    password: 'Пароль',
    remember: 'Запомнить',
    signIn: 'Войти',
    back: 'Назад',
  },

  meetingsIndex: {
    addMeeting: 'Добавить встречу',
    speaker: 'Спикер',
    book: 'Книга',
    speakerWithDots: 'Спикер...',
    bookWithDots: 'Книга...',
    meetingDate: 'Дата встречи',
  },

  meetingItem: {
    listOfReports: 'Список докладов',
  },

  reportItem: {
    speakerPhoto: 'Фото спикера',
    rating: 'Оценка',
    ratingNo: 'Пока никто не оценил',
    review: 'Отзыв',
    links: 'Ссылки',
    record: 'Посмотреть запись доклада',
    downloadPresentation: 'Скачать презентацию',
  },

  meetingCreate: {
    meetingCreate: 'Создание встречи',
  },

  meetingEdit: {
    meetingEdit: 'Редактирование встречи',
  },

  meetingForm: {
    chooseDate: 'Выберите дату',
    date: 'Дата...',
    saveMeeting: 'Для добавления докладов сначала введите дату встречи и сохраните её',
    save: 'Сохранить',
    cancel: 'Отмена',
  },

  reportCreate: {
    reportCreate: 'Создание доклада',
  },

  reportEdit: {
    reportEdit: 'Редактирование доклада',
  },

  reportForm: {
    reportDate: 'Дата доклада',
    rating: 'Оценка книги',
    ratingIn: 'Введите оценку',
    presentationURL: 'URL презентации',
    presentationURLIn: 'Введите URL презентации',
    videoURL: 'URL видео',
    videoURLIn: 'Введите URL видео',
    chooseBook: 'Выберите книгу...',
    chooseSpeaker: 'Выберите спикера...',
    review: 'Рецензия',
    reviewIn: 'Введите рецензию',
  },

  booksIndex: {
    addBook: 'Добавить книгу',
    searchByField: 'Найти по полям',
    find: 'Найти',
    searchByTags: 'Поиск по тегам',
    search: 'Поиск',
  },

  bookItem: {
    cover: 'Обложка книги',
    author: 'Автор',
    pages: 'Количество страниц',
    tags: 'Теги',
    rating: 'Рейтинг',
    description: 'Описание',
  },

  bookCreate: {
    bookCreate: 'Создание книги',
  },

  bookEdit: {
    bookEdit: 'Редактирование книги',
  },

  bookForm: {
    title: 'Название',
    titleIn: 'Полное название книги',
    author: 'Автор',
    authorIn: 'Фамилия И.О. автора',
    pagesIn: 'Количество страниц книги',
    description: 'Описание',
    descriptionIn: 'Ссылка на сайт с описанием книги',
    cover: 'Обложка',
    tags: 'Теги',
    choose: 'Выбрать',
  },

  speakersIndex: {
    addSpeaker: 'Добавить спикера',
    name: 'ФИО',
  },

  speakerCreate: {
    speakerCreate: 'Добавление спикера',
  },

  speakerEdit: {
    speakerEdit: 'Редактирование спикера',
  },

  speakerForm: {
    surname: 'Фамилия',
    surnameIn: 'Введите фамилию',
    name: 'Имя',
    nameIn: 'Введите имя',
    middleName: 'Отчество',
    middleNameIn: 'Введите отчество',
  },
};