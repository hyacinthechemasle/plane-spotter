from django.contrib import admin
from sightings.models import Sighting
# Register your models here.

@admin.register(Sighting)
class SightingAdmin(admin.ModelAdmin):
    list_display = (
        "registration",
        "aircraft_type",
        "airport",
        "spotter",
        "time_sighted",
    )

    search_fields = (
        "registration",
        "aircraft_type",
        "airport",
        "spotter"
    )

    list_filter = ("airport", "aircraft_type")
    ordering = ("-time_sighted",)

