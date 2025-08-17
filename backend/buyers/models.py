from django.db import models

# --- Buyer Model ---
class Buyer(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    cnic = models.CharField(max_length=13, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    town = models.CharField(max_length=100, blank=True, null=True)
    fileNo = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name


# --- Installment Model ---
class Installment(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Paid', 'Paid'),
        ('Overdue', 'Overdue'),
    ]

    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE, related_name='installments')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    mode = models.CharField(
        max_length=50,
        choices=[('Cash','Cash'), ('Bank Transfer','Bank Transfer'), ('Cheque','Cheque')]
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    remarks = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.buyer.name} - {self.amount} ({self.status})"
