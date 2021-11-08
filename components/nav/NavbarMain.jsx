import { Menu } from "antd";
import {
  HomeOutlined,
  LoginOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeMenu } from "../../actions/nav";

const NavbarMain = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.nav);

  const handleClick = (e) => {
    dispatch(changeMenu(e.key));
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[menu]} mode="horizontal">
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
          <a>Cerrar sesión</a>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default NavbarMain;
