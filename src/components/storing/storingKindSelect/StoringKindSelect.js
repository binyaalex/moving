import React, { useEffect } from 'react';
import PregnancySquare from '../../servicesList/pregnancySquare/PregnancySquare';
import Head from '../../repeats/head/Head';
import SpecialistsList from '../../getMoving/selectMovingCategory/specialistsList/SpecialistsList';

import oneRoomApartment from '../../../assets/images/getMoving/oneRoomApartment.jpg'
import office from '../../../assets/images/getMoving/office.jpg'

import insure from "../../../assets/images/storing/insure.jpg";
import pest from "../../../assets/images/storing/pest.jpg";
import ac from "../../../assets/images/storing/ac.jpg";
import fire from "../../../assets/images/storing/fire.png";
import secure from "../../../assets/images/storing/secure.jpg";
import service from "../../../assets/images/storing/service.jpg";

import ChosenItem from "../../getMoving/pickItem/ChosenItem";

const StoringKindSelect = () => {

	const pregnancyArr = [
		{
			img: oneRoomApartment,
			text: "תכולת דירה",
			link: null,
		},
		{
			img: office,
			text: "אחסון עסקי",
			link: "/businessstoring",
		},
	];

	const whyArr = [
		{
			img: insure,
			title: "ביטוח מלא",
		},
		{
			img: pest,
			title: "ללא מזיקים",
		},
		{
			img: ac,
			title: "ממוזג",
		},
		{
			img: fire,
			title: "מיגון אש",
		},
		{
			img: secure,
			title: "אבטחה 24/7",
		},
		{
			img: service,
			title: "שירות מצוין",
		},
	];
	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='בחירת אחסנה' />
				<main className="homePage rtl office whereStoring add_card_pages">
					<div className='why' >
						<div className="storingType_h1_wrapper">
							<h1 className="storingType_h1 storingType_h1"> למה לאחסן אצלנו?</h1>
						</div>

						<section className="paidServicesArea">
							<div className="paidServiceSqaureList">
								{/* {whyArr.map((el, i) => {
									return ( */}
								<ChosenItem paidServiceArr={whyArr} />
								{/* );
								})} */}
							</div>
						</section>

					</div>

					<div className="storingType_h1_wrapper">
						<SpecialistsList />
					</div>
					{/* <div className="add_card_area">
						<div className="add_card_text_area">
							<div className="add_card_name">
								<h1 className="add_card_name_h1 whereStoring_h1"> אזור אחסנה </h1>
								<select name="" id="" className="select_address_input">
									<option selected>בחר</option>
									<option value="center">מרכז</option>
									<option value="sharon">שרון</option>
									<option value="north sharon">צפון השרון</option>
									<option value="north">צפון</option>
									<option value="shfela">שפלה</option>
									<option value="south">דרום</option>
									<option value="jerusalem">ירושלים והסביבה</option>
								</select>
							</div>
						</div>
					</div> */}

					<div className='pregnancyPage' >
						<div className="storingType_h1_wrapper">
							<h1 className="storingType_h1 storingType_h1"> סוג אחסנה </h1>
						</div>
						{
							pregnancyArr.map((el, i) => {
								return (
									<PregnancySquare img={el.img} text={el.text} link={el.link} key={i} storing={true} />
								)
							})
						}
					</div>
				</main>

			</div>
		</div>
	)
}

export default StoringKindSelect