from django.urls import path
from .views import BlogPostListByPregnancyWeek, BlogPublicList, BlogMineListCreate, BlogApprove

urlpatterns = [
    path("posts/", BlogPublicList.as_view(), name="blog-list-public"),          
    path("posts/mine/", BlogMineListCreate.as_view(), name="blog-mine"),        
    path("posts/<int:pk>/approve/", BlogApprove.as_view(), name="blog-approve"),
    path('posts/week/', BlogPostListByPregnancyWeek.as_view(), name='blog-by-pregnancy-week'),
]
