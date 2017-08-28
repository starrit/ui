import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import homeRoutes from "./home/routes";

const bunyan = require('bunyan');
var logger = bunyan.createLogger({
  name: "STARRIT-Node",
  level:20, });

logger.info("Logging Initied");
// ===============================================
// Bootstrap Server
logger.info("BootStrapping Server");
const server = express();
server.set('port', (process.env.PORT || 3030));

server.use('/dist/', express.static('dist/', {fallthrough: false}));

server.use("/", homeRoutes);


server.listen(server.get('port'));

logger.info('listening');
