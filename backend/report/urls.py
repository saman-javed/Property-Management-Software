from django.urls import path
from .views import monthly_installments_report, dealer_commission_report

urlpatterns = [
    path('monthly-installments/', monthly_installments_report, name='monthly-installments'),
    path('dealer-commission/', dealer_commission_report, name='dealer-commission-report'),
]
