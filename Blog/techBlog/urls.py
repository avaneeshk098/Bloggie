from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('news/', views.news),
    path('articles/', views.articles),
    path('videos/', views.videos),
]
