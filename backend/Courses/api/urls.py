from django.urls import path
from rest_framework import generics
from . import views

urlpatterns=[
    path('courses/', views.CourseListCreate.as_view()),
    path('courses/<int:pk>/',views.CourseDetail.as_view()),
    path('enrollment/',views.EnrollmentListCreate.as_view()),
]