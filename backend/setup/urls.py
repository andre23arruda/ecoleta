from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static # para servir mídia
from rest_framework import routers
from nlw1.views import CollectItemsViewSet, CollectPlacesViewSet

# router
router = routers.DefaultRouter()
router.register('nlw1/items', CollectItemsViewSet, basename='CollectItems')
router.register('nlw1/places', CollectPlacesViewSet, basename='CollectPlaces')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # servindo mídia

# para servir estáticos quando rodar manage.py runserver_ip
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()