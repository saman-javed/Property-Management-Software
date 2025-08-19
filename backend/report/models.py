from django.db import models

# Create your models here.
from django.db import models
from buyers.models import Buyer  # adjust if Buyer is in another app

class MonthlyInstallmentReport(models.Model):
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    due_date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=[
        ('Pending', 'Pending'),
        ('Paid', 'Paid'),
        ('Overdue', 'Overdue'),
    ])
    month = models.IntegerField()
    year = models.IntegerField()
    town = models.CharField(max_length=100, blank=True, null=True)  # optional
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.buyer.name} - {self.amount} ({self.status})"
