# Generated by Django 2.2.15 on 2020-08-11 02:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Classes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(choices=[('ART', 'Artes'), ('BIO', 'Biologia'), ('SCI', 'Ciências'), ('PE', 'Educação física'), ('PHY', 'Física'), ('GEO', 'Geografia'), ('STO', 'História'), ('MAT', 'Matemática'), ('POR', 'Portugês'), ('CHE', 'Química')], max_length=4)),
                ('cost', models.DecimalField(decimal_places=1, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='Proffys',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('avatar', models.URLField()),
                ('whatsapp', models.CharField(max_length=11)),
                ('bio', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weekday', models.CharField(choices=[('SUN', 'Domingo'), ('MON', 'Segunda-feira'), ('TUE', 'Terça-feira'), ('WED', 'Quarta-feira'), ('THU', 'Quinta-feira'), ('FRI', 'Sexta-feira'), ('SAT', 'Sábado')], max_length=3)),
                ('time_from', models.IntegerField()),
                ('time_to', models.IntegerField()),
                ('classes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='proffy.Classes')),
            ],
        ),
    ]
