from rest_framework.routers import DefaultRouter
from sightings.views import SightingViewSet


router = DefaultRouter()
router.register("sightings", SightingViewSet, basename="sighting")

urlpatterns = router.urls