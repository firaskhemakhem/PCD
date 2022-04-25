# Generated by Django 4.0.3 on 2022-04-20 20:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('PcdApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='intersuj',
            old_name='inter',
            new_name='Att',
        ),
        migrations.AlterUniqueTogether(
            name='intersuj',
            unique_together={('student', 'recruteur', 'id_sujet')},
        ),
        migrations.CreateModel(
            name='NotifRec',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nom', models.TextField()),
                ('Time', models.TextField()),
                ('Recruteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs')),
                ('Student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.students')),
                ('Sujet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.sujet')),
            ],
        ),
        migrations.CreateModel(
            name='NotifEtu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nom', models.TextField()),
                ('Time', models.TextField()),
                ('Recruteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs')),
                ('Student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.students')),
                ('Sujet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.sujet')),
            ],
        ),
        migrations.CreateModel(
            name='FeedBackEtudEntr',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FeedBack', models.TextField()),
                ('Rating', models.IntegerField()),
                ('Recruteur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PcdApp.recruteurs')),
            ],
        ),
        migrations.RemoveField(
            model_name='intersuj',
            name='id_agenda',
        ),
    ]