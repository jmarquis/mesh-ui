/* eslint-disable no-console */

const logLevels = {
  error: 1,
  warn: 2,
  info: 3,
  log: 4
}

const logLevel = 4

export function error(...args) {
  if (logLevel >= logLevels.error) console.error(...args)
}

export function warn(...args) {
  if (logLevel >= logLevels.warn) console.warn(...args)
}

export function info(...args) {
  if (logLevel >= logLevels.info) console.info(...args)
}

export function log(...args) {
  if (logLevel >= logLevels.log) console.log(...args)
}
