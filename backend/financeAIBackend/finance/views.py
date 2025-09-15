from datetime import datetime, date
import calendar

from django.db.models import Q, Sum, Count
from rest_framework import viewsets
from rest_framework.decorators import action
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

from core.models import Category

# Functions
import calendar
from datetime import date
def group_transactions_by_weeks(month, year):
    print(date(2025, 10, 1))
    print(calendar.monthrange(year, month))
    _, last_day = calendar.monthrange(year, month)
    weeks = []
    """ for i in range(0, last_day, 7):
        start_date = i+1
        end_date = min(i+7, last_day)
        weeks.append({
            f"week {len(weeks) + 1 }": min(last_day, start_date + 6), 
            "start_date": f"{date(year, month, start_date)}", 
            "end_date": f"{date(year, month, end_date)}"
        })

    return weeks """


# Create your views here.
class DashboardTop4Account(APIView):
    permission_classes = []
    def get(self, request):
        try:
            income = sum([transaction.amount for transaction in Transaction.objects.filter(transaction_type="income")])
            expenses = sum([transaction.amount for transaction in Transaction.objects.filter(transaction_type="expenses")])
            print(income, expenses)
            """ income = Transaction.objects.aggregate(
                total_income = Sum("amount", filter=Q(transaction_type = "income"))
            )
            expenses = Transaction.objects.aaggregate(
                total_expenses = Sum("amount", filter=Q(transaction_type = "expenses"))
            ) """
            if expenses < 0:
                return Response({"message": "Expenses cannot be less than 0"})
            else:
                net_balance = income - expenses
            savings_rate = ((net_balance/income) * 100) if income > 0 else 0

            income_object = {
                "title": "Income",
                "data": income,
                "remark": "12%",
                "icon": "/somepic"
            }

            expenses_object = {
                "title": "Expenses",
                "data": expenses,
                "remark": "6%",
                "icon": "/somepic"
            }

            net_balance_object = {
                "title": 'Net Balance',
                "data": net_balance,
                "remark": '15%',
                "icon": '',
            }

            savings_rate_object = {
                "title": 'Net Balance',
                "data": '#441,400',
                "remark": savings_rate,
                "icon": '',
            }

            data = [income_object, expenses_object, net_balance_object, savings_rate_object]

            return Response({'message': data}, status=HTTP_200_OK)
        
        except Exception as e:
            return Response({'message': e}, status=HTTP_500_INTERNAL_SERVER_ERROR)
        

class CashFlow(APIView):
    permission_classes = []
    def get(self, request, month = None, year = None):
        month, year = 9, 2025
        start_date = date(year, month, 1)
        end_date = calendar.monthrange(year, month)[1] + 1
        """ income = sum([income for income in Transaction.objects.filter(user_id = request.user, transaction_type = 'income')])
        income2 = Transaction.objects.annotate(
            total_income=Sum('amount'), filter=Q(user_id=request.user)
        ) """
        cashflow = Transaction.objects.all().aggregate(
                                                total_income=Sum('amount', filter=Q(transaction_type='income')), total_expenses=Sum('amount', filter=Q(transaction_type='expenses'))
        )
        # print(cashflow)     
        # expenses = sum([expense for expense in Transaction.objects.filter(user_id = request.user, transaction_type = 'expenses')])

        filtered = Transaction.objects.filter(transaction_type = 'expenses')
        for income in filtered:
            for i in range(1, end_date):
                if (income.transaction_date.date() == date(year, month, i)):
                    print(income.transaction_date)

                else:
                    print(2)
                    print(end_date/7)
        try:
            pass
            #for i in range
        except:
            return Response({'message': 'Something went wrong while processing the request.'}, status=HTTP_500_INTERNAL_SERVER_ERROR)
        #print('income2', income2)
        return Response({'message': cashflow})
        

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