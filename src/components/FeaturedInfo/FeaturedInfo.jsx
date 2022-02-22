import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./FeaturedInfo.style.css";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">Ravanue</div>
        <div className="featuredMoneyContainer">
          <div className="featuredMoney">$2.415</div>
          <div className="featuredMonyRate">
            -11.4 <ArrowDownward className="featuredIcon negative"/>
          </div>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">Sales</div>
        <div className="featuredMoneyContainer">
          <div className="featuredMoney">$4.415</div>
          <div className="featuredMonyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </div>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">Cost</div>
        <div className="featuredMoneyContainer">
          <div className="featuredMoney">$5.415</div>
          <div className="featuredMonyRate">
            +21.4 <ArrowUpward className="featuredIcon" />
          </div>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
