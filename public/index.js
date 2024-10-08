"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// init project
const express_1 = __importDefault(require("express"));
const node_fs_1 = __importDefault(require("node:fs"));
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express_1.default.static("public"));
// init sqlite db
const dbFile = "./.data/sqlite.db";
const exists = node_fs_1.default.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);
const create_table_dreams = `CREATE TABLE DREAMS (id INTEGER PRIMARY KEY AUTOINCREMENT, dream TEXT)`;
const insert_into_dreams = `INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")`;
const select_all_dreams = `SELECT * from Dreams`;
//TODO:  if ./.data/sqlite.db does not exist, create it, otherwise print records to console
app.get("/", (request, response) => {
    const index_html = `${__dirname}/views/index.html`;
    response.sendFile(index_html);
});
// endpoint to get all the dreams in the database
app.get("/getDreams", (request, response) => {
    db.all(select_all_dreams, (err, rows) => {
        const json_rows = JSON.stringify(rows);
        response.send(json_rows);
    });
});
// helper function that prevents html/css/script malice
const cleanseString = function (string) {
    return string.replace(/</g, "%lt;").replace(/>/g, "&gt;");
};
// listener for requests
var listener = app.listen(process.env.PORT, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});
