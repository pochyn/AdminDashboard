import React from "react";
import { ResponsiveContainer } from "recharts";
import { Widget } from '../../../utils/types';


const Widget3 = () => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <div>widget3</div>
    </ResponsiveContainer>
  );
};

const chartWidget: Widget = {
  component: <Widget3 />,
  key: "chart3",
  label: "Chart 3",
};

export default chartWidget;
