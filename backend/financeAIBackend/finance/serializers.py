from rest_framework import serializers
from .models import (
    Account, Transaction, Subscription, Investment, Budget, Goal, AI_Insight
)

""" class DashboardTop4AccountSerializer(serializers.Serializer):
    income = sum[Transaction.objects.filter(user_id = request.user, transaction_type="income")]
    expenses = sum[Transaction.objects.filter(user_id = request.user, transaction_type="expenses")]
    if expenses < 0:
        return Response({"message": "Expenses cannot be less than 0"})
    else:
        net_balance = income - expenses
    savings_rate = (net_balance/income) * 100 """

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = "__all__"


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = "__all__"


class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = "__all__"


class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = "__all__"


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = "__all__"


class AI_InsightSerializer(serializers.ModelSerializer):
    class Meta:
        model = AI_Insight
        fields = "__all__"