from rest_framework import serializers
from PcdApp.models import Students ,Recruteurs, InfoPer, InfoAdd, Competence, Cv
from rest_framework.authtoken.models import Token

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['Id_Utilisateur',
                   'Login','MDP','Email','Nom','Tel','Gouvernorat','Adresse','DDN','Civ']

class RecruteursSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruteurs
        fields = ['Id_Utilisateur',
                   'Login','MDP','Email','Nom','Tel','Gouvernorat','Adresse','CodePostal']


class InfoPerSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoPer
        fields = ['Id_InfoPer',
                   'Nom','Email','Tel','Gouvernorat','Adresse','DDN','Civ']

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
