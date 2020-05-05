import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { Provider } from 'react-redux'
import { store } from './_helpers'
import 'bootstrap/dist/css/bootstrap.css'
/*import 'font-awesome/css/font-awesome.min.css';*/
import 'assets/scss/zest-admin.css'
import 'assets/fonts/simple-line-icons.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

