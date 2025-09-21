from django.urls import path
from .views import CycleListCreate, CycleDetail, PregnancyListCreate, PregnancyRetrieveUpdate

urlpatterns = [
    path("cycle/", CycleListCreate.as_view()),
    path("cycle/<int:pk>/", CycleDetail.as_view()),
    path("pregnancy/<int:pk>/", PregnancyRetrieveUpdate.as_view()),
    path('pregnancy/', PregnancyListCreate.as_view()),  
]
