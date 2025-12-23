import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center p-5">
          <h2>The Zerodha Universe</h2>
          <p className="text-muted mt-4">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row ms-5 ">
        <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png" style={{width:"200px"}}/>
          <p className="text-muted text-small text-center mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\sensibullLogo.svg" style={{width:"200px"}}/>
          <p className="text-muted text-small text-center mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="media/images/tijori.svg" style={{width:"150px"}} />
          <p className="text-muted text-small text-center mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row ms-5  ">
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"200px"}}/>
          <p className="text-muted text-small text-center mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="media/images/smallcaseLogo.png" style={{width:"200px"}}/>
          <p className="text-muted text-small text-center mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"130px"}}/>
          <p className="text-muted text-small text-center mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row">
        <button
          className="p-2 btn btn-primary fs-5 mb-6  mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
