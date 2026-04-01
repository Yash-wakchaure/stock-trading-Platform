import React from "react";

function Hero() {
    return (
        <div className="container mb-5">
            <div className="row p-5 text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" style={{width:"1000px", height:"400px", margin:"0 auto"}}></img>
                <h1 className="mt-5">Invest in Everthing</h1>
                <p>Online Platform for Invest in stocks, derivatives, mutual funds, and more</p>
                <button className="p-2 btn btn-primary fs-6 mb-5" style={{width:"20%", margin:"0 auto"}}>SignUp Now</button>
            </div>
        </div>
    )
}

export default Hero;