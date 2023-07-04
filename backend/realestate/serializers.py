from rest_framework import serializers
from .models import Realtor, Property, PropertyImage


class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields = ('image',)


class PropertySerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True)

    class Meta:
        model = Property
        fields = '__all__'


class RealtorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realtor
        fields = '__all__'
