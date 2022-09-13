import React from "react";
import { Link } from "react-router-dom";
import Head from "../repeats/head/Head";
import Footer from "../repeats/footer/Footer";
import "./MarketPlace.css";
import filterIcon from "../../assets/images/icons/Filter.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import CollectiveMeetingSqaureList from "./collectiveMeetingSqaure/CollectiveMeetingSqaureList";
import ProductsSquareList from "./productsSquare/ProductsSquareList";
import BestDealsSquareList from "./bestDealsSquare/BestDealsSquareList";
import TabBtn from "./tabBtnMenu/TabBtn";
import Search from "../repeats/search/Search";

const MarketPlace = () => {
  const tabsBtnsArr = [
    {
      text: "הכל",
    },
    {
      text: "נקיון",
    },
    {
      text: "חשמל",
    },
    {
      text: "שיפוצים",
    },
    {
      text: "אינסטלציה",
    },
  ];

  const active = (e) => {
    const choosen = e.target.parentElement;
    const options = document.querySelectorAll(".tabsMenuLi");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("active");
    }
    choosen.classList.add("active");
  };

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="מרכז מסחרי" />
          <main className="marketPlacePage rtl">
            <Search />

            <section className="collectiveMeetingArea">
              {/* Collective Meeting Swiper */}
              <CollectiveMeetingSqaureList />
              {/* Collective Meeting Swiper */}
            </section>

            <section className="service_list_sec">
              <div className="tabs">
                <ul id="tabs-nav" className="tabsMenu list-unstyled">
                  {tabsBtnsArr.map((el, i) => {
                    return (
                      <TabBtn active={active} text={el.text} key={i} i={i} />
                    );
                  })}
                </ul>
                {/* <!-- END tabs-nav --> */}
                <div id="tabs-content">
                  <div id="tab1" className="tab-content">
                    <ProductsSquareList />
                  </div>
                </div>
                {/* <!-- END tabs-content --> */}
              </div>
            </section>

            <section className="service_list_sec best_deals_sec">
              <h3>שירותים פופלרים</h3>
              <div className="tabs">
                <div id="tabs-content">
                  <div id="tab1" className="tab-content">
                    <BestDealsSquareList />
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <Footer page='marketplace' /> */}
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
