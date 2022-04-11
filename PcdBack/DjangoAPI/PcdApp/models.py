
from django.db import models

# Create your models here.

class Utilisateur (models.Model):
    #Id_Utilisateur = models.AutoField()
    Login = models.CharField(max_length= 30,primary_key=True)
    MDP = models.CharField(max_length= 30,null=False)
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
    LoginStu = models.OneToOneField(
        "Students",
        on_delete=models.CASCADE,
        primary_key=True,
    )
    Nom = models.CharField(max_length= 30)
    Email = models.CharField(max_length= 30,unique=True)
    Tel = models.CharField(max_length=10,unique=True)
    Gouvernorat = models.CharField (max_length= 30)
    Adresse = models.CharField(max_length= 30)
    DDN =models.CharField(max_length= 30)
    Dom = models.CharField(max_length= 45)

class Competence(models.Model):
    LoginStu = models.OneToOneField(
        "Students",
        on_delete=models.CASCADE,
        primary_key=True,
    )
    Formation=models.CharField(max_length=250)
    ExpProf=models.CharField(max_length=250)
    Certif=models.CharField(max_length=250)
    Lang=models.CharField(max_length=250)
    Liens=models.CharField(max_length=250)


class InfoAdd(models.Model):
    LoginStu = models.OneToOneField(
        "Students",
        on_delete=models.CASCADE,
        primary_key=True,
    )
    CentreInt=models.CharField(max_length=250)
    VieAsso=models.CharField(max_length=250)

class Cv(models.Model):
    LoginStu = models.OneToOneField(
        "Students",
        on_delete=models.CASCADE,
        primary_key=True,
    )
    InfoPer=models.TextField()
    Compe=models.TextField()
    InfoAdd=models.TextField()

class Sujet(models.Model):
    Id_sujet = models.AutoField(primary_key=True)
    Titre = models.TextField()
    Description = models.TextField()
    Domaine= models.TextField()
    duree=  models.TextField()
    Tech=  models.TextField()
    paye= models.BooleanField(default=False)
    Bin = models.BooleanField(default=False)
    Att = models.BooleanField(default=False)


class Agenda(models.Model):
    Id_Calend = models.AutoField(primary_key=True)
    LoginRec = models.ForeignKey(Recruteurs,on_delete=models.CASCADE,null=False)
    Date = models.CharField(max_length=10)
    StartTime = models.CharField(max_length=5)
    EndTime =models.CharField(max_length=5)

class FeedBackRec(models.Model):
    Login = models.OneToOneField(
        "Recruteurs",
        on_delete=models.CASCADE,
        primary_key=True,
    )
    Email = models.CharField(max_length= 30,unique=True)
    Message = models.TextField()
    Rating = models.IntegerField()

