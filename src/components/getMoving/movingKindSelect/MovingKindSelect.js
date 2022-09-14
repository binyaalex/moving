import React, { useEffect } from 'react';
import PregnancySquare from './pregnancySquare/PregnancySquare';
import Head from '../../repeats/head/Head';

import oneRoomApartment from '../../../assets/images/getMoving/oneRoomApartment.jpg'
import apartment from '../../../assets/images/getMoving/apartment.jpg'
import office from '../../../assets/images/getMoving/office.jpg'

const MovingKindSelect = () => {

	const pregnancyArr = [
		{
			img: oneRoomApartment,
			text: "הובלת פריטים בודדים",
			link: "/singleproducts",
		},
		{
			img: apartment,
			text: "הובלת תכולת דירות בתים",
			link: null,
		},
		{
			img: office,
			text: "הובלות משרדים/מפעלים",
			link: "/factoryoroffice",
		}
	];

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='בחירת סוג הובלה' />
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

export default MovingKindSelect