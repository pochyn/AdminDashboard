import React from "react";
import { ResponsiveContainer } from "recharts";

const Widget2 = () => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <div>widget2</div>
    </ResponsiveContainer>
  );
};

const chartWidget = {
  component: <Widget2 />,
  key: "chart2",
  label: "Chart 2",
};

export default chartWidget;
