import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import Widgetsm from "../../components/Widgetsm/Widgetsm";
import { data } from "../../dummyData";

import "./Home.style.css";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={data}
        dataKey={"Active User"}
        grid
        title={"User Analyices"}
      />
      <div className="homeWidget">
        <Widgetsm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
