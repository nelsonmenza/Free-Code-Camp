from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("contact", views.contact, name="contact"),
    path('', include('items.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
