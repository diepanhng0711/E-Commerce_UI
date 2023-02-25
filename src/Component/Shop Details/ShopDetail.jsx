import React from 'react';

function ShopDetail(props) {
    return (
        <div>
            <p>
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center"
                         style={{minHeight:'300px'}}>
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">Chi tiết cửa hàng</h1>
                        <div className="d-inline-flex">
                            <p className="m-0"><a href="/#">Trang chủ</a></p>
                            <p className="m-0 px-2">-</p>
                            <p className="m-0">Chi tiết cửa hàng</p>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    );
}

export default ShopDetail;