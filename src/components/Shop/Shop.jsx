import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../Products/Products'
import Summary from '../Summary/Summary'
import './Shop.css'
import { addToDb, getShoppingCart} from '../../../../ema-john-resources/utilities/fakedb'


export default function Shop() {

    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    useEffect(()=>{

        const storedCart = getShoppingCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            
            if(addedProduct){

            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
            setCart(savedCart);
        }
    },[products])

    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    

  return (

    <main className='main'>
        <div className="shop__section">
        {  
            products.map(product => (

                <Products 
                key={product.id} 
                product= {product}
                handleCart = {handleCart}
                >

                </Products>
            ))
        }
        </div>

        <Summary cart={cart}></Summary>

    </main>
  )
}
