#!/usr/bin/env python3


import sqlite3

def greeting(name):
    print("Hello, " + name)


def create_sqlite_database(file_name):
    """ Create a database connection to an SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(file_name)
        print(f"sqlite3_version: {sqlite3.sqlite_version}")
    except sqlite3.Error as e:
        print(e)
    finally:
        if conn:
            conn.close()





