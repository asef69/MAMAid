from rest_framework import serializers
from .models import BlogPost


class BlogCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model=BlogPost
        fields=['id','author','title','content','week','approved','created_at']


class BlogListSerializer(serializers.ModelSerializer):
    author_name=serializers.CharField(source='author.username', read_only=True)

    class Meta:
        model=BlogPost
        fields=['id','author_name','title','content','week','approved','created_at']
