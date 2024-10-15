from django.urls import path
from .views import example

urlpatterns = [path("Welcome to SaaS boiler", example)]
