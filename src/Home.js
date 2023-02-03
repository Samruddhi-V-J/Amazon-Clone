import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
      
         <div className="home__container">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
              />
        

            <div className="home__row">
              <Product
                id="12345"
                title="Teddy"
                price={249}
                image="https://m.media-amazon.com/images/I/61ZkudOoakL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
              />
              <Product
                id="12354"
                title="Dinine Craft Artificial Flower, Soft Toy Gift Set"
                price={379}
                image="https://rukminim1.flixcart.com/image/612/612/xif0q/valentine-gift-set/y/z/0/valentine-s-day-gift-set-0255-dinine-craft-original-imaghhp8am6u6h5q.jpeg?q=70"
                 rating={4}
              />  
            </div>

            <div className="home__row">
              
               <Product
                id="21453"
                title="Teddy"
                price={249}
                image="https://m.media-amazon.com/images/I/61ZkudOoakL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
              />
              <Product
                id="41253"
                title="Teddy"
                price={249}
                image="https://m.media-amazon.com/images/I/61ZkudOoakL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
              />
               <Product
                id="32145"
                title="Teddy"
                price={249}
                image="https://m.media-amazon.com/images/I/61ZkudOoakL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
              />

            </div>

          <div className="home__row">
            <Product
                id="12466"
                title="iFFALCON by TCL F53 79.97 cm (32 inch) HD Ready LED Smart Android TV with Android 11  (32F53)"
                price={9999}
                image="https://rukminim1.flixcart.com/image/312/312/xif0q/television/n/k/q/-original-imaghu25za2hq7dy.jpeg?q=70"                
                rating={4}
              />
             
          </div>

        </div>
     </div>
  )
}


export default Home
