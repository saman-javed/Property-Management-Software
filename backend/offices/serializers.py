# offices/serializers.py
from rest_framework import serializers
from .models import Office

class OfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Office
        fields = ['id', 'officeName', 'location', 'phone', 'manager']
