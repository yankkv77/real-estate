from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .properties import properties

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
    return Response(properties)


@api_view(['GET'])
def get_property(request, pk):
    property = None
    for i in properties:
        if i['_id'] == pk:
            property = i
            break

    return Response(property)
