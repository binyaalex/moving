import './Pregnancy.css';
import React, { useEffect } from 'react';
import PregnancySquare from './pregnancySquare/PregnancySquare';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const ServiceList = () => {

	const pregnancyArr = [
		{
			img: '/images/serviceList/clean.jpg',
			text: 'נקיון כניסה',
			link: '/entrancecleaninghistory',
		},
		{
			img: '/images/serviceList/elevator.jpg',
			text: 'תחזוקת מעליות',
			link: '/entrancecleaninghistory',
		},
		{
			img: '/images/serviceList/garbage.jpg',
			text: 'פינוי זבל',
			link: '/entrancecleaninghistory',
		},
		{
			img: '/images/serviceList/security.jpg',
			text: 'אבטחה',
			link: '/entrancecleaninghistory',
		},
		// {
		// 	img: '/images/serviceList/transport.jpg',
		// 	text: "הובלות",
		// 	link: "/providers",
		// },
		{
			img: '/images/serviceList/repair.jpg',
			text: 'שיפוץ',
			link: '/entrancecleaninghistory',
		},
		{
			img: '/images/serviceList/electric.jpg',
			text: 'חשמל',
			link: '/entrancecleaninghistory',
		},
		{
			img: '/images/serviceList/plumbing.jpg',
			text: 'אינסטלציה',
			link: '/entrancecleaninghistory',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='השירותים שלי' />
				<main className='pregnancyPage' >
					{
						pregnancyArr.map((el, i) => {
							return (
								<PregnancySquare img={el.img} text={el.text} link={el.link} key={i} />
							)
						})
					}
				</main>
			</div>
		</div>
	)
}

export default ServiceList