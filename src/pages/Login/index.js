import "./index.scss";
import login from "@/assets/login.jpg";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useStore } from "@/store/index";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Login() {
  const { loginStore } = useStore();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    await loginStore.setToken({
      mobile: values.username,
      code: values.password,
    });
    message.success("登陆成功 亲");
    navigate("/home", { replace: true });
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <div className="login-container">
        <h2
          style={{
            color: "white",
            opacity: "0.75",
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          SIGN IN
        </h2>
        <img className="login-logo" src={login}></img>
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
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="13811111111"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="246810"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="submit" type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
