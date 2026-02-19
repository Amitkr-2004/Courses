from rest_framework import serializers
from .models import Course,EnrollmentFields

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Course
        fields=["id","title","description","category"]

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=EnrollmentFields
        fields=["id","name","grade","school","enrollment_date"]