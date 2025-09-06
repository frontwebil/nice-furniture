import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./general.css";
import { Form } from "./components/Form/Form";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ScrollToHash } from "./ScrollToHash";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
      />
      <Form />
      <Header />
      <ScrollToHash />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
