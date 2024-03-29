import { useSelector } from "react-redux";
import ContentDashboard from "../components/dashboard/ContentDashboard";
import SpinLoading from "../components/spin/SpinLoading";
import withAuth from "../components/withAuth";
import LayoutApp from "../layouts/LayoutApp";

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
    return (
      <>
        <LayoutApp>
          <ContentDashboard />
        </LayoutApp>
      </>
    );
  }
};

export default withAuth(Dashboard);
