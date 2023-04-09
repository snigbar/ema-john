import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../Products/Products'
import Summary from '../Summary/Summary'
import './Shop.css'
import { addToDb, getShoppingCart} from '../../resources/fakedb'


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
        // const newCart = [...cart, product];
        // setCart(newCart);
        // addToDb(product.id);

        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
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
