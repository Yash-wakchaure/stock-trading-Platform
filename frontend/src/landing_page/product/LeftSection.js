import React from "react";

function LeftSection({ productImage, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 ">
                    <img src={productImage} alt={productName}></img>
                </div>
                <div className="col-6 p-5 mt-5" >
                    <h1>{productName}</h1>
                    <p className="mt-2">{productDescription}</p>
                    <div className="mb-4">
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo&nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a className="mx-5" href={learnMore} style={{textDecoration:"none"}}>Learn More&nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="d-flex gap-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"></img></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;