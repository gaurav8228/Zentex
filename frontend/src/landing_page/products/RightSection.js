import React from "react";

function RightSection(
  {imageUrl,
  productName,
  productDesc,
  tryDemo,
  lernMore,
  googlePlay,
  appStore}
) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mt-5">
          <h2>{productName}</h2>
          <p className="text-muted lh-lg">{productDesc}</p>
           <div className="mb-3 ">
            <a href={tryDemo} className="me-5">
              Try Demo →    
            </a>
            <a href={lernMore}>
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} className="me-4">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
            <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
