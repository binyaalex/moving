import React, { useEffect, useState } from 'react';
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
import StoragePay from "./components/storage/StoragePay";

import Transport from "./components/transport/Transport";
import TransportFewItems from "./components/transport/TransportFewItems";
import TransportApartment from "./components/transport/TransportApartment";
import TransportGetBack from "./components/transport/TransportGetBack";
import TransportOnlineAddress from "./components/transport/TransportOnlineAddress";
import TransportOnlineItems from "./components/transport/TransportOnlineItems";
import TransportOffice from "./components/transport/TransportOffice";
import TransportSummery from "./components/transport/TransportSummery";

import mainLogo from "./assets/images/aviLogo.jpeg";


function App() {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/privatestorage" element={<PrivateStorage />} />
        <Route path="/onlinestorage" element={<OnlineStorage 
          mainLogo={mainLogo}  
          isMoving={isMoving} 
          setIsMoving={setIsMoving} 
        />} />
        <Route path="/getbackstorage" element={<GetBack mainLogo={mainLogo} />} />
        <Route path="/businessStorage" element={<BusinessStorage mainLogo={mainLogo} />} />
        <Route path="/storageSummery" element={<StorageSummery 
          mainLogo={mainLogo}
          isMoving={isMoving} 
          setIsMoving={setIsMoving} 
        />} />
        <Route path="/storagepay" element={<StoragePay mainLogo={mainLogo} />} />

        <Route path="/transport" element={<Transport />} />
        <Route path="/transportfewitems" element={<TransportFewItems mainLogo={mainLogo} />} />
        <Route path="/transportapartment" element={<TransportApartment />} />
        <Route path="/transportgetback" element={<TransportGetBack mainLogo={mainLogo} />} />
        <Route path="/transportonlineaddress" element={<TransportOnlineAddress mainLogo={mainLogo} />} />
        <Route path="/transportonlineitems" element={<TransportOnlineItems mainLogo={mainLogo} />} />
        <Route path="/transportoffice" element={<TransportOffice mainLogo={mainLogo} />} />
        <Route path="/transportsummery" element={<TransportSummery mainLogo={mainLogo} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
