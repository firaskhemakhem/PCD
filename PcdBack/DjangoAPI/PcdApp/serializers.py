from rest_framework import serializers
#from DjangoAPI.PcdApp.models import InfoAddi
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

#Login
class StudentsLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
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
