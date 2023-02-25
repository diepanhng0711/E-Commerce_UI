import React, { useState } from 'react';

function Menu(props) {

    const [isShow, setIsShow] = useState(false);
    const [isShowDresses, setIsShowDresses] = useState(false);

    const onClickShowMenu = () => {
        setIsShow(!isShow);
    }

    return (
        <>
            <div className="col-lg-3 d-none d-lg-block">
                {/* <div className="btn shadow-none d-flex align-items-center justify-content-between bg-white text-white w-100"
                    data-toggle="collapse"
                    href="src/Component/Dashboard/Navbar#navbar-vertical"
                    style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
                    onClick={onClickShowMenu}
                >
                    <h6 className="m-0">Danh mục</h6>
                    {
                        isShow ?
                            <i className="fa fa-angle-up text-dark"></i>
                            :
                            <i className="fa fa-angle-down text-dark"></i>
                    }
                </div> */}
                {
                    isShow &&
                    <>
                        <nav
                            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                            id="navbar-vertical"
                        >
                            <div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
                                <div className="nav-item dropdown">
                                    <div className="nav-link" data-toggle="dropdown" onClick={() => setIsShowDresses(!isShowDresses)}>
                                        Thời trang
                                        {
                                            isShowDresses ?
                                                <i className="fa fa-angle-up float-right mt-1"></i>
                                                :
                                                <i className="fa fa-angle-down float-right mt-1"></i>
                                        }
                                    </div>
                                    {
                                        isShowDresses && <>
                                            <div
                                                className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                                <a href="src/Component/Dashboard/Navbar" className="dropdown-item">Thời trang nam</a>
                                                <a href="src/Component/Dashboard/Navbar" className="dropdown-item">Thời trang nữ</a>
                                                <a href="src/Component/Dashboard/Navbar" className="dropdown-item">Thời trang trẻ em</a>
                                            </div>
                                        </>
                                    }
                                </div>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Áo phông</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Quần jeans</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Đồ bơi</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Đồ ngủ</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Quần áo thể thao</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Áo liền quần</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Áo cộc tay</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Áo khoác</a>
                                <a href="src/Component/Dashboard/Navbar" className="nav-item nav-link">Giày</a>
                            </div>
                        </nav>
                    </>
                }
            </div>
        </>
    );
}

export default Menu;