import React from 'react';
import style from './navbar.module.css';

export default function Navbar (){
    return(
        <>
        <div className={style.navBar}>
            <div className={style.logo}>
                <h1>UOMO</h1>
            </div>
            <div className={style.pages}>
                <a href='#'>HOME</a>
                <a href='#'>SHOP</a>
                <a href='#'>COLLECTION</a>
                <a href='#'>JOURNAL</a>
                <a href='#'>LOOKBOOK</a>
                <a href='#'>PAGES</a>
            </div>
            <div className={style.icons}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-bag-shopping"></i>
            <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        </>
    )
}