import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDesc,
  tryDemo,
  lernMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5 mb-5">
      {/* gx-5 adds horizontal space between columns */}
      <div className="row gx-5 align-items-center">
        
        {/* Left Image Column */}
        <div className="col-6">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
          />
        </div>
        <div className="col-1"></div>
        {/* Right Content Column */}
        <div className="col-5 p=5">
          <h2>{productName}</h2>
          <p className="text-muted lh-lg">
            {productDesc}
          </p>

          {/* Links */}
          <div className="mb-3">
            <a href={tryDemo} className="me-5 text-decoration-none">
              Try Demo →
            </a>
            <a href={lernMore} className="text-decoration-none">
              Learn More →
            </a>
          </div>

          {/* Store Buttons */}
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

      </div>
    </div>
  );
}

export default LeftSection;
