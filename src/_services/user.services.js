import { config } from '_config'

export const userService = {
  login,
  logout,
}

function login(email, password) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }
  return fetch(`${config.apiEndPoint}/user/login`, options)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user))
      return user
    })
}

function logout() {
  localStorage.removeItem('user')
}

function handleResponse(response) {
  return response.json().then((data) => {
    //return response.text().then((text) => {
    // const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        //eslint-disable-next-line
        //location.reload(true) recarga la direccion, mejor cambiar por un push
      }

      const error = data.message || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
