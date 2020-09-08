import { userConstants } from '_constants'

let user = JSON.parse(localStorage.getItem('userv2'))
const initialState = user
  ? { loggedIn: true, user, userData: user.user_data.user }
  : { loggedIn: false, user }

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        userData: action.user.user_data.user,
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGIN_SET_USER:
      return {
        ...state,
        userData: action.userData,
      }
    case userConstants.LOGOUT:
      return {}
    case 'INICIAR':
      return {
        user: {
          user_data: {
            user: {},
          },
        },
      }
    default:
      return state
  }
}
