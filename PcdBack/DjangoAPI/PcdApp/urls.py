from rest_framework import routers
from .views import StudentsView ,RecruteursView

from .views import StudentsView ,RecruteursView, InfoAddView, InfoPerView , CompetenceView, CvView,ImageView,PDFView

from django.urls import path
from django.conf.urls import include

router = routers.DefaultRouter()
router.register(r'student', StudentsView)
router.register(r'recruteur',RecruteursView)
router.register(r'media/image',ImageView)
router.register(r'media/pdf',PDFView)
router.register(r'infoper',InfoPerView)
router.register(r'competence',CompetenceView)
router.register(r'infoadd',InfoAddView)
router.register(r'cv',CvView)

urlpatterns = [
    path('', include(router.urls) ),

]

#+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

