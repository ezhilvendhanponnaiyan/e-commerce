import React, { useState } from 'react';

import Productdetail from './productdetail';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { BsEye } from 'react-icons/bs';

import { AiOutlineHeart } from 'react-icons/ai';

import './product.css';

const Product = () => {
  const [product, setProduct] = useState(Productdetail);
  const [productType, setProductType] = useState('');
  return (
    <>
      <h2>Products</h2>
      <p>Home . product</p>
      <div className='products'>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>categories</h3>
              <ul>
                <li onClick={() => setProductType('Tablet')}>Tablet</li>
                <li onClick={() => setProductType('Smart Watch')}>
                  Smart Watch
                </li>
                <li onClick={() => setProductType('Headphone')}>Headphone</li>
                <li onClick={() => setProductType('Camera')}>Camera</li>
                <li onClick={() => setProductType('Gaming')}>Gaming</li>
                <li onClick={() => setProductType('Electronics')}>
                  Electronics
                </li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='contant'>
              {(productType?.length > 0
                ? product?.filter((item) => item?.Cat === productType)
                : product
              )?.map((curElm, index) => {
                return (
                  <>
                    <div className='box' key={index}>
                      <div className='img-box'>
                        <img src={curElm.Img} alt={curElm.Title}></img>

                        <div className='icon'>
                          <li>
                            <AiOutlineShoppingCart />
                          </li>
                          <li>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className='detail'>
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>{curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
