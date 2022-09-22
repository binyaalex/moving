import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Storage from "./components/storage/Storage";
import PrivateStorage from "./components/storage/PrivateStorage";
import OnlineStorage from "./components/storage/OnlineStorage";
import GetBack from "./components/storage/GetBack";
import BusinessStorage from "./components/storage/BusinessStorage";

import Home from "./components/home/Home";
import Transport from "./components/transport/Transport";
import TransportFewItems from "./components/transportFewItems/TransportFewItems";
import Nav from "./components/nav/Nav"
import TransportApartment from "./components/transportApartment/TransportApartment";
import TransportGetBack from "./components/transportGetBack/TransportGetBack";
import TransportOnlineAddress from "./components/transportOnline/TransportOnlineAddress";
import TransportOffice from "./components/transportOffice/TransportOffice";
import TransportSummery from "./components/transportSummery/TransportSummery";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/privatestorage" element={<PrivateStorage />} />
        <Route path="/onlinestorage" element={<OnlineStorage />} />
        <Route path="/getbackstorage" element={<GetBack />} />
        <Route path="/businessStorage" element={<BusinessStorage />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/transportfewitems" element={<TransportFewItems />} />
        <Route path="/transportapartment" element={<TransportApartment />} />
        <Route path="/transportgetback" element={<TransportGetBack />} />
        <Route path="/transportonlineaddress" element={<TransportOnlineAddress />} />
        <Route path="/transportoffice" element={<TransportOffice />} />
        <Route path="/transportsummery" element={<TransportSummery />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
