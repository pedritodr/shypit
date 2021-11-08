import { useSelector } from "react-redux";
import SpinLoading from "../components/spin/spinLoading";
import withAuth from "../components/withAuth";

const Dashboard = () => {
  const { loggedIn } = useSelector((state) => state.logged);
  if (!loggedIn) {
    return (
      <>
        <SpinLoading />
        <div>This is a Dashboard page which is private.</div>
      </>
    );
  } else {
    return <div>##### Congratulations! You are authorized! ######"</div>;
  }
};

Dashboard.getInitialProps = () => {
  console.info("##### Congratulations! You are authorized! ######");
  return {};
};

export default withAuth(Dashboard);
