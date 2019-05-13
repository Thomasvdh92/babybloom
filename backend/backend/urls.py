from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from backend.data import views

# The router is used to automatically generate urls used for the API
router = routers.DefaultRouter()
router.register(r'data', views.DataViewSet, base_name='Data')
router.register(r'user', views.UserViewSet, base_name='User')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
