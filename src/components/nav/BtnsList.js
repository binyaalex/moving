import Btn from "./Btn";

const BtnsList = (props) => {
  const btnsListArr = [
    {
      link: "/",
      text: "בית",
    },
    {
      link: "#",
      text: "יצירת קשר",
    },
    {
      link: "/transport",
      text: "הובלה",
    },
    {
      link: "/storage",
      text: "אחסנה",
    },


  ];

  return (
    <div className="navBtnsList navs">
      {btnsListArr.map((el, i) => {
        return (
          <Btn
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
