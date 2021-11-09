import { Form, Input, Select, InputNumber, Row, Col, message } from "antd";
const { Option } = Select;

import comunas from "../../data/comunas.json";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDestino,
  changeHeigth,
  changeLength,
  changeOrigen,
  changeWeight,
  changeWidth,
} from "../../actions/formReqPrice";

export default function FormStepsInicio() {
  const dispatch = useDispatch();
  const stateForm = useSelector((state) => state.formReqPrice);
  const { height, width, origen, destino, weight, length } = stateForm;

  const handleHeight = (value) => {
    if (value > 0) {
      dispatch(changeHeigth(stateForm, value));
    } else {
      message.error("La altura es requerida");
      dispatch(changeWidth(stateForm, ""));
    }
  };

  const handleWidth = (value) => {
    if (value > 0) {
      dispatch(changeWidth(stateForm, value));
    } else {
      message.error("El ancho es requerido");
      dispatch(changeWidth(stateForm, ""));
    }
  };

  const handleOrigen = (value) => {
    if (destino !== "" && destino === value) {
      message.error("El origen no puede ser igual al destino");
      dispatch(changeDestino(stateForm, null));
    } else {
      dispatch(changeOrigen(stateForm, value));
    }
  };

  const handleWeight = (value) => {
    if (value > 0) {
      dispatch(changeWeight(stateForm, value));
    } else {
      message.error("El peso es requerido");
      dispatch(changeWeight(stateForm, ""));
    }
  };

  const handleLength = (value) => {
    if (value > 0) {
      dispatch(changeLength(stateForm, value));
    } else {
      dispatch(changeLength(stateForm, ""));
      message.error("El tamaño es requerido");
    }
  };

  const handleDestino = (value) => {
    if (origen !== "" && origen === value) {
      message.error("El origen no puede ser igual al destino");
      dispatch(changeOrigen(stateForm, null));
    } else {
      dispatch(changeDestino(stateForm, value));
    }
  };

  return (
    <>
      <Form
        labelCol={{
          span: 6,
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
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Selecciona el origen"
                    optionFilterProp="children"
                    onChange={handleOrigen}
                    value={origen}
                    filterOption={(input, option) => {
                      if (option.children) {
                        return option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                          ? true
                          : false;
                      } else if (option.label) {
                        return option.label
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                          ? true
                          : false;
                      }
                    }}
                  >
                    {comunas.map((item) => (
                      <Option key={item.id} value={item.id} label={item.name}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Destino" style={{ textAlign: "left" }}>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Selecciona el destino"
                    optionFilterProp="children"
                    onChange={handleDestino}
                    value={destino}
                    filterOption={(input, option) => {
                      if (option.children) {
                        return option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                          ? true
                          : false;
                      } else if (option.label) {
                        return option.label
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                          ? true
                          : false;
                      }
                    }}
                  >
                    {comunas.map((item) => (
                      <Option key={item.id} value={item.id} label={item.name}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="Alto (cm)" style={{ textAlign: "left" }}>
                  <InputNumber
                    min={0}
                    autoComplete="off"
                    value={height}
                    onChange={handleHeight}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Ancho (cm)" style={{ textAlign: "left" }}>
                  <InputNumber
                    min={0}
                    autoComplete="off"
                    value={width}
                    onChange={handleWidth}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="Largo (cm)" style={{ textAlign: "left" }}>
                  <InputNumber
                    min={0}
                    autoComplete="off"
                    value={length}
                    onChange={handleLength}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Peso (kg)" style={{ textAlign: "left" }}>
                  <InputNumber
                    min={0}
                    autoComplete="off"
                    value={weight}
                    onChange={handleWeight}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}
