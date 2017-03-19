from django.http import JsonResponse
from database import databaseQueries

GET_ALL_PRODUCTS = """
WITH
    group_tags_and_images AS (
    SELECT
        pt.product_id,
        array_agg(t.name) AS tags,
        array_agg(i.path) AS images
    FROM
        products_tags AS pt
        JOIN tags AS t ON pt.tag_id = t.id
        LEFT JOIN images_products AS ip ON ip.product_id = pt.product_id
        JOIN images AS i ON i.id = ip.image_id
    GROUP BY pt.product_id
    )
SELECT
    p.*,
    gt.tags,
    gt.images
FROM
    products AS p
    LEFT JOIN group_tags_and_images AS gt ON gt.product_id = p.id;
    """

def get_all_products():
    return databaseQueries.exe_raw_query(GET_ALL_PRODUCTS)


def getProductList(request):
        products = get_all_products()
        return JsonResponse(products, safe=False)
