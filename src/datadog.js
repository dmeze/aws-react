import { datadogLogs } from '@datadog/browser-logs'

export const enableLogger = () => {
  return datadogLogs.init({
    clientToken: 'pub7082d76fae0ff90e67931c126ce88ebe',
    site: 'datadoghq.eu',
    forwardErrorsToLogs: true,
    sessionSampleRate: 100
  })
}

export const logInfo = (message, context) => {
  datadogLogs.logger.info(message, context)
}

export const logError = (message, context) => {
  datadogLogs.logger.error(message, context)
}
