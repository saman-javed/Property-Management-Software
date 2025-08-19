# report/serializers.py
from rest_framework import serializers
from buyers.models import Installment

class MonthlyInstallmentSerializer(serializers.ModelSerializer):
    buyer = serializers.CharField(source='buyer.name')  # show buyer name
    dueDate = serializers.DateField(source='date', format="%Y-%m-%d")  # format date

    class Meta:
        model = Installment
        fields = ['buyer', 'dueDate', 'amount', 'status']


from rest_framework import serializers
from dealer.models import Commission

class DealerCommissionReportSerializer(serializers.ModelSerializer):
    dealer = serializers.CharField(source='dealer.name')  # Show dealer name
    phone = serializers.CharField(source='dealer.phone')  # Sale reference
    commission = serializers.DecimalField(source='amount', max_digits=12, decimal_places=2)

    class Meta:
        model = Commission
        fields = ['date', 'dealer', 'phone', 'commission']
