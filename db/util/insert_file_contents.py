import csv
from psycopg2 import sql

# function to read from a given csv file into postgres
def insert_file_contents(conn, cur, file_path, table_name, column_count):
    with open(file_path, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header_names = ""
        first_row_accessed = False

        for row in reader:
            # get row values from first row of reader
            if not first_row_accessed:
                header_names = [item for item in row]
                first_row_accessed = True
                continue

            # execute table insertion for each row of csv based on number of columns
            if column_count == 3:
                cur.execute(sql.SQL("INSERT INTO {table} ({h1}, {h2}, {h3}) VALUES (%s, %s, %s)".format(
                        table=table_name,
                        h1=header_names[0],
                        h2=header_names[1],
                        h3=header_names[2]
                    )),
                    row
                )
            elif column_count == 1:
                cur.execute(sql.SQL("INSERT INTO {table} ({field}) VALUES (%s)".format(table=table_name, field=header_names[0])), row)
            else:
                raise

    conn.commit()