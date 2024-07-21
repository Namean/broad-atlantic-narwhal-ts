

// init project
import express from 'express';
import fs from 'node:fs';
import bodyParser = require('body-parser');
import { AddressInfo } from 'net';
// const uuid = require('crypto').randomUUID;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// init sqlite db
const dbFile = "./.data/sqlite.db";
const exists = fs.existsSync(dbFile);
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
  db.all(select_all_dreams, (err: Error, rows: string[]) => {
    if (err) throw err;
    const json_rows: string = JSON.stringify(rows);
    response.send(json_rows);
  })
})


// helper function that prevents html/css/script malice
const cleanseString = function (string: string): string {
  return string.replace(/</g, "%lt;").replace(/>/g, "&gt;");
};

// listener for requests
//const server_port: any = process.env.PORT ?? 8000;

const { PORT } = process.env;
var listener = app.listen(PORT, function () {
  const addressString = listener.address() as AddressInfo;
  console.log(`Your app is listenting on port ${addressString['port']}`);
})














