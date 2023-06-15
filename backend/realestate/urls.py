from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('properties/', views.get_properties, name='properties'),
    path('properties/<str:pk>/', views.get_property, name='property'),
]
