from django.shortcuts import render

# Create your views here.
# offices/views.py
from rest_framework import viewsets
from .models import Office
from .serializers import OfficeSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class OfficeViewSet(viewsets.ModelViewSet):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer

    # Optional: search endpoint
    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.GET.get('q', '')
        offices = self.queryset.filter(
            officeName__icontains=query
        ) | self.queryset.filter(location__icontains=query)
        serializer = self.get_serializer(offices, many=True)
        return Response(serializer.data)
