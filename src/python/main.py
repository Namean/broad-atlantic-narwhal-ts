#!/usr/bin/env python3

# /src/python/main.py


#import sqlite3
import mymodule


mymodule.greeting("Jonathan")


db_config = {
    "file_name": "company"
}
mymodule.create_sqlite_database(db_config['file_name'])



if __name__ == '__main__':
    print("Hello World!")
