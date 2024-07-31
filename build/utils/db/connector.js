"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
// init sqlite db
const { PORT } = process.env;
const path_to_database_files = "./data/";
const database_name = "sqlitedb";
const db_confg = {
    database_name: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 'sqlite3',
    file: "./.data/sqlitedb",
    exists: node_fs_1.default.existsSync(this.db_file)
};
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(db_file);
class Controller {
    constructor() { }
}
