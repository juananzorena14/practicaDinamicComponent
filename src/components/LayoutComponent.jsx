import React from 'react';
import { Layout, theme } from 'antd';
import NavBarComponent from './NavBarComponent';
const { Content } = Layout;

const LayoutComponent = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  
  return (
    <Layout>
      <NavBarComponent/>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};
export default LayoutComponent;