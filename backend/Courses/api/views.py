from django.shortcuts import render
from rest_framework import generics
from .models import Course,EnrollmentFields
from .serializers import CourseSerializer,EnrollmentSerializer

# Create your views here.
class CourseListCreate(generics.ListCreateAPIView):
    queryset=Course.objects.all()
    serializer_class=CourseSerializer

class CourseDetail(generics.RetrieveAPIView):
    queryset=Course.objects.all()
    serializer_class=CourseSerializer

class EnrollmentListCreate(generics.ListCreateAPIView):
    queryset=EnrollmentFields.objects.all()
    serializer_class=EnrollmentSerializer
