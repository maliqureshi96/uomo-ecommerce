import React from "react";
import style from './footer.module.css'

export default function Footer(){
    return(
        <>
        <div className={style.footerCover}>
            <div className={style.subDiv1}>
                <h2>UOMO</h2>
                <h4>4059 Carling Avenue, Ottawa, Ontario</h4>
                <div><h5>sales@uomo.com</h5>
                <h5>+1 (287) 350-4527</h5></div>
            </div>
            <div className={style.subDiv2}>
                <h3>Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={style.subDiv3}>
            <h3>Shop</h3>
                <ul>
                    <li>New Arrivals</li>
                    <li>Accessories</li>
                    <li>Men</li>
                    <li>Women</li>
                </ul>
            </div>
            <div className={style.subDiv4}></div>
            <div className={style.subDiv5}>
            <h2>Subscribe</h2>
                <h4>Be the first to get news</h4>
                <div className={style.subEmail}>
                    <p>Email Address</p>
                </div>
            </div>
        </div>
        </>
    )
}