import Link from "next/link";
import { Menu } from "antd";
import {
  HomeOutlined,
  LoginOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeMenu } from "../../actions/nav";
import { startLogout } from "../../actions/auth";

const NavbarMain = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.nav);

  const handleClick = (e) => {
    dispatch(changeMenu(e.key));
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[menu]} mode="horizontal">
        <Menu.Item key="inicio" icon={<HomeOutlined />}>
          <Link href="/dashboard">
            <a>Inicio</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="cotizador" icon={<CalculatorOutlined />}>
          <Link href="/cotizador">
            <a>Cotizador</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="loginOut"
          icon={<LoginOutlined />}
          onClick={handleLogout}
        >
          <a>Cerrar sesión</a>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default NavbarMain;
