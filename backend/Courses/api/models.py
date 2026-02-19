from django.db import models

# Create your models here.
class Course(models.Model):
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=400)
    category=models.CharField(max_length=50)

class EnrollmentFields(models.Model):
    name=models.CharField(max_length=60)
    grade=models.IntegerField(max_length=10)
    school=models.CharField(max_length=50)
    enrollment_date=models.DateTimeField(auto_now_add=True)

