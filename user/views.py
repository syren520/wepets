from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import login, logout
from user.models import User
from auth.backend import emailAuthBackend
from django.db.utils import IntegrityError as usernameDuplicatedError


def post_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    if not username or not password:
        HttpResponse(status=400)

    backend = emailAuthBackend()
    user = backend.authenticate(request=request, email=username, password=password)
    if user is not None:
        login(request, user)
    else:
        return HttpResponse(status=401)
    return HttpResponse(status=200)


def post_create_new_user(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    if not username or not password:
        return HttpResponse(status=400)

    try:
        user = User.objects.create_user(username, password)
    except usernameDuplicatedError:
        return HttpResponse(content='email already existed', status=400)
    if user is not None:
        login(request, user)
    else:
        return HttpResponse(status=500)

    return HttpResponse(status=200)


def get_logout(request):
    logout(request)
    return HttpResponse(status=200)
