import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '_reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

let user = JSON.parse(localStorage.getItem('userv2'))
if (!user) {
  store.dispatch({
    type: 'INICIAR',
    text: 'Read the docs',
  })
}
/* user ? { loggedIn: true, user } : { loggedIn: false, user }

store.dispatch({
  type: 'INICIAR',
  text: 'Read the docs',
}) */

export { store }
