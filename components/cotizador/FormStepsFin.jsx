import { Form, Input, InputNumber, Row, Col } from "antd";
import { useSelector } from "react-redux";

export default function FormStepsFin() {
  const stateFormInicio = useSelector((state) => state.formReqPrice);
  const { loading } = useSelector((state) => state.ui);
  const { resultPrice } = stateFormInicio;

  return (
    <>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
      >
        <Row>
          <Col span={16} offset={4}>
            <Row>
              <Col span={12}>
                <Form.Item label="Origen" style={{ textAlign: "left" }}>
                  <Input
                    value={resultPrice.lower_price.courier.packet_from}
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Destino" style={{ textAlign: "left" }}>
                  <Input
                    value={resultPrice.lower_price.courier.packet_to}
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="Dimensiones" style={{ textAlign: "left" }}>
                  <InputNumber
                    value={resultPrice.lower_price.volumetric_weight}
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Precio" style={{ textAlign: "left" }}>
                  <InputNumber value={resultPrice.lower_price.price} disabled />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Checkout del envío"
                  style={{ textAlign: "left" }}
                >
                  <Input value={resultPrice.lower_price.name} disabled />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}
