import React from "react";
import "./home.css";
import Product from "./Product";

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
            id="5"
            title="OnePlus 9R 5G (Carbon Black, 12GB RAM, 256 GB Storage)"
            price={439999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61PDbUd1VaL._SL1500_.jpg"
          />
          <Product
            id="6"
            title="SKAFA Floating Wall Mount Metal U Shape Shelf Book CD DVD Storage Display Bookcase Bookshelf Black Set of 2"
            price={15.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/7115l3J7ouL._SL1140_.jpg"
          />
          <Product
            id="7"
            title="
            ICCON rugged premium magnetic organised apple lightning cable | apple charging cable    "
            price={500.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/614AVfzOYnL._SL1042_.jpg"
          />
          <Product
            id="8"
            title="Boult Audio ProBass FluidX Over-Ear Unbreakable Wireless Bluetooth Headphones with Microphone"
            price={15.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81BrGPH%2Bg1L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id= '1'
            title="ZURATO Home Fitness Equipment Sit-ups and Push-ups Assistant Device Lose Weight Gym Workout Abdominal curl Exercise with Suction Cup"
            price={100.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51mehdC4E9L._SL1001_.jpg"
          />
          <Product
            id="2"
            title="Wahl Travel Shaver (Black)"
            price={50}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/514gzt0a7oS._SL1500_.jpg"
          />
          <Product
            id="3"
            title='Noise ColorFit Ultra Smartwatch with 1.75" HD TruView Display, 60 Sports Modes, SpO2, Heart Rate, Stress, REM & Sleep Monitor, Calls & SMS...'
            price={15.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41H5QWkMEVS.jpg "
          />
        </div>

        <div className="home__row">
          <Product
            id="4"
            title="
            Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1549.59}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
