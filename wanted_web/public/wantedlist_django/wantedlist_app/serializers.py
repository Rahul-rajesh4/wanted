from rest_framework import serializers
from .models import Login
from .models import Register
from .models import show
from .models import contact

class loginserializers(serializers.ModelSerializer):
    class Meta:
        model=Login
        fields='__all__'

class registerserializers(serializers.ModelSerializer):
    class Meta:
        model=Register
        fields='__all__'

class showserializers(serializers.ModelSerializer):
    class Meta:
        model=show
        fields='__all__'

class contactserializers(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = '__all__'