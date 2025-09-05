from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_500_INTERNAL_SERVER_ERROR
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
class DashboardTop4Account(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            income = sum[Transaction.objects.filter(user_id = request.user, transaction_type="income")]
            expenses = sum[Transaction.objects.filter(user_id = request.user, transaction_type="expenses")]
            if expenses < 0:
                return Response({"message": "Expenses cannot be less than 0"})
            else:
                net_balance = income - expenses
            savings_rate = (net_balance/income) * 100

            data = {
                "income": income,
                "expenses": expenses,
                "net_balance": net_balance,
                "savings_rate": savings_rate
            }

            return Response({'message': data}, status=HTTP_200_OK)
        
        except:
            return Response({'message': 'Something went wrong while processing the request.'}, status=HTTP_500_INTERNAL_SERVER_ERROR)
        



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