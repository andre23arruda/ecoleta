from django.shortcuts import get_object_or_404

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, generics, status, pagination
from rest_framework.authentication import BasicAuthentication
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import pagination

from .models import CollectPlace, CollectItem
from .serializers import CollectPlaceSerializer, CollectItemSerializer


def get_items(items_text: str):
    '''
        Retorna lista de items
    '''
    items = items_text.split(',')
    items = [ item.strip().lower() for item in items ] # minúsculo
    items_obj_list = []
    for item in items:
        obj = CollectItem.objects.get(pk=item)
        items_obj_list.append(obj)
    return items_obj_list


class CollectItemsViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Collect Items to be viewed or edited'''
    queryset = CollectItem.objects.all()
    serializer_class = CollectItemSerializer
    pagination_class = None


class CollectPlacesViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Collect Places to be viewed or edited'''
    queryset = CollectPlace.objects.all()
    serializer_class = CollectPlaceSerializer
    parser_classes = [MultiPartParser, FormParser]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['items', 'uf', 'city']

    def get_queryset(self):
        queryset = CollectPlace.objects.all()
        query_params = self.request.query_params.dict()
        if 'itemsfilter' in query_params:
            items = query_params['itemsfilter']
            items = items.split(',')
            queryset = queryset.filter(items__in=items)
        return queryset

    def create(self, serializer):
        '''Creat Collect Place'''
        place_data = serializer.data

        place_data_dict = place_data.dict()
        place_data_dict.pop('image', None)
        items_text = place_data_dict.pop('items', None)
        items = get_items(items_text)
        image =  None if place_data['image'] == 'null' else place_data['image']
        print(image)
        place = CollectPlace.objects.create(
            **place_data_dict,
            image=image
        )
        place.items.set(items)
        created_place = {
            'id': place.id,
            'items': items_text,
            **place_data_dict
        }
        return Response(created_place, status=status.HTTP_200_OK)
        return Response({'detail': 'Forbidden operation'}, status=status.HTTP_401_UNAUTHORIZED)