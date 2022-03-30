from django.urls import re_path as url
#from PcdApp import views
from rest_framework import routers
from .views import StudentsView ,RecruteursView, InfoAddView, InfoPerView , CompetenceView, CvView
from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register(r'student', StudentsView)
router.register(r'recruteur',RecruteursView)


router.register(r'infoper',InfoPerView)
router.register(r'competence',CompetenceView)
router.register(r'infoadd',InfoAddView)
router.register(r'cv',CvView)

urlpatterns = [
    path('', include(router.urls) ),
    #url(r'^student/$',views.studentsApi)
]

#+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)