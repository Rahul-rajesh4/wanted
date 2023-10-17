
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data:[],
    loading:false,
    error:false
}

export const fetchData = createAsyncThunk('fetchData',async()=>{
    try{
        const responce = await axios.get('http://127.0.0.1:8000/api/GetshowDetails')
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})
export const deleteData = createAsyncThunk('deleteData',async(id)=>{
    try{  
        console.log(id);
        const responce = await axios.delete(`http://127.0.0.1:8000/api/Deleteshow/${id}`)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})

export const userReg = createAsyncThunk('userReg',async(userData)=>{
    try{ 
        const responce = await axios.post('http://127.0.0.1:8000/api/UserRegister',userData)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})

export const addItems = createAsyncThunk('addItems',async(crimeData)=>{
    try{ 
        const responce = await axios.post('http://127.0.0.1:8000/api/AddshowAPI',crimeData)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})


export const contactus = createAsyncThunk('contactus',async(contact)=>{
    try{ 
        const responce = await axios.post('http://127.0.0.1:8000/api/contactUs',contact)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})

export const counterSlice = createSlice({
    name: 'display',
    initialState,
    extraReducers:(builder)=>{
        //Display card data
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading= false
            state.data= action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.loading= false
            state.error= true
        })
        //card delete
        builder.addCase(deleteData.pending,(state)=>{
            state.loading = true 
        })
        builder.addCase(deleteData.fulfilled,(state,action)=>{
            state.loading= false
            // state.data= action.payload
        })
        builder.addCase(deleteData.rejected,(state,action)=>{
            state.loading= false
            state.error= true
        })
        //register
        builder.addCase(userReg.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(userReg.fulfilled,(state,action)=>{
            state.loading= false
            state.data= action.payload
        })
        builder.addCase(userReg.rejected,(state,action)=>{
            state.loading= false
            state.error= true
        })


        //additems
        builder.addCase(addItems.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(addItems.fulfilled,(state,action)=>{
            state.loading= false
            state.data= action.payload
        })
        builder.addCase(addItems.rejected,(state,action)=>{
            state.loading= false
            state.error= true
        })

        //contactUs
        builder.addCase(contactus.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(contactus.fulfilled,(state,action)=>{
            state.loading= false
            state.data= action.payload
        })
        builder.addCase(contactus.rejected,(state,action)=>{
            state.loading= false
            state.error= true
        })
        
    }

})

export default counterSlice.reducer