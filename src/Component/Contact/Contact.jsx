import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showLogin } from '../../Redux/auth.slice';

function Contact(props) {

    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch()
    const url = `chat-real-time.up.railway.app/client/${currentUser.id}`;
    if(!currentUser) {
        dispatch(showLogin());
    }

    return (
        <>{currentUser ?
            <div>
                <iframe src= {`https://chat-real-time.up.railway.app/client/${currentUser.id}`} class="chatbox" scrolling="no"></iframe>
            </div>
            :
            <div style={{
                width: "100%", textAlign: "center"
            }}
            >
                Hãy <b><i><u style={{color:'#C5837C', cursor: "pointer"}} onClick={() => {dispatch(showLogin())}}>đăng nhập</u></i></b> trước khi liên hệ!
            </div>
        }</>
    );
}

export default Contact;