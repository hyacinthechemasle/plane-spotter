from django.shortcuts import render
from rest_framework import viewsets
from sightings.models import Sighting
from sightings.serializers import SightingSerializer

class SightingViewSet(viewsets.ModelViewSet):
    queryset = Sighting.objects.all()
    serializer_class = SightingSerializer

# Create your views here.
