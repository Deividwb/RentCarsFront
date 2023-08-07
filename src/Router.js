// import { PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./app/Menu";
import AppBarComponent from "./components/AppBar/appBar";
import RegisterDriver from "./components/Support/support";
// import DriversReport from "./components/Reports/driversReport";
// import LoaderReport from "./components/Reports/loaderReport";
import Teste from "./components/teste";
import { useSelector } from "react-redux";
import DriversTable from "./components/Driver/table/DriversTable";
import DriversForm from "./components/Driver/form/tabs/DriversForm";
import CarsTable from "./components/cars/table/CarsTable";
import SupportTable from "./components/Support/support";

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
            <Route path="/" element={<Menu />} />
            <Route path="/drivers-table" element={<DriversTable />} />
            <Route path="/drivers-table/new" element={<DriversForm />} />
            <Route path="/drivers-table/:id/edit" element={<DriversForm />} />

            <Route path="/cars-table" element={<CarsTable />} />
            <Route path="/support_driver" element={<SupportTable />} />
            {/* <Route
              path="/loader-report"
              element={
                <PDFViewer style={{ width: "100%", height: "90vh" }}>
                  <LoaderReport />
                </PDFViewer>
              }
            /> */}

            {/* <Route
              path="/drivers-report"
              element={
                <PDFViewer style={{ width: "100%", height: "90vh" }}>
                  <DriversReport />
                </PDFViewer>
              }
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
