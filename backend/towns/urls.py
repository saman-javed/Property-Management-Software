# towns/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TownViewSet

router = DefaultRouter()
router.register(r'towns', TownViewSet, basename='town')

urlpatterns = [
    path('api/', include(router.urls)),
]
