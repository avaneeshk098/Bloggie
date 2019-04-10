from django.db import models
from django.forms import ModelForm, Textarea
# Create your models here.

class New(models.Model):
    title = models.TextField()
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    picture = models.ImageField(default="")

class Article(models.Model):
    title = models.TextField()
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    picture = models.ImageField(default="")

class Video(models.Model):
    title = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    poster = models.ImageField(default="")
    video = models.FileField(default="")

class Me(models.Model):
    description = models.TextField()
    picture = models.ImageField(default="")
