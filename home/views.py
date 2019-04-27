from django.shortcuts import render

# Create your views here.

def index_home(request):
    return render(request, 'layout_home.html', {})