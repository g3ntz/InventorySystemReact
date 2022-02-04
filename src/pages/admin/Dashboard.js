import React, { useEffect } from "react";
import { StyledCards } from "../../components/shared/Cards/Cards.styled";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { adminNavItems } from "../../data/navItems";
import Cards from "../../components/shared/Cards/Cards";
import { statCards } from "../../data/statCards";
import LineChart from "../../components/shared/Chart/Chart";
import { chartData } from "../../data/chartData";
import Fade from 'react-reveal/Fade'

const Dashboard = () => {
  return (
    <>
      <Cards statCards={statCards} />
      <LineChart data={chartData} />
    </>
  );
};

export default Dashboard;
