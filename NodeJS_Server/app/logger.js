const path = require('path');
const { createLogger, transports, format } = require('winston');

const { combine, timestamp, json, label } = format;
const filename = path.join(__dirname, '/logs/requestsLogs.log');

const logger = createLogger({
    level: 'info',
    format: combine(label({ label: 'Request path and method' }), timestamp(), json()),
    transports: [
        // logs in console
        new transports.Console(),
        // logs into file
        new transports.File({ filename }),
    ],
});

module.exports = logger;
