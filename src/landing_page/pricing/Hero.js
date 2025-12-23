import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col text-center mt-5">
          <h3>Charges</h3>
          <p className="text-muted fs-5">List of all charges and taxes</p>
        </div>
      </div>
      <div className="row  mt-5 text-center">
        <div className="col-4">
          <img src="media\images\pricing0.svg" style={{width: "70%"}} />
          <h2>Free equity delivery</h2>
          <p className="mt-4 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\pricing20.svg" style={{width: "70%"}} />
          <h2 >Intraday and F&O trades</h2>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media\images\pricing0.svg" style={{width: "70%"}} />
          <h2>Free direct MF</h2>
          <p className="mt-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
