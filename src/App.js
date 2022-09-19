import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Storage from "./components/storage/Storage";
import PrivateStorage from "./components/storage/PrivateStorage";
import OnlineStorage from "./components/storage/OnlineStorage";
import Home from "./components/home/Home";
import Transport from "./components/transport/Transport";
import TransportFewItems from "./components/transportFewItems/TransportFewItems";
import Nav from "./components/nav/Nav"
import TransportFewItemsSuccess from "./components/transportFewItems/TransportFewItemsSuccess";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/privatestorage" element={<PrivateStorage />} />
        <Route path="/onlinestorage" element={<OnlineStorage />} />

        <Route path="/transport" element={<Transport />} />
        <Route path="/transportfewitems" element={<TransportFewItems />} />
        <Route path="/transportfewitemsSuccess" element={<TransportFewItemsSuccess />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
