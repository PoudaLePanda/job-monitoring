'use strict';

var winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'debug.log' })
    ]
});
// var logger = new (winston.createLogger)({
// 	transports: [
// 		new (winston.transports.File)({
// 			level: 'debug',
// 			json: true,
// 			handleExceptions: true,
// 			filename: './debug.log'
// 		}),
// 		new (winston.transports.Console)({
// 			level: 'debug',
// 			json: true,
// 			handleExceptions: true
// 		})
// 	],
// 	exitOnError: false
// });

module.exports = logger;