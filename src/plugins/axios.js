"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/plugins/axios.js
var axios_1 = require("axios");
var axiosInstance = axios_1.default.create({
    baseURL: 'http://127.0.0.1:8000/api', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json'
    }
});
axiosInstance.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // For example, add an authentication token
    var token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) { return response; }, function (error) {
    // Handle error
    if (error.response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login
    }
    return Promise.reject(error);
});
exports.default = axiosInstance;
