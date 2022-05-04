import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import AreaChart from "./widgets/widget1";
import WidgetWrapper from "./WidgetWrapper";

// for now save to local storage,
// in the future better save items and layouts in db per user
const getFromLS = (key) => {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl")) || {};
    } catch (e) {}
  }
  return ls[key];
};

const saveToLS = (key, value) => {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl",
      JSON.stringify({
        ...JSON.parse(global.localStorage.getItem("rgl")),
        [key]: value,
      })
    );
  }
};

const originalItems = ["a"];

const initialLayouts = {
  lg: [{ w: 6, h: 6, x: 0, y: 0, i: "a", moved: false, static: false }],
};

const componentList = {
  a: AreaChart,
  b: AreaChart,
};

const DashboardResponsive = ({ size: { width } }) => {
  const [items, setItems] = useState(getFromLS("items") || originalItems);
  const layouts = getFromLS("layouts") || initialLayouts;
  console.log(layouts);

  const onLayoutChange = (_, allLayouts) => {
    saveToLS("layouts", allLayouts);
  };

  const onRemoveItem = (itemId) => {
    const newItems = items.filter((i) => i !== itemId);
    setItems(newItems);
    saveToLS("items", newItems);
  };

  const onDrop = (layout, layoutItem, _event) => {
    const newItems = [...items, "b"];
    setItems(newItems);
    saveToLS("items", newItems);
  };

  return (
    <>
      <ResponsiveGridLayout
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 16, md: 12, sm: 8, xs: 4, xxs: 2 }}
        rowHeight={60}
        width={width}
        onLayoutChange={onLayoutChange}
        isDroppable={true}
        onDrop={onDrop}
      >
        {items.map((key) => (
          <div key={key} data-grid={{ w: 6, h: 6, x: 0, y: Infinity }}>
            <WidgetWrapper
              id={key}
              onRemoveItem={onRemoveItem}
              component={componentList[key]}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
};

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(
  DashboardResponsive
);
