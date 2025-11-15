import React from "react";
import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "black",
  height: 64,
  lineHeight: "64px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 50px",
};

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 128px)",
  padding: 24,
  backgroundColor: "#0958d9",
  color: "#fff",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const tailwindHoverStyle =
  "transition delay-150 duration-300 ease-in-out hover:scale-110";

const layoutStyle = {
  minHeight: "100vh",
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  height: "100%",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontWeight: "bold",
  fontSize: "18px",
  textDecoration: "none",
  color: "black",
  padding: "4px 8px",
  borderRadius: "4px",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "900",
  padding: "8px 12px",
  borderRadius: "4px",
  transition: "background-color 0.3s",
};

const MainLayout = () => (
  <Layout style={layoutStyle}>
    <Header style={headerStyle}>
      {/* Logo à esquerda */}
      <Link to="/index" style={logoStyle}>
        {" "}
        {/*Link serve como container clicável para redirecionar para a página inicial*/}
        <img
          src="../../public/logo.png"
          alt="Logo"
          style={{
            height: "30px",
            width: "30px",
          }}
        />
        Green Line
      </Link>

      {/* Links de navegação à direita */}
      <nav style={navStyle}>
        <Link to="/index" style={linkStyle} className={tailwindHoverStyle}>
          Index
        </Link>
        <Link to="/produtos" style={linkStyle} className={tailwindHoverStyle}>
          Produtos
        </Link>
        <Link to="/sobre" style={linkStyle} className={tailwindHoverStyle}>
          Sobre
        </Link>
        <Link to="/login" style={linkStyle} className={tailwindHoverStyle}>
          Login
        </Link>
        <Link to="/cadastrar" style={linkStyle} className={tailwindHoverStyle}>
          Cadastrar
        </Link>
      </nav>
      <div className="flex">
        <Link to="/login" style={logoStyle} className={tailwindHoverStyle}>
          <UserOutlined />
        </Link>
        <Link to="carrinho" style={logoStyle} className={tailwindHoverStyle}>
          <ShoppingCartOutlined />
        </Link>
      </div>
    </Header>

    <Content style={contentStyle}>
      <Outlet />
    </Content>

    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);

export default MainLayout;
