import React from 'react'

const Categories = ({ categoryList }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                {categoryList?.map((category, index) => (
                    <div className="col-lg-4 col-md-6 pb-1" key={index}>
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
                            <p className="text-right">15 Sản phẩm</p>
                            <a href="src/Component/Home/Categories" className="cat-img position-relative overflow-hidden mb-3">
                                <img className="img-fluid" src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/p2e3c7e3V9nSuIIlfPdsW/1eb9893e6216a2066186d3db03c78cf8/MS05Ny5qcGc/750w-500h/b%C3%AD-k%C3%ADp-gi%E1%BB%AF-qu%E1%BA%A7n-%C3%A1o-b%E1%BB%81n-%C4%91%E1%BA%B9p-nh%C6%B0-m%E1%BB%9Bi.jpg"
                                    alt=""
                                />
                            </a>
                            <h5 className="font-weight-semi-bold m-0">{category.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories;