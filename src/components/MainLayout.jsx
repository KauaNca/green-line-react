import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Drawer, Button, Space } from 'antd';
import { UserOutlined, ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Menu principal (Navegação)
  const mainMenuItems = [
    {
      key: '1',
      label: <Link to="/">Home</Link>,
    },
    {
      key: '2',
      label: <Link to="/products">Produtos</Link>,
    },
    {
      key: '3',
      label: <Link to="/about">Sobre</Link>,
    },
  ];

  // Menu de usuário (Login e Carrinho)
  const userMenuItems = [
    {
      key: 'login',
      label: (
        <Link to="/login">
          <UserOutlined /> Login
        </Link>
      ),
    },
    {
      key: 'cart',
      label: (
        <Link to="/cart">
          <ShoppingCartOutlined /> Carrinho
        </Link>
      ),
    },
  ];

  // Menu mobile (combina tudo)
  const mobileMenuItems = [
    ...mainMenuItems,
    { type: 'divider' }, // Linha separadora
    ...userMenuItems,
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "blue",
        width: "100vw",
        padding: "0 50px",
        height: 64,
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "bold",
          fontSize: "18px",
          textDecoration: "none",
          color: "black",
        }}>
          <img
            src="../../public/logo.png"
            alt="Logo"
            style={{ height: "30px", width: "30px" }}
          />
          Green Line
        </Link>

        {/* LAYOUT DESKTOP */}
        {!isMobile && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
          }}>
            {/* Menu Principal - CENTRO */}
            <Menu
              mode="horizontal"
              items={mainMenuItems}
              style={{
                borderBottom: "none",
                backgroundColor: "transparent",
                flex: 1,
                justifyContent: "center",
                justifySelf: "center",
              }}
            />

            {/* Login e Carrinho - DIREITA */}
            <Menu
              mode="horizontal"
              items={userMenuItems}
              style={{
                borderBottom: "1px solid #f0f0f0",
                backgroundColor: "red",
                width: "auto",
                justifyContent: "flex-end",
              }}
            />
          </div>
        )}

        {/* LAYOUT MOBILE */}
        {isMobile && (
          <Space>
            {/* Ícone do Carrinho (sempre visível) */}
            <Link to="/cart">
              <Button type="text" icon={<ShoppingCartOutlined />} />
            </Link>
            
            {/* Botão do Menu Hamburguer */}
            <Button 
              type="text" 
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
            />
          </Space>
        )}
      </Header>

      {/* DRAWER PARA MOBILE */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          items={mobileMenuItems}
          onClick={() => setDrawerVisible(false)} // Fecha drawer ao clicar
        />
      </Drawer>

      <Content style={{
        minHeight: "calc(100vh - 128px)",
        padding: 24,
        backgroundColor: "#0958d9",
        color: "#fff",
      }}>
        <Outlet />
      </Content>

      <Footer style={{
        textAlign: "center",
        backgroundColor: "#4096ff",
        color: "#fff",
      }}>
        Footer
      </Footer>
    </Layout>
  );
};

export default MainLayout;