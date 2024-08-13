const sqlite3 = require('sqlite3').verbose();

// open the database
const db_name = process.env.db ?? 'chinook.db';
const db_path='/Users/allspark/Documents/src/repos/my-repos/july/broad-atlantic-narwhal-ts/.data'
let db = new sqlite3.Database(`${db_path}/${db_name}`, sqlite3.OPEN_READWRITE, (err: Error) => {
  if (err) {
    console.error(err.message);
  }
  console.log(`Connected to the ${db_name} database.`);
});

db.serialize(() => {
  db.each(`SELECT PlaylistId as id,
                  Name as name
           FROM playlists`, (err: Error, row: any) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});

db.close((err: Error) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
