import { AreaChartOutlined, LineChartOutlined } from "@ant-design/icons";
import { WidgetFolder } from "../../utils/types";
import widget1 from "./folder1/widget1";
import widget2 from "./folder2/widget2";
import widget3 from "./folder2/widget3";

const allWidgets: WidgetFolder = {
  folder1: {
    label: "Line Charts",
    key: "lineCharts",
    icon: <LineChartOutlined />,
    items: [widget1],
  },
  folder2: {
    label: "Area Charts",
    key: "areaCharts",
    icon: <AreaChartOutlined />,
    items: [widget2, widget3],
  },
};

export default allWidgets;
