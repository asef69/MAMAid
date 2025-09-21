from django.contrib.auth import get_user_model
from rest_framework import serializers

from users.models import CustomUser

User=get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,required=True)
    confirm_password=serializers.CharField(write_only=True,required=True)


    phone_number=serializers.CharField(required=False, allow_blank=True)
    address=serializers.CharField(required=False, allow_blank=True)


    class Meta:
        model=User
        fields=['username','email','password','confirm_password','phone_number','address']


    def validate(self,attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password":"Password fields didn't match."})
        return attrs

    def create(self,validated_data):
        user=User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            phone_number=validated_data.get('phone_number',''),
            address=validated_data.get('address','')
        )    

        return user
    


class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField(write_only=True)   


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['id','username','email','phone_number','address'] 



# users/serializers.py
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["role"] = user.role
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data["role"] = self.user.role # type: ignore
        return data

