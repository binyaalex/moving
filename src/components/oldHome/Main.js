import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../repeats/footer/Footer";
import Head from "../repeats/head/Head";
import "./Home.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcon from '@mui/icons-material/Add';
import CategorySquareList from "./categorySquare/CategorySquareList";
import ServiceSqaureList from "./serviceSqaure/ServiceSqaureList";
import PaidServiceSqaureList from "./paidServiceSqaure/PaidServiceSqaureList";
import BlogSqaureList from "./blogSquare/BlogSquareList";
import SpecialistsList from "../repeats/specialistsList/SpecialistsList";
import Search from "../repeats/search/Search";


const Main = () => {
  const [openServiceListSideBar, setOpenServiceListSideBar] = useState(true);

  const openSideBarComponent = (name, data) => {
    setOpenServiceListSideBar(name === "servicelist");
  };

  const closeSideBarComponent = () => {
    setOpenServiceListSideBar(false);
  };

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="בית" />
          <main className="homePage rtl">
            <Search />
            <section className="categoryArea">
              {/* Category Swiper */}
              <CategorySquareList />
              {/* Category Swiper */}
            </section>

            <section className="servicesArea">
              {/* Service */}
              <ServiceSqaureList />
              {/* Service */}
            </section>

            <section className="paidServicesArea">
              {/* Paid Service */}
              <PaidServiceSqaureList />
              {/* Paid Service */}
            </section>

            <Link to="/specialists" className="orderServiceArea">
              <div className="orderServiceBtnDiv">
                <div className="btnHeading">
                  <div className="textArea">
                    <div>הזמן שירות</div>
                  </div>
                  <AddIcon />
                </div>
              </div>
            </Link>

            <section className="blogArea">
              {/* Blog Swiper */}
              <BlogSqaureList />
              {/* Blog Swiper */}
            </section>

            <section className="specialistsArea">
              {/* Specialists Swiper */}
              <SpecialistsList />
              {/* Specialists Swiper */}
            </section>
          </main>
          {/* <div className="footer-container">
            <Footer page="home" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Main;