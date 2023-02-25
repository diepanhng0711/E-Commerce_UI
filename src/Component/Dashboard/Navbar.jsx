import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Menu from "./Menu";
import { showLogin, showSignUp } from "../../Redux/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import DropdownNavbar from "./DropdownNavbar";
import logoUser from "../../img/user-128.png";

const Navbar = (props) => {

    const [show, setShow] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [height, setHeight] = useState(0);
    const dropdownRef = useRef();
    const orderRef = useRef();


    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.login.currentUser);
    const token = useSelector(state => state.auth.login.accessToken);

    function closeDropdown() {
        setHeight(0);
    }

    //--------------------------------UseEffect to close dropdown-----------------
    useEffect(() => {
        /**
         * If the dropdown menu is open and the user clicks outside of the dropdown, close the dropdown menu.
         */
        let handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                closeDropdown()
            }
        }
        document.addEventListener("mousedown", handler, height === "auto")
        return document.removeEventListener("mousedown", handler, height === 0);
    })

    //--------------------------------UseEffect to close order dropdown menu-----------------
    useEffect(() => {
        let handler = (e) => {
            if (orderRef.current && !orderRef.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener("mousedown", handler)
        return document.removeEventListener("mousedown", handler);
    })

    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    {/*Menu*/}
                    <Menu />
                    {/*Navbar*/}
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="/#" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span
                                    className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                            </a>
                            <button type="button" className="navbar-toggler"
                                onClick={() => setShowNavbar(!showNavbar)}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={showNavbar ? "collapse navbar-collapse justify-content-between show" : "collapse navbar-collapse justify-content-between"} id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">

                                    <NavLink to="/" className="nav-item nav-link">Trang chủ</NavLink>
                                    <NavLink to="/shop" className="nav-item nav-link">Cửa hàng</NavLink>
                                    {/* <NavLink to="/shop-detail" className="nav-item nav-link">Chi tiết cửa hàng</NavLink> */}

                                    <div className="nav-item dropdown" ref={orderRef}>
                                        <Link className="nav-link dropdown-toggle"
                                            onClick={() => setShow(!show)}>Đơn hàng</Link>
                                        {show && <>
                                            <div className="dropdown-menu rounded-0 m-0" onClick={() => setShow(!show)}>
                                                <Link to="pages/shopping-card"
                                                    className="dropdown-item"
                                                >Giỏ hàng</Link>
                                                <Link to="pages/checkout"
                                                    className="dropdown-item"
                                                >Thanh toán</Link>
                                            </div>
                                        </>}
                                    </div>

                                    <NavLink to="contact" className="nav-item nav-link">Liên hệ</NavLink>
                                    <NavLink to="order" className="nav-item nav-link">Đơn mua</NavLink>
                                </div>
                                {
                                    token ?
                                        <div className="nav-links-main" ref={dropdownRef}>
                                            <Link style={{textDecoration:"none", cursor:"default"}} id='text-name'>{currentUser?.name}</Link>
                                            <img
                                                src={logoUser}
                                                className='user-pic'
                                                alt="imageUser"
                                                onClick={() => setHeight(height === 0 ? "auto" : 0)}
                                            />
                                            <DropdownNavbar height={height} closeDropdown={closeDropdown} />
                                        </div>
                                        :
                                        <div className="navbar-nav ml-auto py-0">
                                            <Link
                                                className="nav-item nav-link"
                                                onClick={() => dispatch(showLogin())}
                                            >
                                                Đăng nhập</Link>
                                            <Link
                                                className="nav-item nav-link"
                                                onClick={() => dispatch(showSignUp())}
                                            >
                                                Đăng ký</Link>
                                        </div>
                                }
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;