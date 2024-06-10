import React from 'react'
import './ShopCard.css'

export default function ShopCard({product,className}) {
  return (
    className == 'module'?
    <div className={`product-card ${className}`}>
        <div className={`product-header ${className}`}>
          <img src={product.img} alt={product.name} className={`product-image ${className}`} />
        <div className={`product-info ${className}`}>
            <h3 className={`product-name ${className}`}>{product.name}</h3>
            <p className={`product-color ${className}`}>{product.color}</p>
          </div>
        </div>
        <div className={`product-details ${className}`}>
          <p className={`product-price ${className}`}>${product.price}</p>
          <button className={`product-button ${className}`}>Add to cart</button>
        </div> 
  </div>
  : <div className={`product-card ${className}`}>
        <img src={product.img} alt={product.name} className={`product-image ${className}`} />
        <h3 className={`product-name ${className}`}>{product.name}</h3>
        <p className={`product-color ${className}`}>{product.color}</p>
        <p className={`product-price ${className}`}>${product.price}</p>
        <button className={`product-button ${className}`}>Add to cart</button>
    </div> 
)}
