import React from 'react'
import './Summary.css'

export default function Summary({cart}) {

let quantity = 0;
let shipping = 0;
let total =0


 for(const data of cart)
 {
    data.quantity = data.quantity || 1;
    total = total + (data.price * data.quantity);
    shipping = shipping + data.shipping;
    quantity = quantity + data.quantity;
 }



const tax = (total * 0.07);

let grandTotal = total + shipping + tax;
grandTotal = grandTotal.toFixed(2);

  return (
    <div className='summary__section'>
        <div className="summary">
            <h1>Order Summary</h1>
                <p className='selected__items'>Selected Items: {quantity}</p>
                <p className='total__price'>Total Price: ${total.toFixed(2)}</p>
                <p className='total__shipping__charge'>Total Shipping Cost: ${shipping.toFixed(2)}</p>
                <p className='total__tax'>Tax: ${tax.toFixed(2)}</p>
                <p className='grand__total'>Grand Total: ${grandTotal}</p>
        </div>
    </div>
  )
}
