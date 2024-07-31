#!/bin/env node
"use strict";
/* src/connect-pg.ts */
// [node-postgres](https://node-postgres.com/)
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const { Client } = pg_1.default;
const client = new Client({
    user: 'postgres',
    password: 'binbash#18',
    host: 'localhost',
    port: 5432,
    database: 'desmond'
});
await client.connect();
const query_string = "SELECT * FROM playground;";
const res = await client.query(query_string);
console.log(res.rows); // Hello World!
await client.end();
//# sourceMappingURL=connect-pg.js.map