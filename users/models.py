from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    """User model class dictating whether a user is a teacher or student """
    is_student = models.BooleanField()
    is_teacher = models.BooleanField()

    def __str__(self):
        return self.username

class Student(models.Model):
    """Student model """
    # when the user is delete, so this the student model that is tied to that user model
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

