from logging.config import IDENTIFIER
import psycopg2
from psycopg2 import sql
import csv
import os

# read data from environment if present
env_path = "../../.env"
fd = os.open(env_path, os.O_RDONLY)
n = 300

file_data = os.read(fd, n)
parsed_string = ""

# convert each ASCII value to its corresponding character
for c in file_data:
    parsed_string = parsed_string + chr(c)

start = parsed_string.find('postgres')
end = parsed_string.find('EXPRESS')

# receive conn string from env
constring = parsed_string[start:end]
os.close(fd)

# connect to local database instance and open a cursor
conn = psycopg2.connect("dbname=e-commerce-092122 user=mikayladobson")
cur = conn.cursor()

# read and print data from selection
cur.execute("SELECT * FROM users;")
for i in cur.fetchall():
    print(i)

# function to read from a given csv file into postgres
def insert_file_contents(file_path, table_name, column_count):
    with open(file_path, 'r') as f:
        reader = csv.reader(f)
        header_names = ""
        first_row_accessed = False

        for row in reader:
            # get row values from first row of reader
            if not first_row_accessed:
                header_names = row
                first_row_accessed = True
                continue

            # execute table insertion for each row of csv based on number of columns
            if column_count == 1:
                cur.execute(sql.SQL(
                    "INSERT INTO {} (%s) VALUES (%s)").format(sql.Identifier(table_name)),
                    [header_names, row]
                )
            elif column_count == 3:
                cur.execute(sql.SQL("INSERT INTO {} ({}) VALUES (%s, %s, %s)".format(sql.Identifier(table_name), sql.Identifier(header_names[0])), row))
            else:
                raise

    conn.commit()


insert_file_contents("./categories.csv", "category", 1)

cur.execute("SELECT * FROM category;")
for i in cur.fetchall():
    print(i)