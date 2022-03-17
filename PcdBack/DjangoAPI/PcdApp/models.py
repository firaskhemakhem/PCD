from django.db import models

# Create your models here.

class Students(models.Model):
    StudentId = models.AutoField(primary_key= True)
    StudentName = models.CharField (max_length= 100)


class Recruteurs(models.Model):
    RecruteurId = models.AutoField(primary_key= True)
    RecruteurName = models.CharField (max_length= 100)