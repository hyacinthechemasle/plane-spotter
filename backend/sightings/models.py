from django.db import models

# Create your models here.

class Sighting(models.Model):
    registration = models.CharField(max_length=6)
    aircraft_photo = models.ImageField(upload_to="assets/images")
    aircraft_type = models.CharField(max_length=10)
    notes = models.TextField(blank=True)
    time_sighted = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    airport = models.CharField(max_length=50)
    spotter = models.CharField(max_length=12)

    class Meta:
       ordering = ["-time_sighted"]


    def __str__(self):
        return f"{self.registration} {self.aircraft_type}Aircraft sighted at {self.airport} {self.time_sighted} by Planespotter {self.spotter}"