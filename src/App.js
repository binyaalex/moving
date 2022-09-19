import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ServiceList from "./components/servicesList/ServiceList";
// import Specialists from "./components/specialists/Specialists";
// import Appointment from "./components/appointment/Appointment";
// import EntranceCleaningHistory from "./components/entranceCleaningHistory/EntranceCleaningHistory";
// import Home from "./components/home/Home";
// import MarketPlace from "./components/marketPlace/MarketPlace";
// import MyProfile from "./components/myProfile/MyProfile";
// import SpecialistAccount from "./components/specialistAccount/SpecialistAccount";
// import PaidServices from "./components/paidServices/PaidServices";
// import MyAdresses from "./components/myAddresses/MyAdresses";
// import ManagerAccount from "./components/managerAccount/ManagerAccount";
// import Check from "./components/check/Check";
// import AboutSpesialist from "./components/aboutSpesialist/AboutSpesialist";
// import ProductDetails from "./components/productDetails/ProductDetails";
// import Confirm from "./components/confirm/Confirm";
// import Bills from "./components/pay/bills/Bills";
// import { Apartment } from "@mui/icons-material";
// import OnlineOrOnphone from "./components/onlineOrOnphone/OnlineOrOnphone";
// import Settings from "./components/settingsPages/settings/Settings";
// import Notifications from "./components/notificationsPages/notifications/Notifications";
// import BuildingCommitteeAccount from "./components/buildingCommitteeAccount/BuildingCommitteeAccount";
// import BuildingCommitteeMemberList from "./components/buildingCommitteeMemberList/BuildingCommitteeMemberList";
// import MemberAccount from "./components/MemberAccount/MemberAccount";
// import Welcome from "./components/welcome/Welcome";
// import Main from "./components/home/Main";

import Apartments from "./components/apartment/Apartments";
import Providers from "./components/Providers";
import Store from "./components/store/Store";
import Storage from "./components/storage/Storage";
import PickItem from "./components/pickItem/PickItem";
import GetOffer from "./components/getOffer/GetOffer";
import MovingKindSelect from "./components/movingKindSelect/MovingKindSelect";
import FactoryOrOffice from "./components/selectMovingCategory/FactoryOrOffice";
import ProductsList from "./components/selectMovingCategory/ProductsList";
import CallBack from "./components/selectMovingCategory/CallBack";
import PayAtTheEnd from "./components/pay/payAtTheEnd/PayAtTheEnd";
import StoringKindSelect from "./components/storing/storingKindSelect/StoringKindSelect";
import WhereStoring from "./components/storing/whereStoring/WhereStoring";
import HowMany from "./components/storing/howMany/HowMany";
import Calculator from "./components/storing/calculator/Calculator";
import CalculatorPickItem from "./components/storing/calculator/CalculatorPickItem";
import BusinessStoring from "./components/storing/storingKindSelect/BusinessStoring";
import TotalPrice from "./components/storing/price/TotalPrice";
import Home from "./components/home/Home";
import DetailsBeforeCallBack from "./components/getOffer/DetailsBeforeCallBack";
import PayNow from "./components/pay/payNow/PayNow";
import AddCard from "./components/pay/addCard/AddCard";
import PaymentSuccess from "./components/pay/paymentSuccess/PaymentSuccess";
import Moving from "./components/moving/Moving";
import Transport from "./components/transport/Transport";
import Nav from "./components/nav/Nav"
function App() {
  return (
    // <div className="PageDad">
    // <div className="page">

    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paynow" element={<PayNow />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/singleproducts" element={<ProductsList />} />
        <Route path="/moving" element={<Moving />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/store" element={<Store />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/pickitem" element={<PickItem />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/apartment" element={<Apartments />} />
        <Route path="/callback" element={<CallBack />} />
        <Route path="/getoffer" element={<GetOffer />} />
        <Route path="/paylater" element={<PayAtTheEnd />} />
        <Route path="/personaldetails" element={<DetailsBeforeCallBack />} />
        <Route path="/movingkindselect" element={<MovingKindSelect />} />
        <Route path="/factoryoroffice" element={<FactoryOrOffice />} />
        <Route path="/storingkindselect" element={<StoringKindSelect />} />
        <Route path="/wherestoring" element={<WhereStoring />} />
        <Route path="/businessstoring" element={<BusinessStoring />} />
        <Route path="/totalprice" element={<TotalPrice />} />
        <Route path="/howmany" element={<HowMany />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/calculatorpickitem" element={<CalculatorPickItem />} />
      </Routes>
    </BrowserRouter>
    // </div>
    // </div>
  );
}

export default App;
