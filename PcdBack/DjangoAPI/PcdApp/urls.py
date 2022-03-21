from django.urls import re_path as url
from PcdApp import views
from rest_framework import routers
from .views import StudentsView ,RecruteursView
from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('PcdApp/student/', StudentsView)
router.register('PcdApp/recruteur/',RecruteursView)


urlpatterns = [
    #path('', include(router.urls) ),
    url(r'^student/$',views.studentsApi),
    url(r'^student/([0-9]+)$',views.studentsApi),

    url(r'^recruteur/$',views.recruteursApi),
    url(r'^recruteur/([0-9]+)$',views.recruteursApi)
]