
from django.urls import path
from .views import RegisterView, LoginView, UserDetailView,CustomTokenObtainPairView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserDetailView.as_view(), name='user-detail'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
