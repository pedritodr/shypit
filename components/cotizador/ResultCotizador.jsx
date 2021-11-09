import { Table, Tag, Space, Typography, Row, Col } from "antd";
import styles from "./ContentCotizador.module.css";

const { Text, Link, Title } = Typography;

export default function ResultCotizador() {
  const columns = [
    {
      title: "Courier",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tipo de entrega",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Plazo Estimado",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Peso Equivalente",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Precio Mercado",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "5",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <div style={{ textAlign: "left", paddingLeft: "10px" }}>
        <Title level={4}>Resultados de tu cotización</Title>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["none", "none"] }}
      />
      <div style={{ textAlign: "left", paddingTop: "20px" }}>
        <Text style={{ fontSize: "18px" }} strong>
          Courier selecionado según{" "}
        </Text>
        <Link
          href="https://ant.design"
          target="_blank"
          underline
          style={{ color: "#000", fontSize: "12px" }}
          strong
        >
          Configuración predeterminada
        </Link>
      </div>

      <Row className={styles.alertConfirmacion}>
        <Col span={6} className={styles.contentConfirmacion}>
          logo
        </Col>
        <Col span={6} className={styles.contentConfirmacion}>
          <Text strong>plaza</Text>
        </Col>
        <Col span={6} className={styles.contentConfirmacion}>
          <Text strong>dias</Text>
        </Col>
        <Col span={6} className={styles.contentConfirmacion}>
          <Text strong>200</Text>
        </Col>
      </Row>
    </>
  );
}
