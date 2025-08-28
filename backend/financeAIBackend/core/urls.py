from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewset, CategoryViewset, NotificationViewset
)


router = DefaultRouter()
router.register(r'users', UserViewset)
router.register(r'categories', CategoryViewset)
router.register(r'notifications', NotificationViewset)

urlpatterns = [
    path('', include(router.urls))
]
