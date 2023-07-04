from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('properties/', views.get_properties, name='properties'),
    path('properties/<str:pk>/', views.get_property, name='property'),
    path('agents/', views.get_agents, name='agents'),
    path('agents/<str:pk>/', views.get_agent, name='agent'),
    path('properties/<int:pk>/images/',
         views.get_property_images, name='property_images'),
]
