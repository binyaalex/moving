import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav"
import Home from "./components/home/Home";

import Storage from "./components/storage/Storage";
import PrivateStorage from "./components/storage/PrivateStorage";
import OnlineStorage from "./components/storage/OnlineStorage";
import GetBack from "./components/storage/GetBack";
import BusinessStorage from "./components/storage/BusinessStorage";
import StorageSummery from "./components/storage/StorageSummery";

import Transport from "./components/transport/Transport";
import TransportFewItems from "./components/transportFewItems/TransportFewItems";
import TransportApartment from "./components/transportApartment/TransportApartment";
import TransportGetBack from "./components/transportGetBack/TransportGetBack";
import TransportOnlineAddress from "./components/transportOnline/TransportOnlineAddress";
import TransportOnlineItems from "./components/transportOnline/TransportOnlineItems";
import TransportOffice from "./components/transportOffice/TransportOffice";
import TransportSummery from "./components/transportSummery/TransportSummery";
import StoragePay from "./components/storage/StoragePay";

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
        <Route path="/storageSummery" element={<StorageSummery />} />

        <Route path="/transport" element={<Transport />} />
        <Route path="/transportfewitems" element={<TransportFewItems />} />
        <Route path="/transportapartment" element={<TransportApartment />} />
        <Route path="/transportgetback" element={<TransportGetBack />} />
        <Route path="/transportonlineaddress" element={<TransportOnlineAddress />} />
        <Route path="/transportonlineitems" element={<TransportOnlineItems />} />
        <Route path="/transportoffice" element={<TransportOffice />} />
        <Route path="/transportsummery" element={<TransportSummery />} />
        <Route path="/storagepay" element={<StoragePay />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
