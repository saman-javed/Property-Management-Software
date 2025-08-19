# towns/serializers.py
from rest_framework import serializers
from .models import Town
# towns/views.py
# from report.serializers import MonthlyInstallmentSerializer

class TownSerializer(serializers.ModelSerializer):
    class Meta:
        model = Town
        fields = ['id', 'townName', 'city', 'totalPlots', 'mapUrl', 'description', 'active', 'offices']
