#!/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const root_route_1 = require("./routes/root.route");
console.log("Hello World!");
app.use("/", root_route_1.indexRouter);
const PORT = 9001; // Its over 9000!!
var listener = app.listen(PORT, function () {
    const addressString = listener.address();
    console.log(`Your app is listenting on port ${addressString['port']}`);
});
