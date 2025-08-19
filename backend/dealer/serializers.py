from rest_framework import serializers
from .models import Dealer, Commission, DealerLedger

class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = ['id', 'name', 'phone', 'cnic', 'email', 'address', 'commission_rate', 'total_commission']

class CommissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commission
        fields = ['id', 'dealer', 'amount', 'date', 'payment_method', 'reference_no', 'notes']

# ✅ New serializer for DealerLedger
class DealerLedgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DealerLedger
        fields = ['id', 'dealer', 'date', 'type', 'description', 'amount']
