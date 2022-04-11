from dataclasses import fields
from rest_framework import serializers
#from DjangoAPI.PcdApp.models import InfoAddi
from PcdApp.models import  FeedBackRec, InterSuj, Students ,Recruteurs, InfoPer, InfoAdd, Competence, Cv,Agenda, Suit,Sujet
from rest_framework.authtoken.models import Token


class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = [
                   'Login','MDP','Email','Nom','Tel','Gouvernorat','Adresse','DDN','Civ']

class RecruteursSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruteurs
        fields = [
                   'Login','MDP','Email','Nom','Tel','Gouvernorat','Adresse','CodePostal','Domaine']
class SuitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suit
        fields =['id','follow','recruteur','student']

class InterSujSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterSuj
        fields =['id','inter','recruteur','student','id_sujet','id_agenda']

#Login
class StudentsLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['Login','MDP']


class RecruteursLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruteurs
        fields = ['Login','MDP']

class InfoPerSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoPer
        fields = ['Id_InfoPer',
                   'Nom','Email','Tel','Gouvernorat','Adresse','DDN','Dom']

class CompetenceSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Competence
        fields = ['Id_Com',
                   'Formation','ExpProf','Certif','Lang','Liens']

class InfoAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoAdd
        fields = ['Id_InfoAdd',
                   'CentreInt','VieAsso']

class CvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cv
        fields = ['Id_Cv',
                   'InfoPer','Compe','InfoAdd']

class SujetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sujet
        fields= ['Id_sujet',
                'Titre','Description','Domaine','duree','Tech','paye','Bin','Att','LoginRec']

class AgendaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = ['Id_Calend','Date','StartTime','EndTime','LoginRec']

class FeedBackSerializer (serializers.ModelSerializer):
    class Meta:
        model = FeedBackRec
        fields = ['Login','Email','Message','Rating']
