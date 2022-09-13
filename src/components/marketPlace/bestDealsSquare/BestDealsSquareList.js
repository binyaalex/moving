import React from "react";

import BestDealsSquare from "./BestDealsSquare";

const BestDealsSquareList = () => {
  const BestDealsListArr = [
    {
      img: "/images/marketPlace/product5.jpg",
      title: "ניקוי חלונות",
      price: "65$",
      link: "/productdetails",
    },
    {
      img: "/images/marketPlace/product6.jpg",
      title: "תיקון נזילות",
      price: "70$",
      link: "/productdetails",
    },
  ];

  return (
    <div className="list_box_area d-flex justify-content-between flex-row-reverse row gx-4">
      {BestDealsListArr.map((el, i) => {
        return (
          <BestDealsSquare
            key={i}
            img={el.img}
            title={el.title}
            price={el.price}
            link={el.link}
          />
        );
      })}
    </div>
  );
};

export default BestDealsSquareList;
