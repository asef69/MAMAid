# education/permissions.py
from rest_framework.permissions import BasePermission
class IsAdminRole(BasePermission):
    def has_permission(self, request, view): # type: ignore
        return bool(request.user and request.user.is_authenticated and getattr(request.user, "is_staff", False))
