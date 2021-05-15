from django.db import models
import os


class CollectItem(models.Model):
    image = models.FileField(upload_to='uploads/items/%Y/%m/%d/', blank=True)
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{ self.name }'


class CollectPlace(models.Model):
    image = models.ImageField(upload_to='uploads/places/%Y/%m/%d/', blank=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    whatsapp = models.CharField(max_length=12)
    latitude = models.FloatField()
    longitude = models.FloatField()
    city = models.CharField(max_length=255)
    uf = models.CharField(max_length=2)
    items = models.ManyToManyField(CollectItem, related_name='collect_items')


    def __str__(self):
        return f'{ self.name } ( { self.city }-{ self.uf })'
