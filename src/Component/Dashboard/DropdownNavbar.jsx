import React from 'react';
import AnimateHeight from 'react-animate-height';
import { HiUser } from 'react-icons/hi';
import { IoMdSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { GrFormNext } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../Api/auth.api';
import logo from '../../img/user-128.png';
import {HiOutlineTicket} from "react-icons/hi";


const DropdownNavbar = ({ height, closeDropdown }) => {

    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeDropdownNavbar = () => {
        closeDropdown(0);
    }

    const openlink = () => {
        window.open(`https://team12-ads-app.fly.dev/users/voucherList.all/${currentUser.id}`);
    }

    return (
        <AnimateHeight
            height={height}
            duration={300}
            id="subMenu"
            className='sub-menu-wrap'
            easing='ease-out'
        >
            <div className='sub-menu'>
                <div className='user-info'
                    onClick={() => {
                        // navigate('/profile')
                        closeDropdownNavbar();
                    }}
                >
                    <img src={logo} alt="" />
                    <h3>{currentUser?.name}</h3>
                </div>
                <hr />

                <div className='sub-menu-link'
                    onClick={() => {
                        // navigate('/profile')
                        closeDropdownNavbar();
                    }}
                >
                    <HiUser className='sub-menu-link-before' />
                    <p>Hồ sơ của bạn</p>
                    <GrFormNext className='sub-menu-link-after' />
                </div>

                <div className='sub-menu-link'
                    onClick={() => {
                        // navigate('/profile')
                        openlink();
                    }}
                >
                    <HiOutlineTicket className='sub-menu-link-before' />
                    <p>Voucher của tôi</p>
                    <GrFormNext className='sub-menu-link-after' />
                </div>

                <div className='sub-menu-link'
                    onClick={() => {
                        // navigate('/settings')
                        closeDropdownNavbar();
                    }}
                >
                    <IoMdSettings className='sub-menu-link-before' />
                    <p>Cài đặt</p>
                    <GrFormNext className='sub-menu-link-after' />
                </div>

                <div className='sub-menu-link'
                    onClick={() => {
                        closeDropdownNavbar();
                        logOutUser(dispatch, navigate);
                    }}
                >
                    <IoLogOut className='sub-menu-link-before' />
                    <p>Đăng xuất</p>
                    <GrFormNext className='sub-menu-link-after' />
                </div>
            </div>
        </AnimateHeight>
    )
}

export default DropdownNavbar