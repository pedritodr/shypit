import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Steps, Button, message, Row, Col } from "antd";
import styles from "./ContentCotizador.module.css";
import "antd/dist/antd.css";
import FormStepsInicio from "./FormStepsInicio";
import ResultCotizador from "./ResultCotizador";
import FormStepsFin from "./FormStepsFin";
import { changeCotizador } from "../../actions/navCot";
import { startFormReqPrice } from "../../actions/formReqPrice";
import { finishLoading, startLoading } from "../../actions/ui";
import Swal from "sweetalert2";

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
  const { loading } = useSelector((state) => state.ui);
  const { height, width, origen, destino, weight, length, resultPrice } =
    stateFormInicio;
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
      dispatch(startLoading());
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
      dispatch(startFormReqPrice(stateFormInicio, data, current));
    }
  };
  const rn = require("random-number");
  const options = {
    min: -1000,
    max: 1000,
    integer: true,
  };

  const data = JSON.stringify({
    shipment: {
      kind: 0,
      platform: 2,
      reference: rn(options),
      items: 1,
      seller: { name: "shopify", id: "1111111" },
      sizes: { width, height, length, weight },
      courier: {
        id: 1,
        client: "",
        selected: false,
        payable: false,
        algorithm: 1,
        algorithm_days: null,
        without_courier: false,
      },
      destiny: {
        street: "apoquindo",
        number: 55555,
        complement: "",
        commune_id: 308,
        commune_name: resultPrice?.lower_price.courier.packet_to,
        full_name: "Pedro",
        email: "pedro@gmail.com",
        phone: "1111111111",
        kind: "home_delivery",
        courier_destiny_id: null,
        courier_branch_office_id: null,
      },
      insurance: {
        ticket_amount: 10000,
        ticket_number: 392832,
        detail: "Zapatos talla x marca n",
        extra: true,
      },
      products: [{ sku_id: 11111, amount: 2, warehouse_id: 1 }],
    },
  });
  const router = useRouter();

  const handleCreateShipping = () => {
    Swal.fire({
      title: "¿Quieres crear el envío?",
      showCancelButton: true,
      confirmButtonText: "Crear envío",
      cancelButtonText: `Cerrar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(startLoading());
        try {
          const response = await axios.post(
            `${process.env.endPointApi}shipments`,
            data,
            {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                Accept: "application/vnd.shipit.v4",
                "X-Shipit-Email": process.env.emailAccess,
                "X-Shipit-Access-Token": process.env.tokenApi,
              },
            }
          );
          console.log(response);
          Swal.fire("Envío creado correctamente", "", "success");
          router.push("/dashboard");
          dispatch(changeCotizador(0));
          dispatch(finishLoading());
        } catch (err) {
          console.log(err);
          if (err.response.status === 400) {
            dispatch(finishLoading(err.response.data));
            message.error(err.response.data.message);
            dispatch(finishLoading(err));
          }
        }
      } else if (result.isDenied) {
        Swal.fire("Solicitud cancelada", "", "info");
      }
    });
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
              <Button
                type="primary"
                onClick={() => handleRequestPrice()}
                disabled={loading}
              >
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
                onClick={handleCreateShipping}
                disabled={loading}
              >
                Crear envío
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => prev()}
                disabled={loading}
              >
                Anterior
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}
