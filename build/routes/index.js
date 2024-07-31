#!/bin/env node
"use strict";
/*
 * src/routes/index.ts
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET home page */
exports.indexRouter = router.get('/', function (req, res) {
    res.redirect("/catalog");
});
//# sourceMappingURL=index.js.map