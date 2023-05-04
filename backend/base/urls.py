from django.urls import path
from . import views
urlpatterns = [
    path('',views.MyRoutes.as_view(),name="routes"),
    path('products/',views.ProductList.as_view(),name="products"),
    path('products/<str:idprod>',views.ProductView.as_view(),name="product"),
]