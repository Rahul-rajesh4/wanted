
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
       
        const responce = await axios.get(`http://127.0.0.1:8000/api/Deleteshow/${id}`)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})

export const counterSlice = createSlice({
    name: 'display',
    initialState,
    extraReducers:(builder)=>{
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
        builder.addCase(deleteData.pending,(state)=>{
            state.loading = true 
        })
        builder.addCase(deleteData.fulfilled,(state,action)=>{
            state.loading= false
            state.data= action.payload
        })
        builder.addCase(deleteData.rejected,(state,action)=>{
            state.loading= false
            state.error= true
        })
        
    }

})

export default counterSlice.reducer