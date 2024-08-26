import React from 'react';
import style from './product.module.css';
import proImg1 from './1-removebg-preview.png';

export default function Product(props){
    return(
        <>
        <div className={style.cover}>
            <div className={style.productImg}>
                <img src={props.proImgAddress}/>
            </div>
            <h4>{props.itemCategory}</h4>
            <h3>{props.itemName}</h3>
            <h3>{props.itemPrice}</h3>
        </div>
        </>
    )
}