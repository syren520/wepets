from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'login', views.post_login),
    url(r'logout', views.get_logout),
    url(r'register', views.post_create_new_user)
]
