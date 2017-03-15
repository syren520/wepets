from django.shortcuts import render
from django.http import JsonResponse

def getProductList(request):
        return JsonResponse([
                         {'name': 'Dog-food1', 'id': 1, 'description': 'AAAAAAA'},
                         {'name': 'Dog-food2', 'id': 2, 'description': 'BBBBBBB'},
                         {'name': 'Dog-food3', 'id': 3, 'description': 'CCCCCCC'},
                         {'name': 'Dog-food4', 'id': 4, 'description': 'DDDDDDDDD'}
        ], safe=False)
