import psycopg2
import os

# read data from environment if present
path = "../../.env"
fd = os.open(path, os.O_RDONLY)
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