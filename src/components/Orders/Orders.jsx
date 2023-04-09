import React from 'react'
import Summary from '../Summary/Summary'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ReviewItem from '../ReviewItem/ReviewItem'
import './Orders.css'
import { removeFromDb } from '../../resources/fakedb'

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);  
    
    const handleRemoveCart = (id) =>{
        const remaining = cart.filter(el => el.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

  return (
    <main className='main'>
    <div className="review__section">
   {
    cart.map(el => <ReviewItem
    key={el.id}
    product={el}
    handleRemoveCart={handleRemoveCart}
    ></ReviewItem>)
   }
    </div>
        <Summary cart={cart}></Summary>
    </main>
  )
  console.log(cart.length);
}


export default Orders