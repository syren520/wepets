from django.db import connection

def dictfetchall(cursor):
    "Returns all rows from a cursor as a dict"
    desc = cursor.description
    return [
        dict(zip([col[0] for col in desc], row))
        for row in cursor.fetchall()
    ]

def exe_raw_query(query):
    cursor = connection.cursor()
    cursor.execute(query)
    row = dictfetchall(cursor)
    return row
