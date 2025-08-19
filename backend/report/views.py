from rest_framework.decorators import api_view
from rest_framework.response import Response
from dealer.models import Commission
from .serializers import DealerCommissionReportSerializer, MonthlyInstallmentSerializer
from buyers.models import Installment
from django.utils.dateparse import parse_date

# --- Monthly Installments Report (existing) ---
@api_view(['GET'])
def monthly_installments_report(request):
    month = request.GET.get('month')
    year = request.GET.get('year')
    town_name = request.GET.get('townId')  # optional town filter

    if not month or not year:
        return Response({"error": "Month and Year are required"}, status=400)

    try:
        month = int(month)
        year = int(year)
    except ValueError:
        return Response({"error": "Month and Year must be numbers"}, status=400)

    installments = Installment.objects.filter(date__month=month, date__year=year)

    if town_name:
        installments = installments.filter(buyer__town__icontains=town_name)

    serializer = MonthlyInstallmentSerializer(installments, many=True)
    return Response(serializer.data)


# --- Dealer Commission Report (NEW) ---
@api_view(['GET'])
def dealer_commission_report(request):
    dealer_id = request.GET.get('dealerId')
    from_date = request.GET.get('from')
    to_date = request.GET.get('to')

    if not from_date or not to_date:
        return Response({"error": "Both from and to dates are required"}, status=400)

    try:
        from_date = parse_date(from_date)
        to_date = parse_date(to_date)
    except ValueError:
        return Response({"error": "Invalid date format"}, status=400)

    commissions = Commission.objects.filter(date__range=[from_date, to_date])

    if dealer_id:
        try:
            dealer_id = int(dealer_id)
            commissions = commissions.filter(dealer_id=dealer_id)
        except ValueError:
            return Response({"error": "Dealer ID must be a number"}, status=400)

    serializer = DealerCommissionReportSerializer(commissions, many=True)
    return Response(serializer.data)
