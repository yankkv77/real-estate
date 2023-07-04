from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .properties import properties
from .agents import agents

from .models import Realtor, Property, PropertyImage
from .serializers import PropertySerializer, RealtorSerializer, PropertyImageSerializer
# Create your views here.


@api_view(['GET'])
def get_routes(request):
    routes = [
        '/api/propeties/',

        '/api/propeties/create',
        '/api/propeties/upload',
        '/api/propeties/top',
        '/api/propeties/<id>/',
        '/api/propeties/delete/<id>',
        '/api/propeties/<update>/<id>',
    ]
    return Response(routes)


@api_view(['GET'])
def get_properties(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    data = serializer.data

    # Fetch and include property images
    for property_data in data:
        property_id = property_data['_id']
        property_images = PropertyImage.objects.filter(home_id=property_id)

        # extract the image URLs from the property_images queryset
        image_urls = [image.image.url for image in property_images]
        
        # Add the image_urls list to the property_data object
        property_data['images'] = image_urls

    return Response(data)


@api_view(['GET'])
def get_property(request, pk):
    property = Property.objects.get(_id=pk)
    serializer = PropertySerializer(property, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_property_images(request, pk):
    property_images = PropertyImage.objects.filter(home=pk)
    serializer = PropertyImageSerializer(property_images, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_agents(request):
    agents = Realtor.objects.all()
    serializer = RealtorSerializer(agents, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_agent(request, pk):
    agent = Realtor.objects.get(_id=pk)
    serializer = RealtorSerializer(agent, many=False)
    return Response(serializer.data)
