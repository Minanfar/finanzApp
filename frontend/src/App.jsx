import Category from "./components/Category";
import React, { useContext, useState } from "react";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./util/router.jsx";
import Form from "./components/Form.jsx";
// import Home from "./pages/Home.jsx";
import Chart from "./components/Chart.jsx";
import "./style/app.css";
import { Context } from "./context/Context.jsx";

function App() {
  const { showForm, showChart, showCategory, showList, setShowList } =
    useContext(Context);
  return (
    <>
      {showCategory ? <Category /> : ""}
      {showForm ? <Form /> : ""}
      {showChart ? <Chart /> : ""}
    </>
  );
}

export default App;
