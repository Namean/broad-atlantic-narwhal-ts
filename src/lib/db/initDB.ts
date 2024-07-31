
//const dbFile = '../../../.data/dreams.db';

const dbFile = process.env.dbFile;
import fs from 'node:fs';
// const exists = fs.existsSync(dbFile);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile);



export function initDB() {
  // if ./.data/sqlite.db does not exist, create it, otherwise print records to console
  db.serialize(() => {
    if (true) {
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
