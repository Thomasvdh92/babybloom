from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Data, CustomUser
from .serializers import DataSerializer, UserSerializer


class DataViewSet(viewsets.ModelViewSet):
    serializer_class = DataSerializer
    # permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        """
        Method used to obtain the queryset. If the request made to this view contains a query param 
        with 'user', it will use that param to filter the queryset accordingly. 
        """
        queryset = Data.objects.all()
        userId = self.request.query_params.get('user', None)
        if userId is not None:
            return queryset.filter(user__id=userId)
        return queryset


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        # Custom queryset filtering to obtain all patient belonging to a midwife
        queryset = CustomUser.objects.all()
        midwife = self.request.query_params.get('midwife', None)
        if midwife is not None:
            return queryset.filter(midwife=midwife)
        return queryset

    # permission_classes = (permissions.IsAuthenticated,)
