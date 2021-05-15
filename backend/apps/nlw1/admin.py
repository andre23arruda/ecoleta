from django.contrib import admin
from .models import CollectPlace, CollectItem

@admin.register(CollectPlace)
class CollectPlaceRegister(admin.ModelAdmin):
    # list_display = ('id', 'name', 'email', 'whatsapp')
    # list_display_links = ('id', 'name')
    # search_fields = ('name',)
    list_per_page = 25

@admin.register(CollectItem)
class CollectItemRegister(admin.ModelAdmin):
    # list_display = ('id', 'name', 'email', 'whatsapp')
    # list_display_links = ('id', 'name')
    # search_fields = ('name',)
    list_per_page = 25
