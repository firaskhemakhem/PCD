# Generated by Django 4.0.2 on 2022-03-21 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PcdApp', '0003_alter_recruteurs_tel_alter_students_ddn_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recruteurs',
            name='CodePostal',
            field=models.CharField(max_length=6),
        ),
    ]
