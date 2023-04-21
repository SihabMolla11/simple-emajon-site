import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './order.css';
import { setItem } from 'localforage';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const savedCart = useLoaderData();
    const [cart , setCart] = useState(savedCart);

    const handelRemoveProduct = (id) =>{
        const remainingProduct = cart.filter(product => product.id !== id);
        setCart(remainingProduct);
        removeFromDb(id)
    }


   const handelClearCart = () =>{
    setCart([]);
    deleteShoppingCart()
   }



    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(review => <ReviewItems
                         key={review.id}
                          review={review}
                          handelRemoveProduct={handelRemoveProduct}
                          ></ReviewItems>)
                }

            </div>

            <div className='cart-container'>
                <Cart
                 cart={cart}
                 handelClearCart={handelClearCart}
                >
                    <Link className='porosid-link' to="/checkout">
                        <button className='btn-proceed'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /></button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Order;