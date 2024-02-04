import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const searchForBackground = createAsyncThunk('images/fetchAll', async(_, thunkAPI) =>{
    try{
        const messyResult = await axios.get(`https://pixabay.com/api/?q=kitten&page=1&key=42185952-fc8f0b5dabf0b53a1466f4e24&image_type=photo&orientation=horizontal`);
        return messyResult.data.hits
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});