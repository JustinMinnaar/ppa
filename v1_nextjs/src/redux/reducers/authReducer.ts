import { createSlice, createAsyncThunk,  } from '@reduxjs/toolkit';
import axios from 'axios';
export interface AuthState {
    isAuthenticated: boolean;
    user: {
        name: string;
        email: string;
    } | null;
    token: string | null;
    status: string | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    status: null,
    error: null
};

type LoginRequest = {
    user:string;
    password:string;
}

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials: LoginRequest, thunkAPI) => {
        try {
            const response = await axios.post('/api/login', credentials);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state:AuthState) => {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
            state.status = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state:AuthState) => {
                state.status = 'loading';
            })
            .addCase(loginThunk.fulfilled, (state:AuthState, action :any) => {
                state.status = 'succeeded';
                state.user = action.payload;
                state.status = 'fulfilled'
            })
            .addCase(loginThunk.rejected, (state:AuthState, action :any) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
