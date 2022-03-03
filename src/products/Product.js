import React from "react";
import "./product.css";

const Product = () => {
  return (
    <>
      <div className="col col1">
        <h6 className="ld">Long Description</h6>
        <div className="long-descripti">
          <p className="para">
            Hostazym® P is an E.coli derived 6-phytase, produced by the yeast
            Pichia pastoris in a submerged fermentation process. Hostazym® P has
            been developed by researchers of the Cornell university in the USA
            and bears some specific selected features. Hostazym® is
            particularly effective in animal diets because it works optimal at a
            broad pH range, between pH 1 and 5. Further Hostazym® P is rather
            insensitive for degradation by pepsin, which is a naturally present
            (an endogenous) enzyme produced in the stomach of animals and which
            can destroy phytase. Hostazym® P is also much faster than other
            phytases in releasing Phosphorus from its indigestable form phytate,
            the natural form in which most of the phosphorus is stored in grains
            and seeds and which can destroy phytase.
          </p>
        </div>
      </div>

      <div className="related-products">
        <h2 className="rp">Related products</h2>
        <div className="list-block pr-logo-list">
          <div className="pr-logo-single lcol lcol4">
            <img src="/med2.png" alt="sav" />
            <div class="pr-logo-hover">
              <a href="#" class="btn opacity-white">
                View details
              </a>
            </div>
          </div>

          <div className="pr-logo-single lcol lcol4">
            <img src="./med.png" alt="" />
            <div class="pr-logo-hover">
              <a href="#" class="btn opacity-white">
                View details
              </a>
            </div>
          </div>

          <div className="pr-logo-single lcol lcol4">
            <img src="./med.png" alt="" />
            <div class="pr-logo-hover">
              <a href="#" class="btn opacity-white">
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
