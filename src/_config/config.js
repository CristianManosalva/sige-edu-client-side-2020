require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 4000,
  apiEndPoint: process.env.API_END_POINT || "http://localhost:3000/api/v1",
};

module.exports = {
  config,
};
