from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from PcdApp import serializers
import PcdApp
from PcdApp.models import Students,Recruteurs, InfoPer,Competence, InfoAdd, Cv
from PcdApp.serializers import StudentsSerializer ,RecruteursSerializer, InfoPerSerializer, CompetenceSerializer,InfoAddSerializer,CvSerializer

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

@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)


@csrf_exempt
def studentsApi(request,id=0):
    if request.method=='GET':
        students = Students.objects.all()
        students_serializer=StudentsSerializer(students,many=True)
        return JsonResponse(students_serializer.data,safe=False)
    elif request.method=='POST':
        students_data=JSONParser().parse(request)
        students_serializer=StudentsSerializer(data=students_data)
        if students_serializer.is_valid():
            students_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        students_data=JSONParser().parse(request)
        students=Students.objects.get(StudentId=students_data['Id_Utilisateur'])
        students_serializer=StudentsSerializer(students,data=students_data)
        if students_serializer.is_valid():
            students_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        students=Students.objects.get(Id_Utilisateur=id)
        students.delete()
        return JsonResponse("Deleted Successfully",safe=False)


@csrf_exempt
def recruteursApi(request,id=0):
    if request.method=='GET':
        recruteurs = Recruteurs.objects.all()
        recruteurs_serializer=RecruteursSerializer(recruteurs,many=True)
        return JsonResponse(recruteurs_serializer.data,safe=False)
    elif request.method=='POST':
        recruteurs_data=JSONParser().parse(request)
        recruteurs_serializer=RecruteursSerializer(data=recruteurs_data)
        if recruteurs_serializer.is_valid():
            recruteurs_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        recruteurs_data=JSONParser().parse(request)
        recruteurs=Recruteurs.objects.get(RecruteurId=recruteurs_data['Id_Utilisateur'])
        recruteurs_serializer=RecruteursSerializer(recruteurs,data=recruteurs_data)
        if recruteurs_serializer.is_valid():
            recruteurs_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        recruteurs=Recruteurs.objects.get(Id_Utilisateur=id)
        recruteurs.delete()
        return JsonResponse("Deleted Successfully",safe=False)
