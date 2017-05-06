'use strict';
const express = require('express');
const app = express();
var server = require('./server');
const port = process.env.PORT || 3000;

server.start(port, server.getApp(app));