#!/usr/bin/env python3


# /sql/update/read.py

db_path = "../../../.data/"
db_name = "dreams.db"
db_full_path = db_path + db_name

file_name = 'insert_projects.sql'
get_all_dreams = 'SELECT * FROM Dreams'
f = open(file_name)
file_content = f.read()
print(file_content)
