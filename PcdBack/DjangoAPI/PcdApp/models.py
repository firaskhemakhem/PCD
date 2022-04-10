
from django.db import models

# Create your models here.

class Utilisateur (models.Model):
    Id_Utilisateur = models.AutoField(primary_key=True)
    Login = models.CharField(max_length= 30,unique=True)
    MDP = models.CharField(max_length= 30)
    Email = models.CharField(max_length= 30,unique=True)
    #Nom = models.CharField(max_length= 30)
    Tel = models.CharField(max_length=10,unique=True)
    Gouvernorat = models.CharField (max_length= 30)
    Adresse = models.CharField(max_length= 30)

    class Meta :
        abstract = True
  



class Students(Utilisateur):
    Nom = models.CharField(max_length= 30)
    Prenom = models.CharField(max_length= 30)
    DDN =models.CharField(max_length= 30)
    Civ = models.CharField(max_length= 30)


class Recruteurs(Utilisateur):
    CodePostal = models.CharField(max_length=6)
    Nom = models.CharField(max_length= 30)

class InfoPer(models.Model):
    Id_InfoPer=models.AutoField(primary_key=True)
    Nom = models.CharField(max_length= 30)
    Email = models.CharField(max_length= 30,unique=True)
    Tel = models.CharField(max_length=10,unique=True)
    Gouvernorat = models.CharField (max_length= 30)
    Adresse = models.CharField(max_length= 30)
    DDN =models.CharField(max_length= 30)
    Dom = models.CharField(max_length= 45)

class Competence(models.Model):
    Id_Com=models.AutoField(primary_key=True)
    Formation=models.CharField(max_length=250)
    ExpProf=models.CharField(max_length=250)
    Certif=models.CharField(max_length=250)
    Lang=models.CharField(max_length=250)
    Liens=models.CharField(max_length=250)
    Dom=models.CharField(max_length= 30)

class InfoAdd(models.Model):
    Id_InfoAdd=models.AutoField(primary_key=True)
    CentreInt=models.CharField(max_length=250)
    VieAsso=models.CharField(max_length=250)

class Cv(models.Model):
    Id_Cv=models.AutoField(primary_key=True)
    InfoPer=models.TextField()
    Compe=models.TextField()
    InfoAdd=models.TextField()

#imageUpload
def uploadFile(instance,filename):
    return '/'.join(['students',str(instance.Login),filename])


class UploadImage(models.Model):
    Id_Image = models.AutoField(primary_key=True)
    Login = models.CharField(max_length= 30,unique=True)
    Image = models. ImageField(blank=True,null=True,upload_to=uploadFile)

#fileUpload
class UploadFile(models.Model):
    Id_PDF = models.AutoField(primary_key=True)
    Login = models.CharField(max_length= 30)
    PDF = models. FileField(blank=True,null=True,upload_to=uploadFile)