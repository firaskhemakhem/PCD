from django.db import models

# Create your models here.

class Utilisateur (models.Model):
    Id_Utilisateur = models.AutoField(primary_key=True)
    Login = models.CharField(max_length= 30,unique=True)
    MDP = models.CharField(max_length= 30)
    Email = models.CharField(max_length= 30,unique=True)
    Nom = models.CharField(max_length= 30)
    Tel = models.CharField(max_length=10,unique=True)
    Gouvernorat = models.CharField (max_length= 30)
    Adresse = models.CharField(max_length= 30)

    class Meta :
        abstract = True

class Students(Utilisateur):
   DDN =models.CharField(max_length= 30)
   Civ = models.CharField(max_length= 30)


class Recruteurs(Utilisateur):
    CodePostal = models.IntegerField()
    