import { Spin } from "antd";
import styles from "../../styles/Home.module.css";

export default function SpinLoading() {
  return (
    <>
      <div className={styles.containerMain}>
        <div className={styles.containerSecundary}>
          <Spin size="large" />
        </div>
      </div>
    </>
  );
}
