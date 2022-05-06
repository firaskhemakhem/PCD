from django.contrib import admin
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from django.urls import re_path as url
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('PcdApp/',include('PcdApp.urls')),
    path('student/', obtain_auth_token),
    path('recruteur/',obtain_auth_token),
    path('media/image/',obtain_auth_token),
    path('media/pdf/',obtain_auth_token),
    path('authrec/',obtain_auth_token),
    path('agenda/',obtain_auth_token),
    path('feedback/',obtain_auth_token),
    path('infoper/',obtain_auth_token),
    path('competence/',obtain_auth_token),
    path('infoadd/',obtain_auth_token),
    path('cv/',obtain_auth_token),
    path('changepass/',obtain_auth_token),

    path('sujet/',obtain_auth_token),
    path('suit/',obtain_auth_token),
    path('feedbacketurec/',obtain_auth_token),
    path('interessant/',obtain_auth_token),

    path('notifEtu/',obtain_auth_token),
    path('notifRec/',obtain_auth_token),

    path('test', obtain_auth_token)
        
]
