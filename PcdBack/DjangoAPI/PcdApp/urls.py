from rest_framework import routers
from .views import StudentsView ,RecruteursView,AgendaView,LogoutView

from .views import InfoAddView, InfoPerView , CompetenceView, CvView,Student_login

from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register(r'student', StudentsView)
router.register(r'recruteur',RecruteursView)


router.register(r'auth',Student_login)

router.register(r'infoper',InfoPerView)
router.register(r'competence',CompetenceView)
router.register(r'infoadd',InfoAddView)
router.register(r'cv',CvView)

router.register(r'agenda',AgendaView)
urlpatterns = [
    path('', include(router.urls) ),
    path('logout', LogoutView.as_view()),
]

#+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

