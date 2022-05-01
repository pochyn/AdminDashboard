import {
  MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;


const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const triggerCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{height: '100vh'}}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: '10px' }}>
            {collapsed ? (<div onClick={triggerCollapsed}><MenuUnfoldOutlined/></div>) : null }
            {!collapsed ? (<div onClick={triggerCollapsed}><MenuFoldOutlined/></div>) : null }
           
            {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              onClick: triggerCollapsed,
            })} */}
          </Header>
          <Content
            // className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
  )
}

export default AppLayout