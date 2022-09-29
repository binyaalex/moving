import Btn from "./Btn";

const BtnsList = (props) => {
  const btnsListArr = [
    {
      link: "/",
      text: "בית",
    },

    {
      link: "/transport",
      text: "הובלה",
    },
    {
      link: "/storage",
      text: "אחסנה",
    },
    {
      tel: "1-800-00-00-00",
      // text: "1-800-00-00-00",
    },

  ];

  return (
    <div className="navBtnsList navs">
      {btnsListArr.map((el, i) => {
        return (
          <Btn
            tel={el.tel}
            link={el.link}
            text={el.text}
            key={i}
            const={el.const}
            openSideBarComponent={props.openSideBarComponent}
            openMobileMenu={props.openMobileMenu}
            setOpenMobileMenu={props.setOpenMobileMenu}
            mobile={props.mobile}
          />
        );
      })}

    </div>
  );
};

export default BtnsList;
