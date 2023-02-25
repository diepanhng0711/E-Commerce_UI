import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showLogin } from '../../../Redux/auth.slice';

function Checkout(props) {

    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch()

    if(!currentUser) {
        dispatch(showLogin());
    }

    return (
        <>{
            currentUser ?
                <div className="card-container">
                    <iframe src="https://payment-project-nu.vercel.app/" title='checkout' class="payment" frameborder="0"></iframe>
                </div>
                :
                <div style={{
                    width: "100%", textAlign: "center"
                }}
                >
                    Hãy <b><i><u style={{color:'#C5837C', cursor: "pointer"}} onClick={() => {dispatch(showLogin())}}>đăng nhập</u></i></b> trước khi thanh toán!
                </div>
        }</>
);
}

export default Checkout;