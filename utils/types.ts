import { ReactElement } from "react";

export type Widget = {
  component: ReactElement;
  key: string;
  label: string;
};

export type WidgetFolder = {
  [key: string]: {
    label: string;
    key: string;
    icon: ReactElement;
    items: Array<Widget>;
  };
};
