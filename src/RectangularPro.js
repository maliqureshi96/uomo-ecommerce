import React from 'react';
import style from './rectangularpro.module.css';

export default function SqaureProduct(props){
    return(
        <>
        <div className={style.productCover}>
            <div className={style.productDetail}>
                <h4>{props.productDetailTitle}</h4>
                <h2>{props.productDetailType}</h2>
                <a href='#'><h4>SHOP NOW</h4></a>
            </div>
            <div className={style.productImage}>
                <img src={props.productImgCode}/>
            </div>
        </div>
        </>
    )
}