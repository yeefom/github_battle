import Raven from 'raven-js';

export function logMsg(message, context) {
  Raven.captureMessage(message, {
    level: 'error',
    extra: context
  });

  console.error(message);
}
