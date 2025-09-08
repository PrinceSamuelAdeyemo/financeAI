from django.shortcuts import render
from django.db.models import Sum, Q
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny

from .models import (
    User, Category, Notification
)
from .serializers import (
    UserSerializer, CategorySerializer, NotificationSerializer
)
# Create your views here.
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return super().get_permissions()
    
class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

    @action(methods=['GET'], detail=False, url_path='user-top-categories')
    def users_top_five_categories_spending(self, request):
        top_categories_array = []
        top_categories = Category.objects.annotate(
            total_spent = Sum('transactions__amount'), filter=Q(transactions__user=request.user)
            ).filter(total_spent__isnull=False
                     ).order_by('-total_spent')[:5]
        
        for category in top_categories:
            top_categories_array.append({category.name: category.total_spent})
            
        return Response({"message": top_categories_array})


class NotificationViewset(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]