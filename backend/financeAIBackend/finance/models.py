from django.db import models
from core.models import User, Category
import uuid

# Create your models here.
class Account(models.Model):
    ACCOUNTTYPES = [
        ('cash', "Cash"),
        ('bank_account', "Bank Account"),
        ('credit_card', 'Credit Card'),
        ('digital_wallet', 'digital_wallet'),
        ('crypto_wallet', 'Crypto Wallet'),
        ('investment_account', 'Investment Account')
    ]
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=128)
    account_type = models.CharField(max_length=20)
    balance = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=20)
    institution = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.account_type} -- {self.name}"


class Transaction(models.Model):
    TRANSACTION_TYPE = [
        ('expenses', 'Expenses'),
        ('income', 'Income'),
        ('transfer', 'Transfer'),
        ('saving', 'Saving'),
        ('investment', 'Investment'),
        ('debt_repayment', 'Debt Repayment')
    ]
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    account_id = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
    category_id = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    transaction_type = models.CharField(choices=TRANSACTION_TYPE, max_length=14)
    description = models.TextField()
    transaction_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id


class Subscription(models.Model):
    SUBCRIPTION_TYPE = [
        ('daily', 'Daily'),
        ('weekly', 'Weekly'),
        ('monthly', "Monthly"),
        ('quarterly', 'Quarterly'),
        ('bi-annual', 'Bi-Annual'),
        ('yearly', 'Yearly'),
        ('lifetime', 'Lifetime')
    ]
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    service_name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    billing_cycle = models.CharField(choices=SUBCRIPTION_TYPE, max_length=20)
    next_due_date = models.DateField()
    auto_renew = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} -- {self.amount}"


class Investment(models.Model):
    INVESTMENT_TYPE = [
        ('stocks', 'Stocks'),
        ('bonds', 'Bonds'),
        ('mutual_funds_etfs', 'Mutual Funds / ETFs'),
        ('crypto', 'Crypto'),
        ('real_estate', 'Real Estate'),
        ('commodities', 'Commodities'),
        ('nft', 'NFT'),
    ]
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    investment_type = models.CharField(choices=INVESTMENT_TYPE, max_length=17)
    name = models.CharField(max_length=100)
    amount_invested = models.DecimalField(max_digits=12, decimal_places=2)
    current_value = models.DecimalField(max_digits=12, decimal_places=2)
    start_period = models.DateTimeField()
    end_period = models.DateTimeField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.id


class Budget(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT)
    category_id = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} -- {self.amount}"


class Goal(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=128)
    target_amount = models.DecimalField(max_digits=12, decimal_places=2)
    current_amount = models.DecimalField(max_digits=12, decimal_places=2)
    deadline = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.id} -- {self.name}"


class AI_Insight(models.Model):
    AI_INSIGHT_TYPE = [
        ('spending_trend', 'Spending Trend'),
        ('budget_alert', 'Budget Alert'),
        ('saving_opportunity', 'Saving Opportunity'),
        ('investment_performance', 'Investment Performance'),
        ('cashflow_forecast', 'Cash Flow Forecast'),
        ('investment_suggestion', 'Investment Suggestion'),
    ]
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    insight_type = models.CharField(max_length=50)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id} -- {self.insight_type}"