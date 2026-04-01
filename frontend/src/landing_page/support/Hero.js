import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h4 className="support-title">Support Portal</h4>
                <a href="" className="track-ticket-link">Track Tickets</a>
            </div>

            <div className="support-content">
                <div id="supportSearch">
                    <h1 className="fs-4 mb-4">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="Eg. how do I activate F&O, why is my order getting rejected" className="search-input"/>
                    <div className="quick-links">
                        <a href="" className="quick-link">Track account opening</a>
                        <a href="" className="quick-link">Track segment activation</a>
                        <a href="" className="quick-link">Intraday margins</a>
                        <a href="" className="quick-link">Kite user manual</a>
                    </div>
                </div>

                <div id="supportFeatured">
                    <h1 className="fs-4 mb-4">Featured</h1>
                    <ol className="featured-list">
                        <li>
                            <a href="" className="featured-link">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="" className="featured-link">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Hero;