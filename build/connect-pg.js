#!/bin/env node
/* src/connect-pg.ts */
// [node-postgres](https://node-postgres.com/)
//
import pg from 'pg';
const { Client } = pg;
const client = new Client({
  user: 'postgres',
  password: 'binbash#18',
  host: 'localhost',
  port: 5432,
  database: 'desmond'
});
await client.connect();
const query = "SELECT * FROM playground;";
const res = await client.query(query);
console.log(res.rows[0]); // Hello World!
await client.end();
//# sourceMappingURL=connect-pg.js.map
