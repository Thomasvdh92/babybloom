from rest_framework import serializers
from .models import Data, CustomUser
# from django.contrib.auth.models import User

"""
Serializers allow complex data such as querysets and model instances to be 
converted to native Python datatypes that can then be easily rendered into 
JSON, XML or other content types. 
"""


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password', 'email',
                  'is_patient', 'creation_date', 'midwife')
