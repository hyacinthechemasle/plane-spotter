from django.test import TestCase
from django.urls import reverse
from django.utils import timezone
# Create your tests here.
from rest_framework import status
from rest_framework.test import APITestCase
from sightings.models import Sighting


class SightingTestAPICase(APITestCase):
    def test_create_sighting_normalises_registration(self):
        payload = {
            "registration": "zk-nze",
            "aircraft_type": "Boeing 787-9",
            "airport": "Wellington Airport",
            "spotter": "Hyacinthe",
            "notes": "Test sighting",
            "time_sighted": timezone.now(),
            "created_at": timezone.now(),
        }

        response = self.client.post(
            reverse("sighting-list"),
            payload,
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["registration"], "ZK-NZE")
        self.assertEqual(Sighting.objects.count(), 1)
