from rest_framework import generics
from .models import Dealer, Commission, DealerLedger
from .serializers import DealerSerializer, CommissionSerializer, DealerLedgerSerializer

# Dealer APIs
class DealerListCreateView(generics.ListCreateAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer

class DealerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer

# Commission APIs
class CommissionListCreateView(generics.ListCreateAPIView):
    queryset = Commission.objects.all()
    serializer_class = CommissionSerializer

class CommissionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Commission.objects.all()
    serializer_class = CommissionSerializer

# ✅ New DealerLedger APIs
class DealerLedgerListCreateView(generics.ListCreateAPIView):
    queryset = DealerLedger.objects.all()
    serializer_class = DealerLedgerSerializer

class DealerLedgerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DealerLedger.objects.all()
    serializer_class = DealerLedgerSerializer

# ✅ Optional: get ledger by dealer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def dealer_ledger_by_dealer(request, dealer_id):
    ledger = DealerLedger.objects.filter(dealer_id=dealer_id).order_by('date')
    serializer = DealerLedgerSerializer(ledger, many=True)
    total = sum([entry.amount for entry in ledger])
    return Response({'ledger': serializer.data, 'total': total})
