from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from .models import BlogPost
from .serializers import BlogCreateSerializer, BlogListSerializer
from .permissions import IsAdminRole
# Create your views here.

class BlogPublicList(generics.ListAPIView):
    serializer_class=BlogListSerializer
    permission_classes=[AllowAny]

    def get_queryset(self): # type: ignore
        qs=BlogPost.objects.filter(approved=True).order_by('-created_at')
        week=self.request.query_params.get('week') # type: ignore
        return qs.filter(week=week) if week else qs
    
        

class BlogMineListCreate(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self): # type: ignore
        return BlogPost.objects.filter(author=self.request.user)

    def get_serializer_class(self): # type: ignore
        return BlogCreateSerializer if self.request.method == "POST" else BlogListSerializer

    def perform_create(self, serializer):
        is_admin = getattr(self.request.user, "role", None) == "admin"
        serializer.save(author=self.request.user, approved=is_admin)

class BlogApprove(generics.UpdateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogListSerializer
    permission_classes = [IsAdminRole]

    def update(self, request, *args, **kwargs):
        post = self.get_object()
        post.approved = True
        post.save()
        return Response(BlogListSerializer(post).data)
