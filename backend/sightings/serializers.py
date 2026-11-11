from rest_framework import serializers
from .models import Sighting

class SightingSerializer(serializers.ModelSerializer):

   class Meta:
      model = Sighting
      fields = [
         "id",
         "registration",
         "aircraft_type",
         "aircraft_photo",
         "airport",
         "spotter",
         "notes",
         "time_sighted",
         "created_at",
      ]

      
      read_only_fields = ["id", "created_at"]

   def validate_registration(self, value):
      cleaned = value.strip().upper()

      if(len(cleaned) < 3):
            raise serializers.ValidationError("Registration must need at least three characters")

      return cleaned