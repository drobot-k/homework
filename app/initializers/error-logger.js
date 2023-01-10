import ErrorLogger from '../loggers/error-logger';

export function initialize( application ) {
  application.register('logger:error-logger', ErrorLogger);

  application.inject('component', 'errorLogger', 'logger:error-logger');
  application.inject('controller', 'errorLogger', 'logger:error-logger');
  application.inject('route', 'errorLogger', 'logger:error-logger');
}

export default {
  initialize
};
