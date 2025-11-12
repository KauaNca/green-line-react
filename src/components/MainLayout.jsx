import React from "react";
import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "black",
  height: 64,
  lineHeight: "64px",
  backgroundColor: "white",
};

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 128px)", // espaço total menos header+footer
  padding: 24,
  backgroundColor: "#0958d9",
  color: "#fff",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  minHeight: "100vh",
};

const MainLayout = () => (
  <Layout style={layoutStyle}>
    <Header style={headerStyle}>
      <nav>
        <Link to="/index" style={{ margin: '0 15px' }}>Index</Link>
        <Link to="/produtos" style={{ margin: '0 15px' }}>Produtos</Link>
        <Link to="/sobre" style={{ margin: '0 15px' }}>Sobre</Link>
        <Link to="/login" style={{ margin: '0 15px' }}>Login</Link>
        <Link to="/cadastrar" style={{ margin: '0 15px' }}>Cadastrar</Link>
      </nav>
    </Header>

    <Content style={contentStyle}>
      <Outlet /> {/* Renderiza as páginas dentro do layout */}
    </Content>

    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);

export default MainLayout;
