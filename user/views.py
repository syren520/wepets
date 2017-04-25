from django.shortcuts import render

from django.http import JsonResponse, HttpResponse


from django.contrib.auth import login, logout
from user.models import User
from auth.backend import emailAuthBackend
from django.db.utils import IntegrityError as usernameDuplicatedError

def postLogin(request):
    backend = emailAuthBackend()
    user = backend.authenticate(request=request, email='aab@gmail.com', password='ttttt')
    if user is not None:
        login(request, user)
    else:
        return HttpResponse(status=401)

    return  HttpResponse(status=200)


def postCreateNewUser(request):
    try:
        user = User.objects.create_user('aabcetwrt@gmail.com', 'ttttt')
    except usernameDuplicatedError:
        return HttpResponse(content='email already existed', status=400)
    # backend = emailAuthBackend()
    # user = backend.authenticate(request=request, email='aab@gmail.com', password='ttttt')
    if user is not None:
        login(request, user)
    else:
        return HttpResponse(status=500)

    return  HttpResponse(status=200)
