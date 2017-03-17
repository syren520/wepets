from django.http import JsonResponse
from database import databaseQueries

GET_ALL_PRODUCTS = """
WITH
    group_tags AS (
    SELECT
        pt.product_id,
        array_agg(t.name)
    FROM
        products_tags AS pt
        JOIN tags AS t ON pt.tag_id = t.id
    GROUP BY pt.product_id
    )
SELECT
    p.*,
    gt.array_agg AS tags
FROM
    products AS p
    LEFT JOIN group_tags AS gt ON gt.product_id = p.id;
    """

def get_all_products():
    return databaseQueries.exe_raw_query(GET_ALL_PRODUCTS)


def getProductList(request):
        products = get_all_products()
        return JsonResponse(products, safe=False)
