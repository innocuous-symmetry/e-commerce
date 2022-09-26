from insert_file_contents import insert_file_contents
import psycopg2
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

print("Now attempting to populate database...")

# read contents of each file into postgres
insert_file_contents(conn, cur, "./data/categories.csv", 'category')
insert_file_contents(conn, cur, "./data/regions.csv", 'region')
insert_file_contents(conn, cur, "./data/products.csv", 'product')

print("Insertions executed successfully.")
print("Database preparations complete!")