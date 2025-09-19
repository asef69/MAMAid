from email.policy import default
from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Pregnancy,Cycle
from .serializers import PregnancySerializer,CycleSerializer
from education.permissions import IsAdminRole
# Create your views here.

class CycleListCreate(generics.ListCreateAPIView):
    serializer_class = CycleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self): # type: ignore
        return Cycle.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Cycle
from .serializers import CycleSerializer

class CycleDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CycleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self): # type: ignore
        if self.request.user.is_anonymous:
            return Cycle.objects.none()
        return Cycle.objects.filter(user=self.request.user)
    

class PregnancyListCreate(generics.ListCreateAPIView):
    serializer_class = PregnancySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self): # type: ignore
        return Pregnancy.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
class PregnancyRetrieveUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = PregnancySerializer
    permission_classes = [IsAuthenticated]

    def get_object(self): # type: ignore
        obj, created = Pregnancy.objects.get_or_create(user=self.request.user)
        return obj

class AdminCycleList(generics.ListAPIView):
    serializer_class = CycleSerializer
    permission_classes = [IsAdminRole]  

    def get_queryset(self): # type: ignore
        return Cycle.objects.all()


class AdminPregnancyList(generics.ListAPIView):
    serializer_class = PregnancySerializer
    permission_classes = [IsAdminRole]  

    def get_queryset(self): # type: ignore
        return Pregnancy.objects.all()
