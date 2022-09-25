import { Button, Result } from "antd";
function Layout() {
  return (
    <Result
      status="warning"
      title="想啥呢，还没做，未完待续~~~~"
      subTitle="嘻嘻嘻嘻嘻"
      extra={[<Button key="buy">等我哈</Button>]}
    />
  );
}
export default Layout;
