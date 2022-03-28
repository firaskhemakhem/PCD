from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from PcdApp import serializers
import PcdApp
from PcdApp.models import Students,Recruteurs
from PcdApp.serializers import StudentsSerializer ,RecruteursSerializer,StudentsLoginSerializer
#from django.core.files.storages import default_storage  #file storage



class StudentsView (viewsets.ModelViewSet):
    serializer_class = StudentsSerializer
    queryset = Students.objects.all()

class RecruteursView (viewsets.ModelViewSet):
    serializer_class = RecruteursSerializer
    queryset = Recruteurs.objects.all()

class Student_login(viewsets.ModelViewSet):
    serializer_class = StudentsLoginSerializer
    queryset = Students.objects.values_list('Login','MDP')

