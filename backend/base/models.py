from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    name=models.CharField(max_length=150,null=True,blank=True)
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True)
    brand=models.CharField(max_length=150,null=True,blank=True)
    category=models.CharField(max_length=150,null=True,blank=True)
    description=models.TextField(null=True,blank=True)
    rating=models.DecimalField(max_digits=7,decimal_places=2,null=True)
    numReviews=models.IntegerField(null=True,default=0)
    price=models.DecimalField(max_digits=7,decimal_places=2,null=True)
    countInStock=models.IntegerField(null=True,default=0)
    createAt=models.DateTimeField(auto_now_add=True)
    image=models.ImageField(null=True)

    def __str__(self):
        return self.name




