import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./FeaturedInfo.style.css";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../services/axios/axios.config";
const FeaturedInfo = () => {
  const [incoms, setIncoms] = useState([]);
  const [precent, setPercent] = useState(null);
  useEffect(() => {
    const getIncome = async () => {
      const { data } = await userRequest.get("/orders/income");
      setIncoms(data);
      setPercent((data[0]?.total * 100) / data[1]?.total - 100);
    };
    getIncome();
  }, []);
  // console.log(incoms[1].total);
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">Ravanue</div>
        <div className="featuredMoneyContainer">
          <div className="featuredMoney">${incoms[0]?.total}</div>
          <div className="featuredMonyRate">
            {precent < 0 ? (
              <>
                ${precent} <ArrowDownward className="featuredIcon negative" />
              </>
            ) : (
              <>
                ${precent} <ArrowDownward className="featuredIcon negative" />
              </>
            )}
          </div>
        </div>
        <span className="featuredsub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">Sales</div>
        <div className="featuredMoneyContainer">
          <div className="featuredMoney">$4.415</div>
          <div className="featuredMonyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
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
