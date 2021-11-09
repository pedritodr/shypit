import { Form, Input, Button, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SingupForm.module.css";
import { startLoginEmailPassword } from "../../actions/auth";

export default function SignupForm() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const onFinish = ({ email, password }) => {
    dispatch(startLoginEmailPassword(email, password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className={styles.containerMain}>
        <div className={styles.containerSecundary}>
          <Alert
            message="email:pedro@gmail.com, password: 567890"
            type="success"
            style={{ marginBottom: "20px" }}
          />
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 6,
                  message: "Please enter a password greater than 5 characters!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" disabled={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
