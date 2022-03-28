from rest_framework import serializers
from PcdApp.models import Students ,Recruteurs
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


