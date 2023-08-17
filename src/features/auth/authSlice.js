// 1st step
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';


// check is user exists in the localstorage

const user = JSON.parse(localStorage.getItem('user'));

// 2.create the initial State

const initialState = {
    user:user ? user : null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
};


// 4. handle the asynchronous fucntions

export const register = createAsyncThunk('auth/register',async(userData,thunkApi)=>{
    try {
        return authService.registerUser(userData)
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})


export const logout = createAsyncThunk('auth/logout',(_,thunkApi)=>{
    try {
        return authService.logout();
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})


export const login = createAsyncThunk('auth/login',async(userData,thunkApi)=>{
    try {
        return authService.loginUser(userData)
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})

// 2.create the slice

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(register.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null
            })
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(logout.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(logout.rejected,(state)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = 'An Error Occured';
            })
            .addCase(logout.fulfilled,(state)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = null
            })
            .addCase(login.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
    }
})

// 3. export the reducers

export const {reset}  = authSlice.actions;
export default authSlice.reducer
