from django.shortcuts import get_object_or_404
from rest_framework import serializers

from .models import CollectItem, CollectPlace

class CollectItemSerializer(serializers.ModelSerializer):
    '''Collect Item Serializer'''

    class Meta:
        model = CollectItem
        fields = '__all__'



class CollectPlaceSerializer(serializers.ModelSerializer):
    '''Collect Place Serializer'''

    item_list = serializers.SerializerMethodField()
    def get_item_list(self, obj):
        return [ item.name for item in obj.items.all() ]

    class Meta:
        model = CollectPlace
        fields = '__all__'

        extra_kwargs = {
            'items': {'write_only': True},
        }
