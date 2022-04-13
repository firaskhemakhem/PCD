from rest_framework import routers
from .views import FeedBackView, InterSujView, StudentsView ,RecruteursView,AgendaView, SuitView,SujetView

from .views import StudentsView ,RecruteursView, InfoAddView, InfoPerView , CompetenceView, CvView,ImageView,PDFView
from .views import InfoAddView, InfoPerView , CompetenceView, CvView,Student_login

from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register(r'student', StudentsView)
router.register(r'recruteur',RecruteursView)
router.register(r'media/image',ImageView)
router.register(r'media/pdf',PDFView)


router.register(r'auth',Student_login)

router.register(r'infoper',InfoPerView)
router.register(r'competence',CompetenceView)
router.register(r'infoadd',InfoAddView)
router.register(r'cv',CvView)

router.register(r'sujet', SujetView)
router.register(r'feedback',FeedBackView)
router.register(r'agenda',AgendaView)

router.register(r'suit',SuitView)

router.register(r'interessant',InterSujView)
urlpatterns = [
    path('', include(router.urls) ),

]

#+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

