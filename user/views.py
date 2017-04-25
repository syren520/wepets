from django.shortcuts import render

from django.http import JsonResponse, HttpResponse


from django.contrib.auth import login, logout
from auth.backend import emailAuthBackend


def postLogin(request):
    backend = emailAuthBackend()
    user = backend.authenticate(request=request, email='aab@gmail.com', password='ttttt')
    if user is not None:
        login(request, user)
    else:
        return HttpResponse(status=401)

    return  HttpResponse(status=200)
