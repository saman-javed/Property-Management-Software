from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Buyer, Installment
from .serializers import BuyerSerializer, InstallmentSerializer


# --- Buyer API ---
class BuyerViewSet(viewsets.ModelViewSet):
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer


# --- Installment API ---
class InstallmentViewSet(viewsets.ModelViewSet):
    queryset = Installment.objects.all().order_by('date')
    serializer_class = InstallmentSerializer





    

@api_view(['POST'])
def send_installment_alerts(request):
    buyer_ids = request.data.get('buyerIds', '')
    template = request.data.get('template', '')
    delivery_mode = request.data.get('deliveryMode', 'SMS')

    # Convert comma-separated IDs to list of integers
    ids = [int(i) for i in buyer_ids.split(',') if i.strip().isdigit()]
    buyers = Buyer.objects.filter(id__in=ids)

    alerts_sent = []

    for buyer in buyers:
        # Find pending installments for this buyer
        pending = buyer.installments.filter(status='Pending')
        for inst in pending:
            message = template.replace("{name}", buyer.name).replace("{amount}", str(inst.amount)).replace("{dueDate}", str(inst.date))
            
            # Example: print message instead of sending SMS
            print(f"Sending to {buyer.name} ({delivery_mode}): {message}")

            alerts_sent.append({
                'buyer': buyer.id,
                'installment': inst.id,
                'amount': inst.amount,
                'message': message
            })

    return Response({"alerts_sent": alerts_sent})

