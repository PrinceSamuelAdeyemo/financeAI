from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from core.permissions import IsOwner, IsOwnerOrReadOnly

from .models import (
    Account, Transaction, Subscription, Investment, Budget, Goal, AI_Insight
)
from .serializers import (
    AccountSerializer, TransactionSerializer, SubscriptionSerializer, InvestmentSerializer,
    BudgetSerializer, GoalSerializer, AI_InsightSerializer,
)

# Create your views here.
class AccountViewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated, IsOwner]


class TransactionViewset(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated, IsOwner]


class SubscriptionViewset(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    permission_classes = [IsAuthenticated, IsOwner]


class InvestmentViewset(viewsets.ModelViewSet):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
    permission_classes = [IsAuthenticated, IsOwner]


class BudgetViewset(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    permission_classes = [IsAuthenticated, IsOwner]


class GoalViewset(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
    permission_classes = [IsAuthenticated, IsOwner]


class AI_InsightViewset(viewsets.ModelViewSet):
    queryset = AI_Insight.objects.all()
    serializer_class = AI_InsightSerializer
    permission_classes = [IsAuthenticated, IsOwner]