from django.contrib import admin
from .models import (
    Account, Transaction, Subscription, Investment, Budget, Goal, AI_Insight
)

# Register your models here.
admin.site.register(Account)
admin.site.register(Transaction)
admin.site.register(Subscription)
admin.site.register(Investment)
admin.site.register(Budget)
admin.site.register(Goal)
admin.site.register(AI_Insight)