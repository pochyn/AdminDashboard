import { Layout } from "antd";
import React from "react";
import Header from "./Header";

const { Content } = Layout;

const HeaderLayout = ({ children }) => {
  return (
    <Layout>
      <Header triggerCollapsed={null} collapsed={null}/>
      <Content
        style={{
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default HeaderLayout;
