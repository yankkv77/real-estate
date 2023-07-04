from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Realtor(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    profile_photo = models.ImageField(null=True, blank=True)
    bio = models.TextField(max_length=500)
    twitter_link = models.URLField(blank=True)
    facebook_link = models.URLField(blank=True)
    linkedin_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.name)


class Property(models.Model):
    realtor = models.ForeignKey(Realtor, on_delete=models.CASCADE)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    address = models.CharField(max_length=250)
    address_link = models.URLField()
    zip_code = models.CharField(max_length=10)
    description = models.TextField()
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()
    garage = models.CharField(max_length=10, choices=(
        ('none', 'No Garage'),
        ('attached', 'Attached Garage'),
        ('dettached', 'Dettached Garage'),
    ), default=None)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    year_build = models.PositiveIntegerField()
    sqm = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)


class PropertyImage(models.Model):
    home = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return f"Image for {self.home.address}"
