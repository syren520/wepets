from django.http import JsonResponse
from database import databaseQueries

def get_all_products():
    return databaseQueries.exe_raw_query("SELECT name, description FROM products")


def getProductList(request):
        products = get_all_products()
        return JsonResponse(products, safe=False)
