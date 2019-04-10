from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import redirect
from django.http import JsonResponse
from .models import New, Article, Video, Me
import datetime

# Create your views here.
def index(request):
    news = New.objects.order_by('created')[:]
    articles = Article.objects.order_by('created')[:]
    videos = Video.objects.order_by('created')[:]
    me = Me.objects.all()
    return render(request, "index.html", {'news':news, 'articles':articles, 'videos':videos, 'me':me})

def news(request):
    news = New.objects.order_by('-created')[:]
    return render(request, "news.html", {'news': news})

def articles(request):
    articles = Article.objects.order_by('created')[:]
    return render(request, "articles.html", {'articles':articles})

def videos(request):
    videos = Video.objects.order_by('created')[:]
    return render(request, "videos.html", {'videos':videos})
