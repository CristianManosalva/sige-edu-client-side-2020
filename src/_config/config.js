require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 4000,
  apiEndPoint:
    process.env.REACT_APP_API_END_POINT || 'http://localhost:4000/api/v1',
  apiOficial: 'http://api.sige-edu.com:8000/api',
}

module.exports = {
  config,
}
