import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Products = ({ productList }) => {
  const currentUser = useSelector(state => state.auth.login.currentUser);

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">SẢN PHẨM NỔI BẬT</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {productList.map((product, index) => {
          if (product.quantity !== null)
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={index}>
                <div className="card product-item border-0 mb-4">
                  <div
                    className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid-product w-100" src={product.sub_products.length !== 0 ? product.sub_products[0].image_url : null} alt="" />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{product.name}</h6>
                    <div className="d-flex justify-content-center">
                      <h6 style={{ color: '#e43a36' }}>
                        <span>
                          {Math.floor(Number(product.sale_price) * (100 - Number(product.sale_off)) / 100)} VND
                        </span>
                      </h6>
                      <h6 className="text-muted ml-2">
                        <del style={{ fontSize: '13px' }}>{product.sale_price} VND</del>
                      </h6>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to={`/product-detail/${product.id}`} className="btn btn-sm text-dark p-0"
                      style={{ width: '100%', textAlign: 'center' }}
                    >
                      <i className="fas fa-eye text-primary mr-1"></i>Xem chi tiết</Link>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products