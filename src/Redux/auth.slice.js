import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: JSON.parse(localStorage.getItem('userLoggedIn')),
            accessToken: JSON.parse(localStorage.getItem('access_token')),
            isLoading: false,
            isError: false,
            loginErrorMessage: null,
            isShow: false
        },
        signUp: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            signUpSuccessMessage: null,
            signUpErrorMessage: null,
            isShow: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.login.currentUser = action.payload.user;
            state.login.accessToken = action.payload.access_token;
            state.login.isLoading = false;
        },
        loginError: (state, action) => {
            state.login.isLoading = false;
            state.login.isError = true;
            state.login.loginErrorMessage = action.payload
        },
        loginEnd: (state) => {
            state.login.isLoading = false;
        },
        showLogin: (state) => {
            state.login.isShow = true
        },
        hiddenLogin: (state) => {
            state.login.isShow = false
        },
        signUpStart: (state) => {
            state.signUp.isLoading = true;
        },
        signUpSuccess: (state, action) => {
            state.signUp.isLoading = false;
            state.signUp.isSuccess = true;
            state.signUp.signUpSuccessMessage = action.payload;
        },
        signUpError: (state, action) => {
            state.signUp.isLoading = false;
            state.signUp.isError = true;
            state.signUp.signUpErrorMessage = action.payload;
        },
        showSignUp: (state) => {
            state.signUp.isShow = true
        },
        hiddenSignUp: (state) => {
            state.signUp.isShow = false
        },
        logout: (state) => {
            state.login.currentUser = null;
            state.login.accessToken = null;
        },
        clearAuthError: (state) => {
            state.login.loginErrorMessage = null;
            state.signUp.signUpErrorMessage = null;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginError,
    loginEnd,
    showLogin,
    hiddenLogin,
    signUpStart,
    signUpSuccess,
    signUpError,
    showSignUp,
    hiddenSignUp,
    logout,
    clearAuthError
} = authSlice.actions;

export default authSlice.reducer;