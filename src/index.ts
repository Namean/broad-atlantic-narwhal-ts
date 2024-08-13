#!/bin/env node



// init project
import express from 'express';
import fs from 'node:fs';
import bodyParser from 'body-parser';
import { AddressInfo } from 'net';
// const uuid = require('crypto').randomUUID;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// init sqlite db
//const dbFile = "../.data/chinook.db";
const dbFile = process.env.dbFile;
//const exists = fs.existsSync(dbFile);
//const sqlite3 = require('sqlite3').verbose();
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./dreams.db');


import { sum } from './sum';
console.log(sum(1, 1))
import { myFunction } from './myFunction';
//import { get_all_dreams } from './queries';

myFunction();

//TODO:  if ./.data/sqlite.db does not exist, create it, otherwise print records to console





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

  const addressString = listener.address() as AddressInfo;
  console.log(`Your app is listenting on port ${addressString['port']}`);
})














