import React from 'react'
import './Payment.css'
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';

function Payment() {

  const [{user,basket}, dispatch]=useStateValue()
  return (
    
    <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
              </div>

               {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                       <p>{user?.email}</p>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                     
                {/* Payment section - review item */}

                <div className='payment__section'>
                  <div className='payment__title'>
                    <h3>Item review and delivery</h3>
                  </div>
                  <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                 id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                  </div>

                  <div className='payment__section'>
                     <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                    
                    </div>
                  </div>
  
  </div>

      

  )
}

export default Payment

