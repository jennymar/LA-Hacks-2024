import { useRouter } from "../../node_modules/next/router";
import { useEffect } from "react";

import { useContext } from "react";
// import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return <AppRouter />;
}
