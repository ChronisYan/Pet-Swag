import React from "react";
import './Item.css';

export default ({data}) => {
    // temp item
    const {imgUrl, imgAlt, productName, desc, price} = data;
    return (
        <div className={"Item"}>
            <div className={"Item-image-wrapper"}>
                <img src={imgUrl} alt={imgAlt}/>
            </div>
            <div className={"Item-body-wrapper"}>
                < h4> {productName}</h4>
                <span className={"Item-desc"}>{desc}</span>
            </div>
            <div className={"Item-price-wrapper"}>
                <span className={"Item-price"}>{price}</span>
                <button className={"Item-button"}>+Buy</button>
            </div>
        </div>
    )
}

