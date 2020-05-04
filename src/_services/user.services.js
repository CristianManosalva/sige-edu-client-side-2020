import { config } from '_config'

export const userService = {
  login,
  logout,
}

function login(documentIdUser, passwordUser) {
  console.log('Document ', documentIdUser)
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      documentIdUser: documentIdUser,
      passwordUser: passwordUser,
    }),
  }

  console.log('Options: ', options)
  return fetch(`${config.apiOficial}/users/login/`, options)
    .then(handleResponse)
    .then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data))
      return data
    })
  /* .catch((error) => {
      console.log(error)
      return Promise.reject('Error de conexion')
    }) */
}

function logout() {
  localStorage.removeItem('user')
}

function handleResponse(response) {
  console.log('LA response: ', response)
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

      const error = data.message || response.statusText || 'Error mostro'
      return Promise.reject(error)
    }

    if (response.ok) {
      if (data.code !== 200) {
        logout()
        const error = data.message || response.statusText || 'Error mostro'
        return Promise.reject(error)
      }
    }

    return data
  })
}
