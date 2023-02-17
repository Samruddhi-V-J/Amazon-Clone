import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentPage from './PaymentPage';


const promise = loadStripe(
  "pk_test_51MWdKFSBaBU5VXAinKRV7cJgDIHeRJ3LDB9R0xmpNz2JedoBYwnf7aLhh7RNUZ8tR3dM0KnvREQZLy9E7JTCJO9d00G1Wax5rE"
);

function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    
    <Router>
        <div className='app'>
          <Header/>
          
          <Routes>

              <Route path="/login" element={<Login />}></Route>
              {/* <Route path="/payment" element={<Payment/>}></Route>
              */}
              {/* <Route path="/payment" element={
                <React.Fragment>
                  
                  <Header header={Header}/>
                  <Payment payment={Payment}/>
                  <PaymentPage paymentpage={PaymentPage}/>
                </React.Fragment>
              }>
              </Route> */}

              {/* <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}

            {/* <Route path="/payment" element={
              <React.Fragment>
                   
                   <PaymentPage paymentpage={PaymentPage}/>
              </React.Fragment>
              }>
            </Route> */}
              
              <Route path="/payment" element={
              <React.Fragment>
                   
                   <Payment payment={Payment}/>
              </React.Fragment>
              }>
            </Route>
              

            {/* <Route path="/checkout" element={
              <React.Fragment>
                   <Checkout checkout={Checkout}/>
                   <PaymentPage paymentpage={PaymentPage}/>
              </React.Fragment>
              }>
            </Route> */}

              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/" element={<Home />}></Route>
    
          </Routes>
          
        </div>
    </Router>
   
  );
}

export default App;
