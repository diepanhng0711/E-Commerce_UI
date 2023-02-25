const Footer = () => {
    return (
        <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
            <div className="row px-xl-5 pt-5">
                <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <a href="src/Component/Footer/Footer" className="text-decoration-none">
                        <h1 className="mb-4 display-5 font-weight-semi-bold">
                            <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                                E
                            </span>
                            Shopper
                        </h1>
                    </a>
                    <p>
                    MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
                    </p>
                    <p className="mb-2">
                        <i className="fa fa-map-marker-alt text-primary mr-3"></i>
                        1 phường Bách Khoa, TP. Hà Nội, Việt Nam
                    </p>
                    <p className="mb-2">
                        <i className="fa fa-envelope text-primary mr-3">
                        </i>info@eshopper.com</p>
                    <p className="mb-0">
                        <i className="fa fa-phone-alt text-primary mr-3">
                        </i>(+84)8 123 456</p>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Truy cập nhanh</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Truy cập nhanh</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Cửa hàng của chúng tôi</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Chi tiết cửa hàng</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Giỏ hàng</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Thanh toán</a>
                                <a className="text-dark" href="src/Component/Footer/Footer">
                                    <i className="fa fa-angle-right mr-2"></i>Liên hệ với chúng tôi
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Chăm sóc khách hàng</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Trung tâm trợ giúp</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Hướng dẫn mua hàng</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Trả hàng & hoàn tiền</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Chăm sóc khách hàng</a>
                                <a className="text-dark mb-2" href="src/Component/Footer/Footer"><i
                                    className="fa fa-angle-right mr-2"></i>Chính sách đổi trả</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Tin vắn</h5>
                            <form action="src/Component/Footer/Footer">
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 py-4" placeholder="Tên"
                                           required="required"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control border-0 py-4" placeholder="Email của bạn"
                                           required="required"/>
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block border-0 py-3" type="submit">Đăng ký ngay
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border-top border-light mx-xl-5 py-4">
                <div className="col-md-6 px-xl-0">
                    <p className="mb-md-0 text-center text-md-left text-dark">
                        &copy;
                        <a className="text-dark font-weight-semi-bold" href="src/Component/Footer/Footer#">
                            E Shopper
                        </a>
                        {/* . All Rights Reserved. Designed by
                        <a class="text-dark font-weight-semi-bold" href="https://htmlcodex.com">
                            HTML Codex
                        </a><br/> */}
                    </p>
                </div>
                <div className="col-md-6 px-xl-0 text-center text-md-right">
                    <img className="img-fluid" src={require('../../img/payments.png')} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer;