"use strict";
exports.__esModule = true;
exports.logger = void 0;
var winston_1 = require("winston");
exports.logger = winston_1.createLogger({
    level: 'debug',
    format: winston_1.format.simple(),
    transports: [
        new winston_1.transports.File({ filename: 'combined.log' }),
        new winston_1.transports.Console()
    ]
});
