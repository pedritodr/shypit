import { Menu } from "antd";
import {
  HomeOutlined,
  LoginOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { SubMenu } = Menu;

const NavbarMain = () => {
  const [state, setState] = useState({
    current: "inicio",
  });

  const handleClick = (e) => {
    setState({ current: e.key });
  };
  const { current } = state;

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="inicio" icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>

        <Menu.Item key="cotizador" icon={<CalculatorOutlined />}>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizador
          </a>
        </Menu.Item>
        <Menu.Item key="loginOut" icon={<LoginOutlined />}>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cerrar sesión
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default NavbarMain;
