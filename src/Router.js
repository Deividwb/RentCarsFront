import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./app/Menu";
import AppBarComponent from "./components/AppBar/appBar";
import { useSelector } from "react-redux";
import DriversTable from "./components/Driver/table/DriversTable";
import DriversForm from "./components/Driver/form/tabs/DriversForm";
import CarsTable from "./components/Cars/table/CarsTable";
import SupportTable from "./components/Support/support";
import CarsForm from "./components/Cars/form/tabs/CarsForm";

const Router = () => {
  const menuActive = useSelector((state) => state.menu.isActive);

  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Menu />
        <AppBarComponent />
        <div
          className={menuActive ? "homeTwo" : "home"}
          style={{
            marginTop: 110,
            padding: "0 30px",
          }}
        >
          <Routes>
            <Route path="/" element={<DriversTable />} />
            <Route path="/drivers-table" element={<DriversTable />} />
            <Route path="/drivers-table/new" element={<DriversForm />} />
            <Route path="/drivers-table/:id/edit" element={<DriversForm />} />

            <Route path="/cars-table" element={<CarsTable />} />
            <Route path="/cars-table/new" element={<CarsForm />} />
            <Route path="/cars-table/:id/edit" element={<CarsForm />} />

            <Route path="/support_driver" element={<SupportTable />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
