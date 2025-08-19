from django.shortcuts import render

# Create your views here.
# towns/views.py
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Town
from .serializers import TownSerializer

class TownViewSet(viewsets.ModelViewSet):
    queryset = Town.objects.all()
    serializer_class = TownSerializer

    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.GET.get('q', '')
        city = request.GET.get('city', '')
        towns = self.queryset
        if query:
            towns = towns.filter(townName__icontains=query)
        if city:
            towns = towns.filter(city__icontains=city)
        serializer = self.get_serializer(towns, many=True)
        return Response(serializer.data)
