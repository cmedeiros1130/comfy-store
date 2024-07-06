import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLaoding = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLaoding ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}

export default HomeLayout;
