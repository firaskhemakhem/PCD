from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

#from django.core.files.storages import default_storage  #file storage
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib import auth
from PcdApp.models import FeedBackRec, Students,Recruteurs, InfoPer,Competence, InfoAdd, Cv,Agenda,Sujet
from PcdApp.serializers import  AgendaSerializer, FeedBackSerializer,StudentsSerializer ,RecruteursSerializer, InfoPerSerializer, CompetenceSerializer,InfoAddSerializer,CvSerializer,StudentsLoginSerializer,SujetSerializer

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

class SujetView (viewsets.ModelViewSet):
    serializer_class = SujetSerializer
    queryset = Sujet.objects.all()


class AgendaView (viewsets.ModelViewSet):
    serializer_class = AgendaSerializer
    queryset = Agenda.objects.all()

class FeedBackView (viewsets.ModelViewSet):
    serializer_class = FeedBackSerializer
    queryset = FeedBackRec.objects.all()

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
