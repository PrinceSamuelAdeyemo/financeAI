from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (AccountViewset, TransactionViewset, SubscriptionViewset, InvestmentViewset,
                    BudgetViewset, GoalViewset, AI_InsightViewset, DashboardTop4Account, CashFlow)

router = DefaultRouter()

router.register(r'accounts', AccountViewset)
router.register(r'transactions', TransactionViewset)
router.register(r'subscriptions', SubscriptionViewset)
router.register(r'investments', InvestmentViewset)
router.register(r'budgets', BudgetViewset)
router.register(r'goals', GoalViewset)
router.register(r'ai_insights', AI_InsightViewset)

urlpatterns = [
    path("", include(router.urls)),
    path("account_overview", DashboardTop4Account.as_view(), name="account_overview"),
    path("cashflow", CashFlow.as_view(), name='cashflow'),
]
