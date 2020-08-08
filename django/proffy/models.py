from django.db import models


class Proffys(models.Model):

    name = models.CharField(max_length=100)
    avatar = models.URLField()
    whatsapp = models.CharField(max_length=11)
    bio = models.TextField()

    def __str__(self):
        return self.name


class Classes(models.Model):

    SUBJECTS = [
        ("ART", "Artes"),
        ("BIO", "Biologia"),
        ("SCI", "Ciências"),
        ("PE", "Educação física"),
        ("PHY", "Física"),
        ("GEO", "Geografia"),
        ("STO", "História"),
        ("MAT", "Matemática"),
        ("POR", "Portugês"),
        ("CHE", "Química")
    ]

    subject = models.CharField(choices=SUBJECTS, max_length=4)
    cost = models.DecimalField()
    proffy = models.OneToOneRel(Proffys, on_delete=models.CASCADE)

    def __str__(self):
        return self.subject


class Schedule(models.Model):

    WEEKDAYS = [
        ("SUN", "Domingo"),
        ("MON", "Segunda-feira"),
        ("TUE", "Terça-feira"),
        ("WED", "Quarta-feira"),
        ("THU", "Quinta-feira"),
        ("FRI",   "Sexta-feira"),
        ("SAT", "Sábado")
    ]

    classes = models.ForeignKey(Classes, on_delete=models.CASCADE)
    weekday = models.CharField(max_length=3, cascade=WEEKDAYS)
    time_from = models.IntegerField()
    time_to = models.IntegerField()

    def __str__(self):
        return self.classes.subject


    @classmethod
    def convertHoursToMinutes(cls, time):
        hour, minutes = int(time.split(":"))
        return (hour * 60) + minutes

