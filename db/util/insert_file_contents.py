import csv
from re import M
from psycopg2 import sql

# function to read from a given csv file into postgres
def insert_file_contents(conn, cur, file_path, table_name):
    with open(file_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        first_row_accessed = False
        header_names = ""
        num_columns = 0

        for row in reader:
            # get row values from first row of reader
            if not first_row_accessed:
                header_names = [item for item in row]
                num_columns = len(header_names)
                first_row_accessed = True
                continue

            mapped_columns = [header_names[i] for i in range(num_columns)]
            prepared_q = sql.SQL("INSERT INTO {TABLE} ({COLS}) VALUES ({VALS})").format(
                TABLE=sql.Identifier(table_name),
                COLS=sql.SQL(', ').join(map(sql.Identifier, mapped_columns)),
                VALS=sql.SQL(', ').join(sql.Placeholder() * len(mapped_columns))
            )
            
            cur.execute(prepared_q, [item for item in row])

    conn.commit()