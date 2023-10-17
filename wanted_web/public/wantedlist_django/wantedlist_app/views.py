from django.shortcuts import render,redirect
from .serializers import loginserializers
from .serializers import registerserializers
from .serializers import showserializers
from .serializers import contactserializers
from .models import Login
from .models import Register
from .models import show
from .models import contact
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .mail import sendmail

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
            return Response({'data':{'login_id':id,'user_id':user_id,'Contact':Contact,'Password':Password,'user_status':user_status,'role':role,'Fname':Fname,'Lname':Lname},'message':'All set','Success':True},status=status.HTTP_200_OK)
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
        Images = request.data.get('Images')
        serializer_show=self.serializer_class(data={'Firstname':Firstname,'Lastname':Lastname,'Category':Category,'Age':Age,'Price':Price,'Images':Images})
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
            return Response({'data':serializer.data,'message':'all set','success':True},status=status.HTTP_200_OK)
        return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)

class Deleteshow(GenericAPIView):
    def delete(self,request,id):
        print(id)
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
        
class updateshow(GenericAPIView):
    serializer_class = showserializers
    def put(self,request,id):
        queryset=show.objects.get(pk=id)
        print(queryset)
        serializer=showserializers(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
    
class userdata(GenericAPIView):
    serializer_class= registerserializers
    def get(self,request,id):
        queryset = Register.objects.filter(pk=id).all()
        if(queryset.count()>0):
            serializer=registerserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'successfull','success':True},status=status.HTTP_200_OK)
        return Response({'data':[],'message':'no data','success':False},status=status.HTTP_400_BAD_REQUEST)
    

class userupdate(GenericAPIView):
    serializer_class = registerserializers
    def put(self,request,id):
        queryset = Register.objects.get(pk=id)
        print(queryset)
        serializers = registerserializers(instance=queryset,data=request.data,partial= True)
        print(serializers)
        if serializers.is_valid():
            serializers.save()
            return Response({'data':serializers.data,'message':'updated successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializers.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class contactUs(GenericAPIView):
    serializer_class = contactserializers
    def post(self,request):
        Fname = request.data.get('Fname')
        Lname = request.data.get('Lname')
        Contact = request.data.get('Contact')
        Email = request.data.get('Email')
        Message = request.data.get('Message')
        serializers_contact = self.serializer_class(data={'Fname':Fname,'Lname':Lname,'Contact':Contact,'Email':Email,'Message':Message})
        print(serializers_contact)
        if(serializers_contact.is_valid()):
            serializers_contact.save()
            return Response({'data':serializers_contact.data,'message':'Added successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializers_contact.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)


class displaycontactUs(GenericAPIView):
    serializer_class = contactserializers
    def get(self,request):
        queryset = contact.objects.all()
        if(queryset.count()>0):
            serializer = contactserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'successfull','Success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'non data avilable','Success':False},status=status.HTTP_400_BAD_REQUEST)
        
class singlecontactus(GenericAPIView):
    serializer_class=contactserializers
    def get(self,request,id):
        queryset = contact.objects.filter(pk=id).values()
        if(queryset.count()>0):
            serializer=contactserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'successfull','success':True},status=status.HTTP_200_OK)
        return Response({'data':[],'message':'no data','success':False},status=status.HTTP_400_BAD_REQUEST)
    

class replay(GenericAPIView):
    def post(self,request):
        Fname = request.data.get('Fname')
        Lname = request.data.get('Lname')
        Email = request.data.get('Email')
        Reply = request.data.get('Reply')
        sendmail(Email,Reply)
        return Response({'data':{'Email':Email,'Reply':Reply},'message':'updated successfully','success':True},status=status.HTTP_201_CREATED)