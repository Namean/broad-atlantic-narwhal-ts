"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exists = node_fs_1.default.existsSync(dbFile);
const node_fs_1 = __importDefault(require("node:fs"));
db.serialize(() => {
    if (!exists) {
        db.run("CREATE TABLE Dreams (id INTEGER PRIMARY KEY AUTOINCREMENT, dream TEXT)");
        console.log("new table Dreams created!");
        // insert default dreams
        db.serialize(() => {
            db.run('INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dished")');
        });
    }
});
