from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework import status


# Create your views here.
class MyRoutes(APIView):
    def get(self,request):
        return Response('bonjour')

class ProductList(APIView):
    def get(self,request):
        products=Product.objects.all()
        serializer=ProductSerializer(products,many=True)
        return Response(serializer.data)
    def post(self,request):
        dataproduct={
            "name":request.data.get("name"),
            "category":request.data.get("category"),

        }
        serializer=ProductSerializer(data=dataproduct,many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class ProductView(APIView):
    def get(self,request,idprod):
        product=Product.objects.get(id=idprod)
        serializer=ProductSerializer(product,many=False)
        return Response(serializer.data)
        





