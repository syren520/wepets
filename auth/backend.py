from user.models import User
from django.contrib.auth.backends import ModelBackend


class emailAuthBackend(ModelBackend):
    def authenticate(self, request, email, password=None):
        login_valid = True
        pwd_valid = True
        if login_valid and pwd_valid:
            try:
                user = User.objects.get(email=email)
                user.backend='auth.backend.emailAuthBackend'
            except User.DoesNotExist:
                return None
            return user
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
