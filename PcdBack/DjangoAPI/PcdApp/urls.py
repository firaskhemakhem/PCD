from rest_framework import routers
from .views import StudentsView ,RecruteursView,Student_login

from .views import StudentsView ,RecruteursView, InfoAddView, InfoPerView , CompetenceView, CvView

from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register(r'student', StudentsView)
router.register(r'recruteur',RecruteursView)
router.register(r'auth',Student_login)




router.register(r'InfoPer',InfoPerView)
router.register(r'Competence',CompetenceView)
router.register(r'InfoAdd',InfoAddView)
router.register(r'cv',CvView)

urlpatterns = [
    path('', include(router.urls) ),

]

#+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

