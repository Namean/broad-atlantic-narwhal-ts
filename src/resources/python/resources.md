


## sqlitetutorial.net

- [SQLite Python: Creating a New Database](https://www.sqlitetutorial.net/sqlite-python/creating-database/)
- [SQLite Python: Creating Tables](https://www.sqlitetutorial.net/sqlite-python/creating-tables/)
- [SQLite Python: Inserting Data](https://www.sqlitetutorial.net/sqlite-python/insert/)

## StackOverflow

- [How do I check whether a file exists without exceptions?](https://stackoverflow.com/questions/82831/how-do-i-check-whether-a-file-exists-without-exceptions)


## W3schools

- [Python Modules](https://www.w3schools.com/python/python_modules.asp)

- [Python File Handling](https://www.w3schools.com/python/python_file_handling.asp)



- r (default): Opens a file for reading, error if !file
- a: Opens a file for appending, creates the file if !exist
- w: Opens a file for writing, creates the file if !exist
- x: Creates the specified file, returns an error if file
- t: text mode
- b: Binary mode (e.g. images)


To open a file for reading it is enough to specify the name of the file:

f = open("demofile.txt")
f = open("demofile.txt", "rt")


- [Python Read Files](https://www.w3schools.com/python/python_file_open.asp)


To open a file use the built-in `open()` function.

The `open()` function returns a file object, which has a `read()` method for reading
the content of the file:

f = open('demofile.txt', 'r')
print(f.read())

If the file is located in a different location, you will have to specify the file path

f = open('D:\\myfiles\welcome.txt', 'r')
print(f.read())

### Read only parts of the file

Be default the `read()` function returns the whole text, but you can also specify
how many charactes you want to return:


f = open('demofile.txt', 'r')
print(f.read(5))

### Read lines

f = open('demofile.txt', 'r')
print(f.readline())



f = open('demofile.txt', 'r')
print(f.readline())
f.close()

> Note: You should always close your files, in some cases, due to buffering, changes made to a file may not show until you close the file.







