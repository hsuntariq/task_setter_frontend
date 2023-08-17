import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";


// define the intialState of the app

const initialState = {
    goals:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:''
}


export const postGoals = createAsyncThunk('goal/post',async(goalData,thunkApi)=>{
    try {
        let token = thunkApi.getState().auth.user.token;
        return goalService.postGoals(goalData,token);
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})

export const getGoals = createAsyncThunk('goal/get',async(_,thunkApi)=>{
    try {
        let token = thunkApi.getState().auth.user.token;
        return goalService.getGoals(token);
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})


export const goalSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = ''
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(postGoals.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(postGoals.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.goals = null;
                state.message = action.payload;
            })
            .addCase(postGoals.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.goals = action.payload
            })
            .addCase(getGoals.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getGoals.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.goals = null;
                state.message = action.payload;
            })
            .addCase(getGoals.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.goals = action.payload
            })
    }
})


export const {reset} = goalSlice.actions;
export default goalSlice.reducer;