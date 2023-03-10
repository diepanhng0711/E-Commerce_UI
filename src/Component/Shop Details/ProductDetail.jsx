import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../Api/product.api';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Api/cart.api';
import { Toaster, toast } from 'react-hot-toast';
import Loading from '../Loading/Loading';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { showLogin } from '../../Redux/auth.slice';
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/skyblue';

function ProductDetail(props) {

    const param = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product.data)
    const currentUser = useSelector(state => state.auth.login.currentUser)
    const userId = useSelector(state => state.auth.login.currentUser)?.id;
    const [isLoading, setLoading] = useState(false)

    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [productId, setProductId] = useState();
    const [productQuantity, setProductQuantity] = useState();

    let subProduct = product?.sub_products;
    let sizes = new Set();
    let colors = new Set();
    let images = new Set();

    subProduct?.forEach(element => {
        sizes.add(element.size);
        images.add(element.image_url);
    });

    console.log(subProduct)

    if (size?.length > 0) {
        subProduct?.forEach(element => {
            element.size === size && colors.add(element.color);
        });
    }

    function increaseQuantity() {
        if (quantity < productQuantity) {
            setQuantity(prevQuantity => prevQuantity + 1)
        }
    }

    function decreaseQuantity() {
        quantity >= 1 && setQuantity(prevQuantity => prevQuantity - 1)
    }

    function addToCart() {
        if (!currentUser) {
            dispatch(showLogin());
        } else if (process.env.REACT_APP_CART_MODULE === "15") {
            setLoading(true);
            addCart({
                user_id: userId,
                product_id: productId,
                quantity: quantity
            })
                .then(res => {
                    setLoading(false)
                    console.log(res)
                    return res.data.message
                })
                .then((status) => {
                    status === "Success" && toast.success("Th??m v??o gi??? h??ng th??nh c??ng!")
                    status === "Error" && toast.error("M???u n??y ???? h???t h??ng!")
                })
                .catch(err => {
                    console.log(err)
                    toast.error("C?? l???i x???y ra khi th??m s???n ph???m v??o gi??? h??ng!")
                })
        } else if (process.env.REACT_APP_CART_MODULE === "11") {
            setLoading(true);
            addCart({
                user_id: userId,
                product_id: productId,
                quantity: quantity
            })
                .then(res => {
                    setLoading(false)
                    console.log(res)
                    return res.data
                })
                .then((status) => {
                    toast.success("Th??m v??o gi??? h??ng th??nh c??ng!")
                })
                .catch(err => {
                    console.log(err)
                    toast.error("C?? l???i x???y ra khi th??m s???n ph???m v??o gi??? h??ng!")
                })
        }
    }

    function getProductId(size, color) {
        subProduct?.forEach(element => {
            if (element.size === size && element.color === color) {
                setProductId(element.id)
                setProductQuantity(element.quantity)
            }
            if (size === "") {
                setProductId(undefined)
                setColor("")
            }
            if (color === "") {
                setProductId(undefined)
            }
        });
    }

    useEffect(() => {
        setQuantity(0);
    }, [color])

    useEffect(() => {
        color.length > 0 && getProductId(size, color);
    }, [color, size])

    useEffect(() => {
        getProductById(param.id, dispatch)
    }, [param, dispatch]);


    return (
        <>
            {product && (
                <div>
                    <div className="container-fluid py-5">
                        <div className="row px-xl-5">
                            <div className="col-lg-5 pb-5">
                                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner border">
                                        <Splide
                                            options={{ rewind: true, perPage: 1, pagination: false }}
                                            aria-label="React Splide Example"
                                        >
                                            {[...images].map((item, index) => (
                                                // <div className="carousel-item active" key={index}>
                                                <SplideSlide>
                                                    <img className="w-100 h-100" src={item} alt="" />
                                                </SplideSlide>
                                                // </div>
                                            ))}
                                        </Splide>
                                    </div>
                                    {/* <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                                    </a>
                                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                                    </a> */}
                                </div>
                            </div>

                            <div className="col-lg-7 pb-5">
                                <i className="font-weight-semi-bold">{product.name}</i>
                                <div className="d-flex mb-3">
                                    {/* <div className="text-primary mr-2">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star-half-alt"></small>
                                        <small className="far fa-star"></small>
                                    </div>
                                    <small className="pt-1">(50 Reviews)</small> */}
                                </div>
                                <p className="font-weight-semi-bold mb-4">
                                    <span style={{ color: '#e43a36' }}>
                                        {Math.floor(Number(product.sale_price) * (100 - Number(product.sale_off)) / 100)} VND
                                    </span>
                                    <del
                                        className="text-muted ml-2"
                                        style={{ fontSize: '20px', marginLeft: '18px' }}
                                    >
                                        {product.sale_price} VND
                                    </del>
                                </p>
                                <p className="mb-4 product-description">
                                    {product.description}
                                </p>
                                <div className="d-flex mb-3 sizes-select-wrapper">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">Size:</p>
                                    <form action="">
                                        <select name="" id=""
                                            className='sizes-select'
                                            onChange={(e) => setSize(e.target.value)}
                                        >
                                            <option value="">--Ch???n k??ch c???--</option>
                                            {[...sizes].map((item, index) => (
                                                <option
                                                    value={item}
                                                    key={index}
                                                >{item}</option>
                                            ))}
                                        </select>
                                    </form>
                                    {/* <form>
                                        {[...sizes].map((item, index) => (
                                            <div className="custom-control custom-radio custom-control-inline" key={index}>
                                                <input type="radio"
                                                    className="custom-control-input"
                                                    id={item} name="size"
                                                    value={item}
                                                    onChange={(e) => setSize(e.target.value)}
                                                />
                                                <label className="custom-control-label" htmlFor={item}>{item}</label>
                                            </div>
                                        ))}
                                    </form> */}
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="text-dark font-weight-medium mb-0 mr-3">M??u:</p>
                                    <form>
                                        {[...colors].length < 1 && <p style={{ marginBottom: "0" }}>Qu?? kh??ch vui l??ng ch???n size c???a s???n ph???m tr?????c!</p>}
                                        {[...colors].map((item, index) => (
                                            <div className="custom-control custom-radio custom-control-inline" key={index}>
                                                <input type="radio"
                                                    className="custom-control-input"
                                                    id={item} name="color"
                                                    value={item}
                                                    onChange={(e) => setColor(e.target.value)}
                                                />
                                                <label className="custom-control-label" htmlFor={item}>{item}</label>
                                            </div>
                                        ))}
                                    </form>
                                </div>
                                <div className="d-flex mb-4">
                                    {typeof (productId) === "number" && <>
                                        <p className="text-dark font-weight-medium mb-0 mr-3">Quantities:</p>
                                        <form>
                                            {productQuantity > 0 ?
                                                <p>{productQuantity}</p>
                                                :
                                                <p>0</p>}
                                        </form>
                                        {/* <p className="text-dark font-weight-medium mb-0 mr-3">Quantities:</p>
                                        <form>
                                            {productQuantity > 0 ?
                                                <p>{productQuantity}</p>
                                                :
                                                <p>0</p>}
                                        </form> */}
                                    </>}
                                </div>
                                <div className="d-flex align-items-center mb-4 pt-2">
                                    <div className="input-group quantity mr-3" style={{ width: '130px' }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary btn-minus"
                                                onClick={decreaseQuantity}
                                            >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text"
                                            className="form-control bg-secondary text-center"
                                            value={quantity}
                                            onChange={e => setQuantity(e.target.value)}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-primary btn-plus"
                                                onClick={increaseQuantity}
                                            >
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary px-3"
                                        onClick={() => addToCart()}
                                        style={(productId && quantity > 0) ? { pointerEvents: "auto" } : { pointerEvents: "none", opacity: "0.4", background: "#ccc" }}
                                    >
                                        <i className="fa fa-shopping-cart mr-1"></i> Th??m v??o gi??? h??ng
                                    </button>
                                </div>
                                <div className="d-flex pt-2">
                                    <p className="text-dark font-weight-medium mb-0 mr-2">Chia s???:</p>
                                    <div className="d-inline-flex">
                                        <a className="text-dark px-2">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="text-dark px-2">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="text-dark px-2">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a className="text-dark px-2">
                                            <i className="fab fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row px-xl-5">
                            <div className="col">
                                <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                                    <a className="nav-item nav-link active" data-toggle="tab"
                                        href="#tab-pane-1">Description</a>
                                    <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                                    <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-pane-1">
                                        <h4 className="mb-3">Product Description</h4>
                                        <p>
                                            <br />+ Cam k???t ch???t l?????ng v?? m???u m?? s???n ph???m gi???ng v???i h??nh ???nh.
                                            <br />+ H??ng ph???i c??n m???i v?? ch??a qua s??? d???ng
                                            <br />+ S???n ph???m b??? l???i do v???n chuy???n v?? do nh?? s???n xu???t
                                            <br />??? N???u b???n kh??ng ch???c m??nh m???c size bao nhi??u, b???n c?? th??? n??i v???
                                            vi???c cung c???p cho ch??ng
                                            t??i
                                            chi???u cao v?? c??n n???ng c???a b???n, ch??ng t??i s??? t?? v???n chuy??n nghi???p
                                            cho b???n.
                                            <br />??? N???u b???n c?? nhu c???u ?????c bi???t v??? s???n ph???m ???? mua, ho???c c??
                                            b???t k??? c??u h???i n??o, vui l??ng
                                            cho
                                            bi???t c??u h???i v?? nhu c???u c???a b???n trong ????n h??ng sau khi ?????t
                                            h??ng. Ch??ng t??i s??? x??? l?? n?? ngay
                                            sau khi ch??ng t??i nh??n th???y n??.
                                        </p>
                                        <p>
                                            C??m ??n b???n m???t l???n n???a
                                        </p>
                                    </div>
                                    <div className="tab-pane fade show active" id="tab-pane-2">
                                        <h4 class="mb-3">Additional Information</h4>
                                        <p>
                                            Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea.
                                            Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero
                                            diam ea vero et dolore rebum, dolor rebum eirmod consetetur
                                            invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd
                                            ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod.
                                            Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut
                                            diam consetetur duo justo est, sit sanctus diam tempor aliquyam
                                            eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at
                                            sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                                            sanctus eirmod takimata dolor ea invidunt.
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item px-0">
                                                        Tr???ng l?????ng
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        K??ch th?????c
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        N??i B??n
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        K??ch th?????c
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        C??? ??o
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Ki???u c??? ??o
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Phong c??ch
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Xu???t x???
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Ki???u c??? tay ??o
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Ch???t li???u
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        M??u s???c
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Chi???u d??i tay ??o
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        R???t l???n
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        D???p
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        ?????a ch??? t??? ch???c ch???u tr??ch nhi???m s???n xu???t
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        T??n t??? ch???c ch???u tr??ch nhi???m s???n xu???t
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item px-0">
                                                        10 kg
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        10 x 10 x 10 cm
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        H?? N???i
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        <a href="https://hazomi.com/kich-thuoc/2xl/" rel="tag">2XL</a>, <a
                                                            href="https://hazomi.com/kich-thuoc/l/" rel="tag">L</a>, <a
                                                                href="https://hazomi.com/kich-thuoc/m/" rel="tag">M</a>, <a
                                                                    href="https://hazomi.com/kich-thuoc/xl/" rel="tag">XL</a>
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        C??? s?? mi
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Spread Collar
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        H??n Qu???c
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Vi???t Nam
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Barrel Cuff
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Kh??c
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Kh??c
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        D??i tay
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        Kh??ng
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        H???ng Ng??y
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        My Th?????ng, Thanh Mai, Thanh Oai, H?? N???i
                                                    </li>
                                                    <li className="list-group-item px-0">
                                                        X?????ng May Anh Ch??u
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="tab-pane-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="mb-4">1 nh???n x??t "??o s?? mi s??nh ??i???u ?????y m??u s???c"</h4>
                                                <div className="media mb-4">
                                                    <img src={require('../../img/user.jpg')} alt="Image"
                                                        className="img-fluid mr-3 mt-1"
                                                        style={{ width: '45px' }} />
                                                    <div className="media-body">
                                                        <h6>
                                                            Vi???t H??ng<small> - <i>28 11 2022</i></small>
                                                        </h6>
                                                        <div className="text-primary mb-2">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                            <i className="far fa-star"></i>
                                                        </div>
                                                        <p>
                                                            S???n ph???m r???t ch???t l?????ng, nice!!!!!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h4 className="mb-4">????? l???i b??nh lu???n</h4>
                                                <small>Your email address will not be published. Required fields
                                                    are marked *</small>
                                                <div className="d-flex my-3">
                                                    <p className="mb-0 mr-2">????nh gi?? c???a b???n * :</p>
                                                    <div className="text-primary">
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                </div>
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="message">????nh gi?? *</label>
                                                        <textarea id="message"
                                                            cols="30"
                                                            rows="5"
                                                            className="form-control">
                                                        </textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="name">T??n c???a b???n *</label>
                                                        <input type="text" className="form-control" id="name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email *</label>
                                                        <input type="email" className="form-control" id="email" />
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <input type="submit" value="????? l???i ????nh gi?? c???a b???n"
                                                            className="btn btn-primary px-3" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            )}
            <Loading isLoading={isLoading} />
            <Toaster
                position='top center'
            />
        </>
    );
}

export default ProductDetail;