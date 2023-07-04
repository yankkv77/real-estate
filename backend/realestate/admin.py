from django.contrib import admin
from .models import Realtor, Property, PropertyImage

# Register your models here.
admin.site.register(Realtor)
admin.site.register(Property)
admin.site.register(PropertyImage)