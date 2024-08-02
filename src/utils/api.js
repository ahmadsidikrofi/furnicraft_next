// src/utils/api.js
const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

module.exports = api;
