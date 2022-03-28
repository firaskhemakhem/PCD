from django.urls import re_path as url
from PcdApp import views
from rest_framework import routers
<<<<<<< HEAD
from .views import StudentsView ,RecruteursView,Student_login
=======
from .views import StudentsView ,RecruteursView, InfoAddView, InfoPerView , CompetenceView, CvView
>>>>>>> dbe89ad9c556bf731337624b37f7407f2fee6498
from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register(r'student', StudentsView)
router.register(r'recruteur',RecruteursView)
<<<<<<< HEAD
router.register(r'auth',Student_login)
=======
>>>>>>> dbe89ad9c556bf731337624b37f7407f2fee6498


router.register(r'InfoPer',InfoPerView)
router.register(r'Competence',CompetenceView)
router.register(r'InfoAdd',InfoAddView)
router.register(r'cv',CvView)

urlpatterns = [
    path('', include(router.urls) ),
<<<<<<< HEAD
    #url(r'^student/$',views.studentsApi),
    #url(r'^student/([0-9]+)$',views.studentsApi),
    #url(r'^auth/',views.Student_login),
    #url(r'^recruteur/$',views.recruteursApi),
    #url(r'^recruteur/([0-9]+)$',views.recruteursApi)
]
=======
    #url(r'^student/$',views.studentsApi)
]

#+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
>>>>>>> dbe89ad9c556bf731337624b37f7407f2fee6498
