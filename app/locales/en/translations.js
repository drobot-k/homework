export default {
  errors: {
    description: "This field",
    inclusion: "{{description}} is not included in the list",
    exclusion: "{{description}} is reserved",
    invalid: "{{description}} is invalid",
    confirmation: "{{description}} doesn't match {{on}}",
    accepted: "{{description}} must be accepted",
    empty: "{{description}} can't be empty",
    blank: "{{description}} can't be blank",
    present: "{{description}} must be blank",
    collection: "{{description}} must be a collection",
    singular: "{{description}} can't be a collection",
    tooLong: "{{description}} is too long (maximum is {{max}} characters)",
    tooShort: "{{description}} is too short (minimum is {{min}} characters)",
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
    otherThan: "{{description}} must be other than {{value}}",
    odd: "{{description}} must be odd",
    even: "{{description}} must be even",
    positive: "{{description}} must be positive",
    date: "{{description}} must be a valid date",
    onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
    onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
    email: "{{description}} must be a valid email address",
    phone: "{{description}} must be a valid phone number",
    url: "{{description}} must be a valid url"
  },

  menu: {
    bookClub: 'Book club',
    desktop: 'Desktop',
    meetings: 'Club meetings',
    books: 'Books',
    speakers: 'Speakers',
    submitYourApplication: 'Submit your application',
    plan: 'Plan',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
    hello: 'Hello',
  },

  register: {
    register: 'Register',
    email: 'name@example.com',
    password: 'Password',
    back: 'Back',
  },

  login: {
    login: 'Login',
    email: 'name@example.com',
    password: 'Password',
    remember: 'Remember',
    signIn: 'Sign in',
    back: 'Back',
  },

  meetingsIndex: {
    addMeeting: 'Add meeting',
    speaker: 'Speaker',
    book: 'Book',
    speakerWithDots: 'Speaker...',
    bookWithDots: 'Book...',
    meetingDate: 'Meeting date',
  },

  meetingItem: {
    listOfReports: 'List of reports',
  },

  reportItem: {
    speakerPhoto: 'Speaker photo',
    rating: 'Rating',
    ratingNo: 'No one has rated yet',
    review: 'Review',
    links: 'Links',
    record: 'View the recording of the report',
    downloadPresentation: 'Download presentation',
  },

  meetingCreate: {
    meetingCreate: 'Create meeting',
  },

  meetingEdit: {
    meetingEdit: 'Edit meeting',
  },

  meetingForm: {
    chooseDate: 'Select date',
    date: 'Date...',
    saveMeeting: 'To add reports, first enter the date of the meeting and save it',
    save: 'Save',
    cancel: 'Cancel',
  },

  reportCreate: {
    reportCreate: 'Create report',
  },

  reportEdit: {
    reportEdit: 'Edit report',
  },
  
  reportForm: {
    reportDate: 'Report date',
    rating: 'Book rating',
    ratingIn: 'Enter rating',
    presentationURL: 'Presentation URL ',
    presentationURLIn: 'Enter presentation URL',
    videoURL: 'Video URL',
    videoURLIn: 'Enter video URL',
    chooseBook: 'Choose a book...',
    chooseSpeaker: 'Choose a speaker...',
    review: 'Review',
    reviewIn: 'Enter review',
  },

  booksIndex: {
    addBook: 'Add book',
    searchByField: 'Search by field',
    find: 'Find',
    searchByTags: 'Search by tags',
    search: 'Search',
  },

  bookItem: {
    cover: 'Book cover',
    author: 'Author',
    pages: 'Number of pages',
    tags: 'Tags',
    rating: 'Rating',
    description: 'Description',
  },

  bookCreate: {
    bookCreate: 'Create book',
  },

  bookEdit: {
    bookEdit: 'Edit book',
  },

  bookForm: {
    title: 'Title',
    titleIn: 'Full title of the book',
    author: 'Author',
    authorIn: 'Surname Name Middle name of the author',
    pagesIn: 'Number of book pages',
    description: 'Description',
    descriptionIn: 'Link to the website with the book description',
    cover: 'Cover',
    tags: 'Tags',
    choose: 'Choose',
  },

  speakersIndex: {
    addSpeaker: 'Add speaker',
    name: 'Surname Name Middle name',
  },

  speakerCreate: {
    speakerCreate: 'Adding a speaker',
  },

  speakerEdit: {
    speakerEdit: 'Edit speaker',
  },

  speakerForm: {
    surname: 'Last name',
    surnameIn: 'Enter last name',
    name: 'Name',
    nameIn: 'Enter name',
    middleName: 'Middle name',
    middleNameIn: 'Enter middle name',
  },

};