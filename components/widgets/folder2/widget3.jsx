import React from "react";
import { ResponsiveContainer } from "recharts";

const Widget3 = () => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <div>widget3</div>
    </ResponsiveContainer>
  );
};

const chartWidget = {
  component: <Widget3 />,
  key: "chart3",
  label: "Chart 3",
};

export default chartWidget;
