from django.db import models

# Create your models here.
# towns/models.py

from offices.models import Office  # For assignment

class Town(models.Model):
    townName = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    totalPlots = models.IntegerField()
    mapUrl = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    active = models.BooleanField(default=True)
    offices = models.ManyToManyField(Office, related_name='towns', blank=True)

    def __str__(self):
        return self.townName
