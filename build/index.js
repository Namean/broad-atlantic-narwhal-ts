#!/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// init project
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// const uuid = require('crypto').randomUUID;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static("public"));
// init sqlite db
//const dbFile = "../.data/chinook.db";
const dbFile = process.env.dbFile;
//const exists = fs.existsSync(dbFile);
//const sqlite3 = require('sqlite3').verbose();
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database('./dreams.db');
const sum_1 = require("./sum");
console.log((0, sum_1.sum)(1, 1));
const myFunction_1 = require("./myFunction");
//import { get_all_dreams } from './queries';
(0, myFunction_1.myFunction)();
//TODO:  if ./.data/sqlite.db does not exist, create it, otherwise print records to console
console.log(process.env.PORT);
app.get("/", (request, response) => {
    const index_html = `${__dirname}/views/index.html`;
    response.sendFile(index_html);
});
/*
// endpoint to get all the dreams in the database
app.get("/getDreams", (request, response) => {
  db.all(get_all_dreams, (err: Error, rows: string[]) => {
    if (err) throw err;
    const json_rows: string = JSON.stringify(rows);
    response.send(json_rows);
  })
})


// helper function that prevents html/css/script malice
const cleanseString = function (string: string): string {
  return string.replace(/</g, "%lt;").replace(/>/g, "&gt;");
};
*/
// listener for requests
//const server_port: any = process.env.PORT ?? 8000;
const { PORT } = process.env;
var listener = app.listen(PORT, function () {
    const addressString = listener.address();
    console.log(`Your app is listenting on port ${addressString['port']}`);
});
//# sourceMappingURL=index.js.map