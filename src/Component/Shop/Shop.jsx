import React, { useState, useEffect } from 'react';
import { getListProduct } from '../../Api/product.api';
import { addCart } from '../../Api/cart.api';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showLogin } from '../../Redux/auth.slice';

function Shop(props) {

    const [isShow, setIsShow] = useState(false);

    const [productList, setProductList] = useState([]);

    const currentUser = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch();

    const listProduct = () => {
        getListProduct()
            .then(res => {
                setProductList(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        listProduct();
    }, [])
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-3 col-md-12">
                    <div className="border-bottom mb-4 pb-4">
                        <h5 className="font-weight-semi-bold mb-4">Lọc theo giá</h5>
                        <form>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="price-all" />
                                <label className="custom-control-label" htmlFor="price-all">Tất cả giá</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-1" />
                                <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-2" />
                                <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-3" />
                                <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-4" />
                                <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="price-5" />
                                <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>

                    <div className="border-bottom mb-4 pb-4">
                        <h5 className="font-weight-semi-bold mb-4">Lọc theo màu sắc</h5>
                        <form>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="color-all" />
                                <label className="custom-control-label" htmlFor="price-all">Tất cả các màu</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-1" />
                                <label className="custom-control-label" htmlFor="color-1">Đen</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-2" />
                                <label className="custom-control-label" htmlFor="color-2">Trắng</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-3" />
                                <label className="custom-control-label" htmlFor="color-3">Đỏ</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-4" />
                                <label className="custom-control-label" htmlFor="color-4">Xanh da trời</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="color-5" />
                                <label className="custom-control-label" htmlFor="color-5">Green</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>

                    <div className="mb-5">
                        <h5 className="font-weight-semi-bold mb-4">Lọc theo kích cỡ</h5>
                        <form>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="size-all" />
                                <label className="custom-control-label" htmlFor="size-all">All Size</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-1" />
                                <label className="custom-control-label" htmlFor="size-1">XS</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-2" />
                                <label className="custom-control-label" htmlFor="size-2">S</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-3" />
                                <label className="custom-control-label" htmlFor="size-3">M</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-4" />
                                <label className="custom-control-label" htmlFor="size-4">L</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div
                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="size-5" />
                                <label className="custom-control-label" htmlFor="size-5">XL</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="col-lg-9 col-md-12">
                    <div className="row pb-3">
                        <div className="col-12 pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Tìm kiếm theo tên" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-transparent text-primary">
                                                <i className="fa fa-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                                <div className="dropdown ml-4">
                                    <button className="btn border dropdown-toggle"
                                        type="button"
                                        id="triggerId"
                                        onClick={() => setIsShow(!isShow)}
                                    >
                                        Sort by
                                    </button>
                                    {
                                        isShow && <>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                                <a className="dropdown-item" href="/#">Mới nhất</a>
                                                <a className="dropdown-item" href="/#">Phổ biến</a>
                                                <a className="dropdown-item" href="/#">Theo đánh giá</a>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        {productList?.map(product => (
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                                <div className="card product-item border-0 mb-4">
                                    <div
                                        className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <img 
                                            className="img-fluid-product w-100" 
                                            src={product.sub_products.length !== 0? product.sub_products[0].image_url : null} 
                                            alt="Anh san pham" 
                                            style={{ objectFit: 'fill' }}
                                        />
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3">{product.name}</h6>
                                        <div className="d-flex justify-content-center">
                                            <h6 style={{ color: '#e43a36' }}>
                                                {Math.floor(Number(product.sale_price) *  (100 - Number(product.sale_off))/100)} VND
                                            </h6>
                                            <h6 className="text-muted ml-2">
                                                <del style={{ fontSize: '13px' }}>{product.sale_price} VND</del>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">
                                        <Link 
                                            to={`/product-detail/${product.id}`}
                                            className="btn btn-sm text-dark p-0"
                                            style={{width: '100%', textAlign: 'center'}}
                                        >
                                            <i className="fas fa-eye text-primary mr-1"></i>Xem chi tiết</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-12 pb-1">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center mb-3">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="/shop" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="/shop">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/shop">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/shop">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="/shop" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;