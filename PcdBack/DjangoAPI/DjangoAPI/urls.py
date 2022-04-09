"""DjangoAPI URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
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
    path('authrec/',obtain_auth_token),
    path('auth/',obtain_auth_token),
    path('agenda/',obtain_auth_token),
    path('feedback/',obtain_auth_token),

    path('infoper/',obtain_auth_token),
    path('competence/',obtain_auth_token),
    path('infoadd/',obtain_auth_token),
    path('cv/',obtain_auth_token),

    path('sujet/',obtain_auth_token)

]
