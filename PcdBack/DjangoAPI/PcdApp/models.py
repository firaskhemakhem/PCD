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
    CodePostal = models.CharField(max_length=6)

class InfoPer(models.Model):
    Id_InfoPer=models.ForeignKey(Students, on_delete=models.CASCADE,unique=True)
    Nom = models.CharField(max_length= 30)
    Email = models.CharField(max_length= 30,unique=True)
    Tel = models.CharField(max_length=10,unique=True)
    Gouvernorat = models.CharField (max_length= 30)
    Adresse = models.CharField(max_length= 30)
    DDN =models.CharField(max_length= 30)

class Competence(models.Model):
    Id_Com=models.ForeignKey(Students, on_delete=models.CASCADE,unique=True)
    Formation=models.CharField(max_length=250)
    ExpProf=models.CharField(max_length=250)
    Certif=models.CharField(max_length=250)
    Lang=models.CharField(max_length=250)
    Liens=models.CharField(max_length=250)
    civ=models.CharField(max_length= 30)

class InfoAdd(models.Model):
    Id_InfoAdd=models.ForeignKey(Students, on_delete=models.CASCADE,unique=True)
    CentreInt=models.CharField(max_length=250)
    VieAsso=models.CharField(max_length=250)

class Cv(models.Model):
    Id_Cv=models.ForeignKey(Students, on_delete=models.CASCADE,unique=True)
    InfoPer=models.TextField()
    Compe=models.TextField()
    InfoAdd=models.TextField()


