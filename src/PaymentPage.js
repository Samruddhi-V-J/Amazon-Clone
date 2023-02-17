
import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function PaymentPage() {
  const publishableKey ='pk_test_51MWdKFSBaBU5VXAinKRV7cJgDIHeRJ3LDB9R0xmpNz2JedoBYwnf7aLhh7RNUZ8tR3dM0KnvREQZLy9E7JTCJO9d00G1Wax5rE'

  const [product]=useState({
    name:"Headphone",
    price:10,
  })

   const priceforStripe= product.price*100;

   const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };

   const payNow= async (token) => {
      try {
        const response =await axios({
        url:'http://localhost:3000/payment',

        method:'post',
        data:{
          amount:product.price*100,
          token,
        },
        });

        if(response.status==200){
          handleSuccess();
          console.log("Payment successful");
        }

      } catch (error) {
        handleFailure();
        console.log(error)
      }

   }


  return (
    <div className="App">
      <h2>React</h2>
      <p>
        <span>Product: </span>
        {product.name}
      </p>

      <p>
        <span>Price: </span>
        {product.price}
      </p>

      <StripeCheckout
        stripeKey={publishableKey}

        label='Pay Now'
        name='Pay with card'
        billingAddress
        shippingAddress
        amount={priceforStripe}
        description={'Your total is ${product.price}'}
        token={payNow}
      />

    </div>
  );
}

export default PaymentPage