"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error_handler = exports.not_found = void 0;
const not_found = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
exports.not_found = not_found;
const error_handler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err.msg,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};
exports.error_handler = error_handler;
