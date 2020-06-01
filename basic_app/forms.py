# -*- coding: utf-8 -*-
"""
Created on Sun May 17 16:01:14 2020

@author: Ricardo Heredia

"""

from django import forms 
from django.contrib.auth.models import User
from basic_app.models import UserProfileInfo

class UserForm (forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput())
    
    class Meta():
        model = User
        fields = ('username', 'email', 'password')
## Ojo usd aca lo cambió   
class UserProfileInfoForm(forms.ModelForm):
    class Meta():
        model = UserProfileInfo
        fields = ('portfolio_site', 'profile_pic')