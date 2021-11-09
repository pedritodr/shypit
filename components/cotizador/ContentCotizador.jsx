import { useState } from "react";
import { Steps, Button, message, Row, Col } from "antd";
import styles from "./ContentCotizador.module.css";
import "antd/dist/antd.css";
import FormStepsInicio from "./FormStepsInicio";
import ResultCotizador from "./ResultCotizador";
import FormStepsFin from "./FormStepsFin";

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

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
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
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}
