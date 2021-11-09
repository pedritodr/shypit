import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Button, message, Row, Col } from "antd";
import styles from "./ContentCotizador.module.css";
import "antd/dist/antd.css";
import FormStepsInicio from "./FormStepsInicio";
import ResultCotizador from "./ResultCotizador";
import FormStepsFin from "./FormStepsFin";
import { changeCotizador } from "../../actions/navCot";
import { startFormReqPrice } from "../../actions/formReqPrice";

export default function ContentCotizador() {
  const { Step } = Steps;

  const steps = [
    {
      title: "Consulta de precios",
      content: <FormStepsInicio />,
    },
    {
      title: "Resultados de la cotización",
      content: <ResultCotizador />,
    },
    {
      title: "Crear envío",
      content: <FormStepsFin />,
    },
  ];
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.navCot);
  const stateFormInicio = useSelector((state) => state.formReqPrice);
  const { height, width, origen, destino, weight, length } = stateFormInicio;
  const next = () => {
    dispatch(changeCotizador(current + 1));
  };

  const prev = () => {
    dispatch(changeCotizador(current - 1));
  };
  const handleRequestPrice = () => {
    if (origen === null) {
      message.error("El origen es requerido");
    } else if (destino === null) {
      message.error("El destino es requerido");
    } else if (height === "") {
      message.error("La altura es requerida");
    } else if (width === "") {
      message.error("El ancho es requerido");
    } else if (length === "") {
      message.error("El tamaño es requerido");
    } else if (weight === "") {
      message.error("El peso es requerido");
    } else {
      const data = JSON.stringify({
        parcel: {
          length,
          width,
          height,
          weight,
          origin_id: origen,
          destiny_id: destino,
          type_of_destiny: "domicilio",
          algorithm: "1",
          algorithm_days: "2",
        },
      });
      dispatch(startFormReqPrice(data));
      message.success("perfect");
    }
  };
  return (
    <>
      <Row className={styles.contentBody}>
        <Col span={24}>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className={styles.stepsContent}>{steps[current].content}</div>
          <div className={styles.stepsAction}>
            {current == 0 && (
              <Button type="primary" onClick={() => handleRequestPrice()}>
                Consultar precio
              </Button>
            )}

            {current == 1 && (
              <Button type="primary" onClick={() => next()}>
                Continuar
              </Button>
            )}

            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Crear envío
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Anterior
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}
