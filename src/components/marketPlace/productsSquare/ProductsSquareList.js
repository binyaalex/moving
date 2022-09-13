import React from "react";
import ProductsSquare from "./ProductsSquare";

const ProductsSquareList = () => {
  const ProductsListArr = [
    {
      img: "/images/marketPlace/product1.jpg",
      title: "נקיון מהיר של הדירה",
      price: "85$",
      link: "/productdetails",
      productKey: 1,
    },
    {
      img: "/images/marketPlace/product2.jpg",
      title: "נקיון כולל של הדירה",
      price: "100$",
      link: "/productdetails",
      productKey: 2,
    },
    {
      img: "/images/marketPlace/product3.jpg",
      title: "נקיון דירה עם חיות מחמד",
      price: "120$",
      link: "/productdetails",
      productKey: 3,
    },
    {
      img: "/images/marketPlace/product4.jpg",
      title: "פתרון בעיות חיווט",
      price: "150$",
      link: "/productdetails",
      productKey: 4,
    },
  ];

  return (
    <div className="list_box_area d-flex justify-content-between flex-row-reverse row gx-4">
      {ProductsListArr.map((el, i) => {
        return (
          <ProductsSquare
            key={i}
            img={el.img}
            title={el.title}
            price={el.price}
            link={el.link}
            productKey={el.productKey}
          />
        );
      })}
    </div>
  );
};

export default ProductsSquareList;
