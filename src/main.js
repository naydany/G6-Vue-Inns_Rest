"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.min.css"); // Import Bootstrap CSS
require("./assets/main.css");
var vue_1 = require("vue");
var pinia_1 = require("pinia");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var element_plus_1 = require("element-plus");
require("element-plus/dist/index.css");
var axios_1 = require("./plugins/axios");
require("uno.css");
var vee_validate_1 = require("vee-validate");
var app = (0, vue_1.createApp)(App_vue_1.default);
(0, vee_validate_1.configure)({
    validateOnInput: true
});
app.use((0, pinia_1.createPinia)());
app.use(router_1.default.router);
app.use(element_plus_1.default);
app.use(router_1.default.simpleAcl);
app.config.globalProperties.$axios = axios_1.default;
app.mount('#app');

// src/main.js or src/main.ts



