import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,
  Col,
  Avatar,
  OptGroup,
} from "antd";
const { Option } = Select;
import { useState } from "react";

import comunas from "../../data/comunas.json";

export default function FormStepsInicio() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  function handleChange(value) {
    console.log(value);
  }

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
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
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
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
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
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
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
                  <InputNumber min={0} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Ancho (cm)" style={{ textAlign: "left" }}>
                  <InputNumber min={0} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="Largo (cm)" style={{ textAlign: "left" }}>
                  <InputNumber min={0} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Peso (kg)" style={{ textAlign: "left" }}>
                  <InputNumber min={0} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
}
