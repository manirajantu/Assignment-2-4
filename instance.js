// Create instance of Axios
const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.data.gov.sg/v1'
});

module.exports = api;