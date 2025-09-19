from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

User=get_user_model()

class BlogPost(models.Model):
    author=models.ForeignKey(User,on_delete=models.CASCADE,related_name='posts')
    title=models.CharField(max_length=200)
    content=models.TextField()
    week=models.PositiveIntegerField(help_text="Pregnancy week this post is relevant to")
    approved=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering=['-created_at']


        
