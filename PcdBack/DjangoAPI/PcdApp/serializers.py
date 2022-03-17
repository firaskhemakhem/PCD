from rest_framework import serializers
from PcdApp.models import Students ,Recruteurs
from rest_framework.authtoken.models import Token

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['StudentId',
                   'StudentName']

class RecruteursSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruteurs
        fields = ('RecruteurId',
                   'RecruteurName')

