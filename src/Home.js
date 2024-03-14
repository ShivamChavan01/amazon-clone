import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="images"
        />

        <div className="home-row">
          <Product
            id="1541542"
            title=" The Lena Startup: How Constant Innovation Creates Radically Successful Businesses Paperback "
            price={15.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />

          <Product
            id="1584545"
            title=" The Subtle Art of Not Giving A F*ck : A Counterintuitive Approach To Living A Good Life "
            price={18.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t4GuxLCuL._SL1500_.jpg"
          />

          <Product
            id="5485875"
            title=" Shoe Dog: A Memoir by the Creator of NIKE [Paperback] Phil Knight "
            price={185.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/717LHuYp7uL._SL1500_.jpg"
          />
        </div>

        <div className="home-row">
          

          <Product
            id="4858585"
            title=" The Mamba Mentality Hardcover – 19 June 2020 "
            price={20.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/A1z7ywkr2wL._SL1500_.jpg"
          />
          <Product
            id="5485875"
            title=" Random Girl "
            price={69.42}
            rating={6}
            image="https://m.media-amazon.com/images/I/61JqPW+sMAL._SL1360_.jpg"
          />
          <Product
            id="485852"
            title=" The Diary of A Young Girl Paperback – 1 January 2014 "
            price={105.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81lZ-9E4F-S._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
