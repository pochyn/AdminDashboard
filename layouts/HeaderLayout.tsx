import { Layout } from "antd";
import React from "react";
import Header from "./Header";

const { Content } = Layout;

const HeaderLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
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
