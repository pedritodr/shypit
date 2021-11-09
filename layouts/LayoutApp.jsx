import { Layout, Divider, Row, Col } from "antd";
import "antd/dist/antd.css";
const { Header, Footer, Content } = Layout;

import NavbarMain from "../components/nav/NavbarMain";

export default function LayoutApp(props) {
  const { children } = props;
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ background: "#fff" }}>
          <NavbarMain />
        </Header>

        <Content style={{ padding: "0 50px", background: "#f0f2f5" }}>
          <Row>
            <Col span={24}>{children}</Col>
          </Row>
        </Content>
        <Divider />
        <Footer style={{ textAlign: "center" }}>coming soon ©2021</Footer>
      </Layout>
    </>
  );
}
