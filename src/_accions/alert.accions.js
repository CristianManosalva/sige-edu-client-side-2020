import { alertConstants } from '_constants'

export const alertActions = {
  success,
  error,
  clear,
  password,
  nationalid,
}

function success(message) {
  return { type: alertConstants.SUCCESS, message }
}

function error(message) {
  return { type: alertConstants.ERROR, message }
}

function clear() {
  return { type: alertConstants.CLEAR }
}

function password() {
  return { type: alertConstants.PASSWORD }
}

function nationalid() {
  return { type: alertConstants.NATIONALID }
}
