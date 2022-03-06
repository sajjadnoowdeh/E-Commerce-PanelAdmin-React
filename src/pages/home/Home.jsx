import React, { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import Widgetsm from "../../components/Widgetsm/Widgetsm";
import { userRequest } from "../../services/axios/axios.config";

import "./Home.style.css";
const Home = () => {
  const [userStates, setUserStates] = useState([]);
  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getUserStates = async () => {
      const { data } = await userRequest.get("/users/states");
      data.map((user) => {
        setUserStates((prev) => [
          ...prev,
          { name: MONTH[user._id - 1], "Active User": user.total },
        ]);
      });
    };
    getUserStates();
  }, [MONTH]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStates}
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
