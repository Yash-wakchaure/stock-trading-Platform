import React from "react";

function RightSection({ productImage, productName, productDescription, learnMore }) {
    return (
        <div className="container ">
            <div className="row mt-5">
                <div className="col-6 mt-5">
                    <h1>{productName}</h1>
                    <p className="mt-2">{productDescription}</p>
                    <a href={learnMore} style={{ textDecoration: "none" }}>Learn More&nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
               
                <div className="col-6 ">
                    <img src={productImage} alt={productName}></img>
                </div>
            </div>
        </div>
    )
}

export default RightSection;