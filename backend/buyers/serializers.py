from rest_framework import serializers
from .models import Buyer, Installment  # ✅ import both models


# --- Buyer Serializer ---
class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = '__all__'  # sends all fields to Angular


# --- Installment Serializer ---
class InstallmentSerializer(serializers.ModelSerializer):
    buyer_name = serializers.CharField(source='buyer.name', read_only=True)  # extra field

    class Meta:
        model = Installment
        fields = '__all__'
