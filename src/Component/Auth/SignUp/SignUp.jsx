import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { GrClose } from "react-icons/gr"
import { hiddenSignUp, showLogin } from '../../../Redux/auth.slice';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { RiErrorWarningFill } from "react-icons/ri"
import { signUpUser } from '../../../Api/auth.api';
import swal from 'sweetalert';
import Loading from '../../Loading/Loading'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const isShow = useSelector(state => state.auth.signUp.isShow);
    const isLoading = useSelector(state => state.auth.signUp.isLoading);

    const dispatch = useDispatch();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: yup.object().shape({
            name: yup.string().required("Required"),
            email: yup.string().email().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email invalid'),
            password: yup.string().min(8, 'Password too short!').required("Required"),
            confirmPassword: yup.string().required('Required').oneOf([yup.ref("password"), null], 'Confirmed password must match password')
        }),
        onSubmit: (values) => {
            console.log(values);
            const {name, email, password} = values;
            signUpUser({name, email, password}, dispatch, swal)
        }
    })

    return (
        <>{
            isShow && (
                <div className="signup-container">
                    <form className="signup-form" onSubmit={formik.handleSubmit}>
                        <span id="close-icon" onClick={() => dispatch(hiddenSignUp())}><GrClose /></span>
                        <div className="signup-header">
                            <h2>Đăng ký</h2>
                        </div>
                        <div className="signup-body">
                            <div className="input-container">
                                <label className="label-signup">Họ tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input-signup"
                                    placeholder="Họ tên của bạn"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.name && <span className='validate-icon'><RiErrorWarningFill /></span>}
                            </div>
                            <div className="input-container">
                                <label className="label-signup">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input-signup"
                                    placeholder="Email của bạn"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email && <span className='validate-icon'><RiErrorWarningFill /></span>}
                            </div>
                            <div className="input-container">
                                <label className="label-signup">Mật khẩu</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="input-signup"
                                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.password && <span className='validate-icon'><RiErrorWarningFill /></span>}
                            </div>
                            <div className="input-container">
                                <label className="label-signup">Xác nhận mật khẩu</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    className="input-signup"
                                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.confirmPassword && <span className='validate-icon'><RiErrorWarningFill /></span>}
                            </div>
                            <div className="show-password">
                                <input
                                    type="checkbox"
                                    id="show-pass"
                                    checked={showPassword}
                                    onChange={toggleShowPassword}
                                />
                                <label htmlFor="show-pass">Hiển thị mật khẩu</label>
                            </div>
                        </div>
                        <div className="signup-footer">
                            <button id="btn-signup" type='submit'>Đăng ký nhanh</button>
                            <span className='txt1'> ⭐ Bạn đã có tài khoản?
                                <Link
                                    className='txt2'
                                    onClick={() => {
                                        dispatch(hiddenSignUp());
                                        dispatch(showLogin());
                                    }}
                                > Đăng nhập ngay!</Link>
                            </span>
                        </div>
                    </form>
                </div>
            )
        }
            <Loading isLoading={isLoading} />
        </>
    )
}

export default SignUp