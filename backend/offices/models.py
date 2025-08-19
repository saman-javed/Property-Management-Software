from django.db import models

# Create your models here.


class Office(models.Model):
    officeName = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    phone = models.CharField(max_length=15, blank=True, null=True)
    manager = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.officeName
