import React from "react";

function Stats() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5" >
                    <h1 className="fs-2 mb-5">Trust With Confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">Thats why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">No spam, gimmicks, "gimmification", annoying push notification. High quality apps that you use you pace, the way of you like</p>
                    <h2 className="fs-4">The Zerodha Universe</h2>
                    <p className="text-muted">Not just an app but whole ecosytem. Our investment in 30+ startups offer you tailored services specific to your needs</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">With initiatives like Nudge and kill switch, we don't just facilitate transactions, but actively help you do better with your money</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" style={{ width: "90%" }}></img>
                    <div ><a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products &nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        
                        <a href="" style={{textDecoration:"none"}}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;