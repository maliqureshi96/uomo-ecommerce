import React from 'react';
import Navbar from './Navbar';
import style from './App.module.css';
import Product from './Product';
import proImg1 from './1-removebg-preview.png';
import proImg2 from './2-removebg-preview.png';
import SqaureProduct from './SqaureProduct';
import basicCollectionImg from './prdduct1.png';
import RectangularPro from './RectangularPro';
import theEverygirlWears from './product2.png';
import freeShipping from './product3.png';
import runningShoes from './SKC-performance-Air-cooled-Memory-Foam-Walk-Black-Shoes-for-Men-1-removebg-preview.png';
import circleImg from './istockphoto-1372739005-612x612-removebg-preview.png';
import reviewImg from './nicolas-jackson.jpg';
import Footer from './Footer';

const App = ()=>{
  return(
    <>
    <Navbar/>
    <div className={style.mainSlide}>
      <div className={style.mainLeft}>
        <div className={style.mainLeftContainer}>
        <h1>The Classics</h1>
        <h3>An exclusive selection of this season's trends</h3>
        <div className={style.mainLeftBtn}>
          <h4>DISCOVER NOW</h4>
          </div>
        </div>
      </div>
      <div className={style.mainRight}>
        <div className={style.circleShap}>
        <img src={circleImg}/>
          <div className={style.subCircle}></div>
        </div>
        
      </div>
    </div>

    <div className={style.tredingSection}>
    <div className={style.sectionTitle}>
      <h2>Trending</h2>
      <ul className={style.category}>
        <li>All</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
      </ul>
    </div>
    <div className={style.product}>
    <div className={style.productCover}>
      <Product proImgAddress={proImg1} itemCategory={"Dresses"} itemName={"Cropped Faux Leather Jacket"} itemPrice={"$ 20"}/>
      <Product proImgAddress={proImg2} itemCategory={"Dresses"} itemName={"Calvin Shorts"} itemPrice={"$ 60"}/>
      <Product proImgAddress={proImg1}  itemCategory={"Dresses"} itemName={"Kirby T-Shirt"} itemPrice={"$ 17"}/>
      <Product proImgAddress={proImg2}  itemCategory={"Dresses"} itemName={"Cableknit Shawl"} itemPrice={"$ 85"}/>
      <Product proImgAddress={proImg1}  itemCategory={"Dresses"} itemName={"Colorful Jacket"} itemPrice={"$ 75"}/>
      <Product proImgAddress={proImg2}  itemCategory={"Dresses"} itemName={"Botanical Cheetah Print"} itemPrice={"$ 68"}/>
      <Product proImgAddress={proImg1}  itemCategory={"Dresses"} itemName={"Cotton Jersey T-Shirt"} itemPrice={"$ 52"}/>
      <Product proImgAddress={proImg2}  itemCategory={"Dresses"} itemName={"Zessi Dresses"} itemPrice={"$ 18"}/>
    </div>
    </div>
    <div className={style.allProduct}>
      <a href='#'><h4>SEE ALL PRODUCT</h4></a>
    </div>
    </div>
    <div className={style.bestProductCover}>
      <div className={style.bestProduct}>
        <div className={style.bestProductLeft}>
        <SqaureProduct productImgCode={basicCollectionImg} productDetailTitle={"BASIC COLLECTION"} productDetailType={"New Arrivals"}/>
        <RectangularPro productImgCode={freeShipping} productDetailTitle={"SHOP CASUAL"} productDetailType={"Free Shipping"}/>
        </div>
        <div className={style.bestProductRight}>
        <RectangularPro productImgCode={theEverygirlWears} productDetailTitle={"WANT AND NEED"} productDetailType={"The Everygirl Wears"}/>
        <SqaureProduct productImgCode={runningShoes} productDetailTitle={"SALE OFF THIS WEEK"} productDetailType={"Running Shoes"}/>
        </div>

      </div>
    </div>

     <div className={style.review}>
      <div className={style.reviewLeft}>
      <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div className={style.reviewMid}>
        <h3>Lorem Ipsum</h3>
        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
        <h5>H. Rackham, 06 July 2020</h5>
        <img src={reviewImg}/>
      </div>
      <div className={style.reviewRight}>
      <i class="fa-solid fa-angle-right"></i>
      </div>
     </div>

     <div className={style.insideCollection}>
      <h3 className={style.insideCollectionHeading}>The Inside Collection</h3>
      <div className={style.insideBlock}>
        <Product proImgAddress={proImg1} itemCategory={"Dresses"} itemName={"Cropped Faux Leather Jacket"} itemPrice={"$ 20"}/>
        <Product  proImgAddress={proImg2} itemCategory={"Dresses"} itemName={"Calvin Shorts"} itemPrice={"$ 60"}/>
        <Product proImgAddress={proImg1} itemCategory={"Dresses"} itemName={"Cropped Faux Leather Jacket"} itemPrice={"$ 20"}/>
        <Product  proImgAddress={proImg2} itemCategory={"Dresses"} itemName={"Calvin Shorts"} itemPrice={"$ 60"}/>
      </div>
     </div>


     <div className={style.limitedEdition}>
      <h3 className={style.limitedHeading}>Limited Edition</h3>
      <div className={style.insideLEBlock}>
        <Product proImgAddress={proImg1} itemCategory={"Dresses"} itemName={"Cropped Faux Leather Jacket"} itemPrice={"$ 20"}/>
        <Product  proImgAddress={proImg2} itemCategory={"Dresses"} itemName={"Calvin Shorts"} itemPrice={"$ 60"}/>
        <Product proImgAddress={proImg1} itemCategory={"Dresses"} itemName={"Cropped Faux Leather Jacket"} itemPrice={"$ 20"}/>
        <Product  proImgAddress={proImg2} itemCategory={"Dresses"} itemName={"Calvin Shorts"} itemPrice={"$ 60"}/>
      </div>
     </div>


    <Footer/>
    </>
  )
}

export default App;