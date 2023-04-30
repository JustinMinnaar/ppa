import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    user: {
        name: string;
        email: string;
    } | null;
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state:AuthState, action: PayloadAction<{ user: AuthState['user']; token: AuthState['token'] }>) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state:AuthState) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
