import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showLogin } from '../../../Redux/auth.slice';
import { deleteQuantityProductApi, getUserCartInfo, updateQuantityProductApi } from '../../../Api/cart.api';
import Loading from '../../Loading/Loading';
import { NavLink, Link } from "react-router-dom";

function Cart(props) {
    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch()

    const [isLoading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);

    let foundProduct;

    if (!currentUser) {
        dispatch(showLogin());
    } else {
        console.log('ENV');
        console.log(process.env.REACT_APP_CART_MODULE);
    }

    const fetchCart = async () => {
        let userId = currentUser.id;
        getUserCartInfo(userId)
            .then((response) => {
                setCart(response.data.data);
                setTotalPrice(response.data.totalPrice);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const updateQuantity = (id, quantity, userId) => {
        setLoading(true);
        updateQuantityProductApi(id, quantity, userId)
            .then(() => {
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteItemInCart = (id, userId) => {
        setLoading(true);
        deleteQuantityProductApi(id, userId)
            .then((res) => {
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const toggleIncreaseItemQuantity = async (id) => {
        foundProduct = cart.find((item) => item.id === id)
        const totalQuantities = Number(foundProduct.quanty);
        updateQuantity(Number(foundProduct.id_product), totalQuantities + 1, currentUser.id);
    }

    const toggleDecreaseItemQuantity = async (id) => {
        foundProduct = cart.find((item) => item.id === id)
        const totalQuantities = Number(foundProduct.quanty);
        if (totalQuantities > 1) {
            updateQuantity(Number(foundProduct.id_product), totalQuantities - 1, currentUser.id);
        }
    }

    const toggleDeleteItem = (id) => {
        foundProduct = cart.find((item) => item.id === id)
        deleteItemInCart(foundProduct.id_product, currentUser.id);
    }

    useEffect(() => {
        fetchCart();
    }, [totalPrice, isLoading]);

    return (
        <>{currentUser ? (
            <div className="card-container">
                {/* <iframe className='card-frame'
                    src={`https://hssh18121.github.io/Cart-frontend/${currentUser?.id}`} 
                    frameborder="0"
                    title='card'
                ></iframe> */}
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>S???n ph???m</th>
                                    <th>Gi??</th>
                                    <th>S??? l?????ng</th>
                                    <th>T???ng c???ng</th>
                                    <th>X??a</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {cart.map((item, index) => (
                                    <tr key={item?.id}>
                                        <td className="align-middle">
                                            <img src={item?.image_url} style={{ width: '50px', marginRight: '20px' }} alt="" />
                                            <span className='align-middle'>{item?.name}</span>
                                        </td>
                                        <td className="align-middle">{item?.price}</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus"
                                                        name={item?.id}
                                                        onClick={() => toggleDecreaseItemQuantity(item?.id)}
                                                    >
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text"
                                                    className="form-control form-control-sm bg-secondary text-center"
                                                    value={item?.quanty}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus"
                                                        name={item?.id}
                                                        onClick={() => toggleIncreaseItemQuantity(item?.id)}
                                                    >
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item?.total_price}</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-primary"
                                                onClick={() => toggleDeleteItem(item?.id)}
                                            ><i className="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-5" action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-4" placeholder="M?? gi???m gi??" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">??p d???ng</button>
                                </div>
                            </div>
                        </form>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Thanh to??n</h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">T???ng ti???n h??ng</h6>
                                    <h6 className="font-weight-medium">{totalPrice} VND</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Ph?? v???n chuy???n</h6>
                                    <h6 className="font-weight-medium">{shippingCharge} VND</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">T???ng thanh to??n</h5>
                                    <h5 className="font-weight-bold">{Number(totalPrice) + Number(shippingCharge)} VND</h5>
                                </div>
                                <Link to="/pages/checkout" className="btn btn-block btn-primary my-3 py-3" >
                                    T???o ????n h??ng
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ):
            <div style={{
                width: "100%", textAlign: "center", cursor: "pointer"
            }}
                onClick={() => { dispatch(showLogin()) }}
            >
                H??y <b><i><u style={{ color: '#C5837C' }}>????ng nh???p</u></i></b> ????? xem gi??? h??ng!
            </div>
        }
            <Loading isLoading={isLoading} />
        </>
    );
}

export default Cart;