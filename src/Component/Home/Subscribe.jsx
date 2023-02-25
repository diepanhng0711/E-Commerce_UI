const Subscribe = (props) => {
    return (
        <div className="container-fluid bg-secondary my-5">
            <div className="row justify-content-md-center py-5 px-xl-5">
                <div className="col-md-6 col-12 py-5">
                    <div className="text-center mb-2 pb-2">
                        <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Luôn luôn bắt kịp xu hướng</span>
                        </h2>
                        <p>Luôn luôn đem đến cho bạn những thông tin mới nhất về những sản phẩm đang thịnh hành trên thị trường</p>
                    </div>
                    <form action="src/Component/Home/Subscribe">
                        <div className="input-group">
                            <input type="text" className="form-control border-white p-4" placeholder="Email của bạn"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-4">Đăng ký ngay</button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Subscribe;