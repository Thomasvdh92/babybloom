from django.contrib import admin
from .models import Data, CustomUser

"""
Class used to shape the admin tool provided by the Django framework. Use this class to register 
models to the tool, as shown below.
"""
admin.site.register(Data)
admin.site.register(CustomUser)
