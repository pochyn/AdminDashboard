import React from "react";
import { ResponsiveContainer } from "recharts";

const Widget1 = () => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <div>widget1</div>
    </ResponsiveContainer>
  );
};

const chartWidget = {
  component: <Widget1 />,
  key: "chart1",
  label: "Chart 1",
};

export default chartWidget;
