import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./Products.css"



export default function Products(props) {

    if(props.product){
        const {id, name, img, seller, price, quantity, ratings} = props.product;
        const handleAddToCart = props.handleCart;
        
  return (
    <div className='product'>

        <img src={img} className="product__img"/>

        <div className='product__details'>

        <h2 className="product__title">{name}</h2>
        <h3 className="product__price">Price: ${price}</h3>
        
        <div>
        <p className="product__manufacturer">Manufacturer: {seller}</p>
        <p className="product__seller">Ratings: {ratings} star</p>
        </div>
        </div>
        <button className='product__add__to__cart' onClick={()=> handleAddToCart(props.product)}>Add To Cart <FontAwesomeIcon icon={faCartShopping} fade/> </button>
    </div>
  )
}
}
