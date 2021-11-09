import { Table, Typography, Row, Col, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { finishLoading } from "../../actions/ui";
import SpinLoading from "../spin/spinLoading";
import styles from "./ContentCotizador.module.css";

const { Text, Link, Title } = Typography;

export default function ResultCotizador() {
  const dispatch = useDispatch();
  const stateFormInicio = useSelector((state) => state.formReqPrice);
  const { loading } = useSelector((state) => state.ui);
  const { height, width, origen, destino, weight, length, resultPrice } =
    stateFormInicio;

  const columns = [
    {
      title: "Courier",
      dataIndex: "original_courier",
      key: "original_courier",
      render: (text) => (
        <b>
          <p>{text.toUpperCase()}</p>
        </b>
      ),
    },
    {
      title: "Tipo de entrega",
      dataIndex: "original_courier",
      key: "domicilio",
      render: () => <p>Domicilio</p>,
    },
    {
      title: "Plazo Estimado",
      dataIndex: "days",
      key: "days",
      render: (text) => <p>{text > 1 ? text + " dias" : text + " dia"}</p>,
    },
    {
      title: "Peso Equivalente",
      dataIndex: "volumetric_weight",
      key: "volumetric_weight",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Precio Mercado",
      dataIndex: "price",
      key: "price",
      render: (text) => <p>{`$${text}`}</p>,
    },
  ];

  setTimeout(() => {
    dispatch(finishLoading());
  }, 2500);

  if (loading) {
    return (
      <>
        <SpinLoading />
      </>
    );
  } else {
    return (
      <>
        <div style={{ textAlign: "left", paddingLeft: "10px" }}>
          <Title level={4}>Resultados de tu cotización</Title>
        </div>

        <Table
          columns={columns}
          dataSource={resultPrice.prices}
          pagination={{ position: ["none", "none"] }}
        />
        <div style={{ textAlign: "left", paddingTop: "20px" }}>
          <Text style={{ fontSize: "18px" }} strong>
            Courier selecionado según{" "}
          </Text>
          <Link
            underline
            style={{ color: "#000", fontSize: "12px" }}
            strong
            onClick={() => message.info("coming soon")}
          >
            Configuración predeterminada
          </Link>
        </div>

        <Row className={styles.alertConfirmacion}>
          <Col span={6} className={styles.contentConfirmacion}>
            <Title level={5}>
              {resultPrice.lower_price.original_courier.toUpperCase()}
            </Title>
          </Col>
          <Col span={6} className={styles.contentConfirmacion}>
            <Text strong>Domicilio</Text>
          </Col>
          <Col span={6} className={styles.contentConfirmacion}>
            {resultPrice.lower_price.days > 1 ? (
              <Text strong> {`${resultPrice.lower_price.days} días`}</Text>
            ) : (
              <Text strong> {`${resultPrice.lower_price.days} día`}</Text>
            )}
          </Col>
          <Col span={6} className={styles.contentConfirmacion}>
            $<Text strong>{resultPrice.lower_price.price}</Text>
          </Col>
        </Row>
      </>
    );
  }
}
