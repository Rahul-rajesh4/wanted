from django.shortcuts import render,redirect
from .serializers import loginserializers
from .serializers import registerserializers
from .serializers import showserializers
from .models import Login
from .models import Register
from .models import show
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

class UserRegister(GenericAPIView):
    serializer_class = registerserializers
    serializer_class_login = loginserializers

    def post(self,request):
        log_id = ''
        Fname = request.data.get('Fname')
        Lname = request.data.get('Lname')
        Email = request.data.get('Email')
        Contact = request.data.get('Contact')
        Password = request.data.get('Password')
        user_status = '0'
        role = 'user'
        if(Login.objects.filter(Email = Email)):
            return Response({'message':'Duplicate Email found!'},status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login = self.serializer_class_login(data = {'Email':Email,'Password':Password,'role':role})
            print(serializer_login)
        if serializer_login.is_valid():
            log = serializer_login.save()
            log_id = log.id
            print(log_id)
        Serializer = self.serializer_class(data = {'Fname':Fname, 'Lname':Lname,'user_status':user_status,'log_id':log_id,'Contact':Contact})
        print(Serializer)
        if Serializer.is_valid():
            print('HI')
            Serializer.save()
            return Response({'data':Serializer.data, 'Message':'User Registered SuccessFully', 'Success':True}, status = status.HTTP_201_CREATED)
        return Response({'data':Serializer.errors, 'Message':'Failed', 'Success':False}, status = status.HTTP_400_BAD_REQUEST)

class Display(GenericAPIView):
    serializer_class = registerserializers
    def get(self,request):
        queryset = Register.objects.all()
        if(queryset.count()>0):
            serializer = registerserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'All set','Success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'non data avilable','Success':False},status=status.HTTP_400_BAD_REQUEST)
    

class UserLogin(GenericAPIView):
    serializer_class = loginserializers
    def post(self,request):
        Email = request.data.get('Email')
        Password = request.data.get('Password')
        logreg = Login.objects.filter(Email=Email,Password=Password)
        if(logreg.count()>0):
            read_serializer = loginserializers(logreg,many=True)
            for i in read_serializer.data:
                id = i ['id']
                print(id)
                role = i['role']
            regdata = Register.objects.all().filter(log_id=id).values()
            print(regdata)
            for i in regdata:
                user_status= i['user_status']
                Fname = i['Fname']
                Lname= i['Lname']
                Contact = i['Contact']
                user_id = i['id']
            return Response({'data':{'login_id':id,'user_id':user_id,'Contact':Contact,'Password':Password,'user_status':user_status,'role':role,'Fname':Fname},'message':'All set','Success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'non data avilable','Success':False},status=status.HTTP_400_BAD_REQUEST)


class AddshowAPI(GenericAPIView):
    serializer_class=showserializers
    def post(self,request):
        Firstname=request.data.get('Firstname')
        Lastname=request.data.get('Lastname')
        Category=request.data.get('Category')
        Age=request.data.get('Age')
        Price=request.data.get('Price')
        serializer_show=self.serializer_class(data={'Firstname':Firstname,'Lastname':Lastname,'Category':Category,'Age':Age,'Price':Price,})
        print(serializer_show)
        if(serializer_show.is_valid()):
            serializer_show.save()
            return Response({'data':serializer_show.data,'message':'Added successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_show.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
    
class GetshowDetails(GenericAPIView):
    serializer_class=showserializers
    def get(self,request):
        queryset=show.objects.all()
        if(queryset.count()>0):
            serializer=showserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'all product set','success':True},status=status.HTTP_200_OK)
        return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)

class Deleteshow(GenericAPIView):
    def delete(self,request,id):
        deldata=show.objects.get(pk=id)
        deldata.delete()
        return Response({'message':'deleted','success':True},status=status.HTTP_400_BAD_REQUEST)

class Singledata(GenericAPIView):
    serializer_class=showserializers
    def get(self,request,id):
        queryset = show.objects.filter(pk=id).values()
        if(queryset.count()>0):
            serializer=showserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'successfull','success':True},status=status.HTTP_200_OK)
        return Response({'data':[],'message':'no data','success':False},status=status.HTTP_400_BAD_REQUEST)
        
   