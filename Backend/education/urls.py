from django.urls import path
from .views import BlogPublicList, BlogMineListCreate, BlogApprove

urlpatterns = [
    path("posts/", BlogPublicList.as_view(), name="blog-list-public"),          # anyone GET
    path("posts/mine/", BlogMineListCreate.as_view(), name="blog-mine"),        # user GET/POST
    path("posts/<int:pk>/approve/", BlogApprove.as_view(), name="blog-approve") # admin only
]
