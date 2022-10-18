import psycopg2
from decouple import config
from insert_contents import insert_contents

# read data from environment if present
env_path = "../../.env"
DB_CONN = config('CONNECTION')
USER = "mikayladobson"

# connect to local database instance and open a cursor
conn = psycopg2.connect(DB_CONN)
cur = conn.cursor()

print("Now attempting to populate database...")

# read contents of each file into postgres
insert_contents(conn, cur, "./data/categories.csv", 'category')
insert_contents(conn, cur, "./data/regions.csv", 'region')
insert_contents(conn, cur, "./data/products.csv", 'product')

print("Insertions executed successfully.")
print("Database preparations complete!")
