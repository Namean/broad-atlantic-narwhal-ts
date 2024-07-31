#!/usr/bin/env node

const dbFile = process.env.dreams as PathLike;
import fs from 'node:fs';
import { PathLike } from 'node:fs';
const exists: boolean = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./dreams.db');



export function myFunction() {
  // if ./.data/sqlite.db does not exist, create it, otherwise print records to console
  db.serialize(() => {
    if (!exists) {
      db.run(
        "CREATE TABLE Dreams (id INTEGER PRIMARY KEY AUTOINCREMENT, dream TEXT)",
      );
      console.log("New table Dreams created!");

      // insert default dreams
      db.serialize(() => {
        db.run(
          'INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")',
        );
      });
    } else {
      console.log('Database "Dreams" ready to go!');
      db.each("SELECT * from Dreams", (err: Error, row: any) => {
        if (row) {
          console.log(`record: ${row.dream}`);
        }
      });
    }
  });
}
