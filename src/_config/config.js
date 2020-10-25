require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 4000,
  apiEndPoint:
    process.env.REACT_APP_API_END_POINT || 'http://localhost:8000/api',
  picturesEndPoint: process.env.REACT_APP_PICTURES_END_POINT,
  // apiEndPoint: 'http://localhost:8000/api',
}

module.exports = {
  config,
}
