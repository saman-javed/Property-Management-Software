
from django.urls import path
from .views import (
    DealerListCreateView, DealerDetailView,
    CommissionListCreateView, CommissionDetailView,
    DealerLedgerListCreateView, DealerLedgerDetailView,
    dealer_ledger_by_dealer
)

urlpatterns = [
    path('dealers/', DealerListCreateView.as_view(), name='dealer-list-create'),
    path('dealers/<int:pk>/', DealerDetailView.as_view(), name='dealer-detail'),

    path('commissions/', CommissionListCreateView.as_view(), name='commission-list-create'),
    path('commissions/<int:pk>/', CommissionDetailView.as_view(), name='commission-detail'),

    path('dealer-ledger/', DealerLedgerListCreateView.as_view(), name='dealer-ledger-list-create'),
    path('dealer-ledger/<int:pk>/', DealerLedgerDetailView.as_view(), name='dealer-ledger-detail'),
    
    # Get ledger by dealer
    path('dealer-ledger/dealer/<int:dealer_id>/', dealer_ledger_by_dealer, name='dealer-ledger-by-dealer'),
]
