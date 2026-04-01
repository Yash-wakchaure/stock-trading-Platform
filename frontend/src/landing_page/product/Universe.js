import React from "react";

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png"></img>
                    <p className="text-small text-muted mt-3">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" style={{ width: "198.98px", height: "52px" }}></img>
                    <p className="text-small text-muted mt-3">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" style={{ width: "200px", height: "35px" }}></img>
                    <p className="text-small text-muted mt-3">Options trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "220px", height: "" }}></img>
                    <p className="text-small text-muted mt-3">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/goldenpiLogo.png" style={{ width: "206px", height: "52px" }}></img>
                    <p className="text-small text-muted mt-3">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" style={{ width: "130px", height: "35px" }}></img>
                    <p className="text-small text-muted mt-3">Insurance</p>
                </div>
                <button className="p-2 btn btn-primary fs-7 mb-5 mt-4" style={{ width: "15%", margin: "0 auto" }}>Sign Up Now</button>
            </div>
        </div>
    )
}

export default Universe; 