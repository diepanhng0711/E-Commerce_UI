import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showLogin } from '../../../Redux/auth.slice';

function OrderHistory(props) {

    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch()

    if(!currentUser) {
        dispatch(showLogin());
    }

    return (
        <>{
            currentUser ?
            <div className="card-container">
                <iframe className='card-frame'
                src={`https://tungsnk.tech:8888/listOrderByUser`} 
                frameborder="0"
                title='card'
                ></iframe>
            </div>
            :
            <div style={{
                width: "100%", textAlign: "center"
            }}
            >
                Hãy <b><i><u style={{color:'#C5837C', cursor: "pointer"}} onClick={() => {dispatch(showLogin())}}>đăng nhập</u></i></b> để xem đơn mua!
            </div>
        }</>
    );
}

export default OrderHistory;