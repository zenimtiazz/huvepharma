import React from "react";
import Check from "./Check";
import "./content.css";
import Species1 from "./species1";
import Species2 from "./species2";
import Species3 from "./species3";

const Content = () => {
  return (
    <div class="product-item-content">
      <div className="col col2">
        <h6 className="sum">summary</h6>
        <div className="summary-intro">
          <p>
            <br />
            Hostazym&reg; P is the fastest and most effective phytase on the
            market, giving the highest phosphorus matrix values and the highest
            savings on the cost of inorganic phosphate sources while minimizing
            environmental impact. Faster elimination of phytate also improves
            technical performance, with superdosing effects already observed at
            double dose.
          </p>
        </div>
        <h6>Key Benefits</h6>
        <div className="keybenefits">
          <ul className="green-list">
          <li> ✔ Feed cost savings</li>

            <li> ✔ Improvement in performance</li>

            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔ Reducing environmental impact</p>
          </ul>
        </div>
        <div className="species">
          <div className="species-list">
            <div className="species-single">
              <Species1 />
            </div>

            <div className="species-single">
              <Species2 />
            </div>

            <div className="species-single">
              <Species3 />
            </div>
            <div className="species-single">
              <Species3 />
            </div>
            <div className="species-single">
              <Species3 />
            </div>

          </div>
        </div>
        <div className="btn-block">
          <a href="#product-form" class="btn green">
            Ask a question
          </a>
          <a href="#">Or contact local representative</a>
        </div>
      </div>
      <div className="col col2">
        <h6 className="com">Composition</h6>
        <br />
        <div className="composition">
          <p>6-phytase derived from E. coli</p>
        </div>
        <h6 className="pf">product form</h6>
        <div className="productforms">
          <br />
          <ul className="point-list">
            <li>Coated</li>
            <li>Granular</li>
            <li>Liquid</li>
            <li>WSP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
