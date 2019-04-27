from django.shortcuts import render

# Create your views here.

def index_pokeapi(request):
    return render(request, 'pokeapi.html', {})