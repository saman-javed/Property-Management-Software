from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import send_installment_alerts
from .views import BuyerViewSet, InstallmentViewSet

router = DefaultRouter()
router.register(r'buyers', BuyerViewSet)
router.register(r'installments', InstallmentViewSet)  # ✅ added

urlpatterns = [
    path('', include(router.urls)),
    path('send-alerts/', send_installment_alerts, name='send_alerts'),
]
