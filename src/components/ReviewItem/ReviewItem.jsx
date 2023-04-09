import React from 'react'
import "./Review.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'


function ReviewItem({product, handleRemoveCart}) {

    const {id,img, price, quantity, name} = product;
  return (
    <div className='review__container'>
        <div className="review__item">
        <img src={img}/>
        <div className="details">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
        </div>

        <button onClick={() => handleRemoveCart(id)}><FontAwesomeIcon icon={faTrashCan}/></button>
        </div>
    </div>
  )
}

export default ReviewItem