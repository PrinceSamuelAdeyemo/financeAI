from django.db import models
from .managers import CustomUserManager
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
import uuid

# Create your models here.
class User(AbstractUser):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    username = models.CharField(
        "Username",
        max_length=128, null=True, blank=True, unique=True
    )
    email = models.EmailField(
        "Email Address",
        unique=True
    )
    phone_number = PhoneNumberField(blank=True)
    country = models.CharField(max_length=128)
    country_code = models.CharField(max_length=3)
    currency = models.CharField(max_length=16)
    created_at = models.DateTimeField(
        'Account Created At',
        auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Account Updated At',
        auto_now=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class AuthSessions(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    device_info = models.CharField(max_length=128, blank=True, null=True)
    ip_address = models.IPAddressField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user_id} -- {self.ip_address}"


class Category(models.Model):
    CATEGORY_TYPE = [
        ('expenses', 'Expenses'),
        ('income', 'Income'),
        ('savings', 'Savings'),
        ('investments', 'Investments'),
        ('debts', 'Debts')
    ]

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=128, choices=CATEGORY_TYPE)
    icon = models.FileField(upload_to='/icons/categories', blank=True, null=True)

    def __str__(self):
        return self.name


class Notification(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=128)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.id