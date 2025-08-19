from django.db import models
from django.utils import timezone

class Dealer(models.Model):
    id = models.AutoField(primary_key=True)  
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    cnic = models.CharField(max_length=13, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    commission_rate = models.DecimalField(max_digits=5, decimal_places=2, default=5)
    total_commission = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    def __str__(self):
        return self.name

class Commission(models.Model):
    dealer = models.ForeignKey(Dealer, on_delete=models.CASCADE, related_name='commissions')
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    date = models.DateField()
    payment_method = models.CharField(max_length=50)
    reference_no = models.CharField(max_length=100, blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        total = sum(c.amount for c in self.dealer.commissions.all())
        self.dealer.total_commission = total
        self.dealer.save()

    def __str__(self):
        return f"{self.dealer.name} - {self.amount} PKR"

# ✅ New DealerLedger model
class DealerLedger(models.Model):
    TYPE_CHOICES = [
        ('Commission', 'Commission'),
        ('Payout', 'Payout'),
        ('Adjustment', 'Adjustment'),
    ]
    dealer = models.ForeignKey(Dealer, on_delete=models.CASCADE, related_name='ledger')
    date = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return f"{self.dealer.name} - {self.type} - {self.amount} PKR"
