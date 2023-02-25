import axios from "axios";
import {
    hiddenSignUp,
    loginStart,
    loginSuccess,
    loginError,
    signUpError,
    signUpStart,
    signUpSuccess,
    hiddenLogin,
    logout
} from "../Redux/auth.slice";

const baseURL = "https://api-admin-dype.onrender.com/api"

export const loginUser = async (dataLoginObj, dispatch, swal) => {
    dispatch(loginStart());
    await axios.post(`${baseURL}/login`, dataLoginObj)
        .then((response) => {
            const account = response.data.user;
            const token = response.data.access_token;
            console.log(response.data);
            dispatch(loginSuccess(response.data));
            localStorage.setItem("userLoggedIn", JSON.stringify(account));
            localStorage.setItem("access_token", JSON.stringify(token));
        })
        .then(() => {
            dispatch(hiddenLogin());
        })
        .catch((err) => {
            console.log(err);
            dispatch(loginError("Email hoặc mật khẩu không đúng! Xin vui lòng nhập lại!"));
            swal({
                icon: "error",
                title: "Lỗi!",
                text: "Email hoặc mật khẩu không đúng! Xin vui lòng nhập lại!",
            })
        });
}

export const signUpUser = async (dataSignUpObj, dispatch, swal) => {
    dispatch(signUpStart());
    axios.post(`${baseURL}/user/user`, dataSignUpObj)
        .then((response) => {
            console.log(response);
            dispatch(signUpSuccess("Đăng ký thành công!"));
            swal({
                icon: "success",
                title: "ĐĂNG KÝ!",
                text: "Đăng ký tài khoản thành công!",
            }).then(() => {
                dispatch(hiddenSignUp());
            })
        })
        .catch(err => {
            console.log(err);
            dispatch(signUpError("Đăng ký thất bại!"));
            swal({
                icon: "error",
                title: "LỖI!",
                text: "Đăng ký thất bại!",
            }).then(() => {
                dispatch(hiddenSignUp());
            })
        })
}


export const logOutUser = (dispatch, navigate) => {
    localStorage.clear();
    dispatch(logout());
    navigate('/');
}