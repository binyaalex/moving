import './BuildingCommitteeMemberList.css'
import Head from "../repeats/head/Head";
import Footer from "../repeats/footer/Footer";
import Search from "../repeats/starSearch/Search";
import OpenRound from "../repeats/opensquare/OpenRound";

import StarIcon from '@mui/icons-material/Star';

import eti from '../../assets/images/myProfile/profilePhoto.png'
import dani from "../../assets/images/review/review1.jpg";
import tal from "../../assets/images/review/review2.jpg";
import yonatan from "../../assets/images/review/review3.jpg";

const BuildingCommitteeMemberList = () => {

  const doctorsArr = [
    {
      img: eti,
      firstName: 'אתי ליפשיץ',
      position: "ראש ועד בית",
      link: '/memberaccount',
    },
    {
      img: dani,
      firstName: 'דני קורן',
      position: "סגן ראש ועד בית",
      link: '/memberaccount',
    },
    {
      img: tal,
      firstName: 'טל קרמר',
      position: "חברת ועד בית",
      link: '/memberaccount',
    },
    {
      img: yonatan,
      firstName: 'יונתן ספקטור',
      position: "חבר ועד בית",
      link: '/memberaccount',
    },
  ];

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="חברי ועד הבית" />
          <div className="doctorsPage buildingCommitteeMemberList">
            <Search icon={<StarIcon className='searchStar' style={{ fontSize: '45px' }} />} />

            <div className="staffSquaresDiv">
              {doctorsArr.map((el, i) => {
                return (
                  <OpenRound
                    key={i}
                    img={el.img}
                    firstName={el.firstName}
                    position={el.position}
                    link={el.link}
                    aboutLink='/memberaccount'
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/*       <Footer /> */}
      </div>
    </>
  );
};

export default BuildingCommitteeMemberList;