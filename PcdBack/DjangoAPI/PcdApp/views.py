from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
#from DjangoAPI.PcdApp.models import Infopers
from PcdApp import serializers
import PcdApp
from django.dispatch import receiver
from django.forms import ValidationError
from django.db.models.signals import pre_save
from PcdApp.models import FeedBackEtudEntr, Students,Recruteurs,UploadImage
from PcdApp.serializers import FeedBackEtudEntrSerializer, StudentsSerializer ,RecruteursSerializer,NotifRecSerializer, NotifEtuSerializer, TestSerializer
#from django.core.files.storages import default_storage  #file storage


<<<<<<< HEAD
from PcdApp.models import Students,Recruteurs, InfoPer, Competence, InfoAdd, Cv, UploadImage,UploadFile,ChangePass
from PcdApp.serializers import StudentsSerializer ,RecruteursSerializer, InfoPerSerializer, CompetenceSerializer,InfoAddSerializer,CvSerializer,ImageSerializer,PDFSerializer,ChangePassSerializer
=======
from PcdApp.models import Students,Recruteurs, InfoPer, Competence, InfoAdd, Cv, UploadImage,UploadFile, NotifRec, NotifEtu, Test
from PcdApp.serializers import StudentsSerializer ,RecruteursSerializer, InfoPerSerializer, CompetenceSerializer,InfoAddSerializer,CvSerializer,ImageSerializer,PDFSerializer
>>>>>>> 79559cbc106126b06281a9330829cf9743189a14

#from django.core.files.storages import default_storage  #file storage
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib import auth
from PcdApp.models import FeedBackRec, InterSuj, Students,Recruteurs, InfoPer,Competence, InfoAdd, Cv,Agenda, Suit,Sujet
from PcdApp.serializers import  AgendaSerializer, FeedBackSerializer, InterSujSerializer,StudentsSerializer ,RecruteursSerializer, InfoPerSerializer, CompetenceSerializer,InfoAddSerializer,CvSerializer,StudentsLoginSerializer, SuitSerializer,SujetSerializer
from PcdApp.models import NotifRec


class StudentsView (viewsets.ModelViewSet):
    serializer_class = StudentsSerializer
    queryset = Students.objects.all()

class RecruteursView (viewsets.ModelViewSet):
    serializer_class = RecruteursSerializer
    queryset = Recruteurs.objects.all()    

class InfoPerView (viewsets.ModelViewSet):
    serializer_class = InfoPerSerializer
    queryset = InfoPer.objects.all()

class CompetenceView (viewsets.ModelViewSet):
    serializer_class = CompetenceSerializer
    queryset = Competence.objects.all()

class InfoAddView (viewsets.ModelViewSet):
    serializer_class = InfoAddSerializer
    queryset = InfoAdd.objects.all()

class CvView (viewsets.ModelViewSet):
    serializer_class = CvSerializer
    queryset = Cv.objects.all()

class ImageView(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    queryset = UploadImage.objects.all()

    def post(self, request, *args, **kwargs):
        Id_Image = request.data['Id_Image']
        Login = request.data['Login']
        Image = request.data['Image']
        UploadImage.objects.create(Id_Image=Id_Image,Login=Login, Image=Image)
        return HttpResponse({'message': 'Image created'}, status=200)


class PDFView(viewsets.ModelViewSet):
    serializer_class = PDFSerializer
    queryset = UploadFile.objects.all()

    def post(self, request, *args, **kwargs):
        Id_PDF = request.data['Id_PDF']
        Login = request.data['Login']
        PDF = request.data['PDF']
        UploadImage.objects.create(Id_PDF=Id_Image,Login=Login, PDF=PDF)
        return HttpResponse({'message': 'CV imported'}, status=200)


class SujetView (viewsets.ModelViewSet):
    serializer_class = SujetSerializer
    queryset = Sujet.objects.all()


class AgendaView (viewsets.ModelViewSet):
    serializer_class = AgendaSerializer
    queryset = Agenda.objects.all()

class FeedBackView (viewsets.ModelViewSet):
    serializer_class = FeedBackSerializer
    queryset = FeedBackRec.objects.all()

class SuitView (viewsets.ModelViewSet):
    serializer_class = SuitSerializer
    queryset = Suit.objects.all()

class InterSujView (viewsets.ModelViewSet):
    serializer_class = InterSujSerializer
    queryset = InterSuj.objects.all()

class FeedBackEtudRecView (viewsets.ModelViewSet):
    serializer_class = FeedBackEtudEntrSerializer
    queryset =FeedBackEtudEntr.objects.all()

class NotifRecView (viewsets.ModelViewSet):
    serializer_class= NotifRecSerializer
    queryset = NotifRec.objects.all()

class NotifEtuView (viewsets.ModelViewSet):
    serializer_class= NotifEtuSerializer
    queryset = NotifEtu.objects.all()

class TestView(viewsets.ModelViewSet):
    serializer_class= TestSerializer
    queryset = Test.objects.all()

@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)


# @receiver(pre_save, sender=Students) 
# def User_pre_save(sender, **kwargs): 
#     email = kwargs['instance'].Email 
#     login = kwargs['instance'].Login
#     if not email: raise ValidationError("email required") 
#     if sender.objects.filter(email=email).exclude(username=login).count(): raise ValidationError("email needs to be unique")
#@csrf_exempt
# def clean_email(self): 
#     Email = self.cleaned_data.get('Email') 
#     Login = self.cleaned_data.get('Login')
#     print (Students.objects.filter(email=Email).count() )
#     if Email and Students.objects.filter(email=Email).count() > 0: 
#          raise forms.ValidationError(u'This email address is already registered.')
#     return email


class Student_login(viewsets.ModelViewSet):
    serializer_class = StudentsLoginSerializer
    queryset = Students.objects.values_list('Login','MDP')



## reset password 
from django.core.mail import send_mail
from django.conf import settings
import uuid

def send_forget_password_mail(email):
    #token = str(uuid.uuid4())
    Subject = 'Your forget password link'
    Message = ' Hi , click on the link to reset your password : http://localhost:3000/changepassword/'
    send_mail(Subject,Message,'pcdensi911@gmail.com',[email],fail_silently=False)
    return False

class ChangePass(viewsets.ModelViewSet) :
    serializer_class = ChangePassSerializer
    queryset =  ChangePass.objects.all()

    def post (self, request, *args, **kwargs):
        Id_MDP = request.data['Id_MDP']
        Login = request.data['Login']
        Email = request.data['Email']
        MDP = request.data['MDP']
        Subject = 'Your forget password link'
        Message = ' Hi , click on the link to reset your password : http://localhost:3000/changepassword/'
        ChangePass.objects.create(Id_MDP=Id_MDP,Login=Login,Email=Email,MDP=MDP)
        send_mail(Subject,Message,'pcdensi911@gmail.com',[Email],fail_silently=False)
        return HttpResponse({'message': 'Email sent'}, status=200)