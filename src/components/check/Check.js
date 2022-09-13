import './Check.css';
import Search from '../repeats/starSearch/Search'
import ListHeader from '../repeats/listHeader/ListHeader'
import CheckSquare from "./CheckSquare"
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import review1 from "../../assets/images/reviewImg.png";
import StarIcon from '@mui/icons-material/Star';

const Check = () => {

	const reportSquareArr = [
		{
			header: 'נקיון כניסה',
			text: 'בוצע, 08:25, אין ביקורות',
			hour: 'שני',
			price: `23.05`,
			reviewsArr: [],
		},
		{
			header: 'נקיון כניסה',
			text: 'בוצע, 08:25, 2 ביקורות',
			hour: 'שישי',
			price: `27.05`,
			reviewsArr: [
				{
					writerName: 'אתי ליפשיץ',
					img: review1,
					date: '11 May 2022',
					rating: '5.0',
					text: 'עשתה עבודה מעולה, הכניסה נקייה ומצוחצחת!',
				},
				{
					writerName: 'אתי ליפשיץ',
					img: review1,
					date: '11 May 2022',
					rating: '5.0',
					text: 'עשתה עבודה מעולה, הכניסה נקייה ומצוחצחת!',
				},
			]
		},
		{
			header: 'נקיון כניסה',
			text: 'בוצע, 08:25, 1 ביקורות',
			hour: 'שני',
			price: `30.05`,
			reviewsArr: [
				{
					writerName: 'אתי ליפשיץ',
					img: review1,
					date: '11 May 2022',
					rating: '5.0',
					text: 'עשתה עבודה מעולה, הכניסה נקייה ומצוחצחת!',
				},
			],
		},
		{
			header: 'נקיון כניסה',
			text: 'בוצע, 08:25, אין ביקורות',
			hour: 'שישי',
			price: `03.06`,
			reviewsArr: [],
		},
	]

	const ListHeaderObj = {
		header: 'מנקה מומחית',
		headerSpan: 'יעל כהן',
		par: 'כתובת ראשית',
		parSpan: 'שדרות רגר 8',
	}

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='בקרה' />
				<div className='procedursPage reoprtPage'>
					<Search icon={<StarIcon className='searchStar' style={{ fontSize: '45px' }} />} />
					<ListHeader
						header={ListHeaderObj.header}
						headerSpan={ListHeaderObj.headerSpan}
						par={ListHeaderObj.par}
						parSpan={ListHeaderObj.parSpan}
					/>
					<div className='procedursSquaresDiv'>
						{
							reportSquareArr.map((el, i) => {
								return (
									<CheckSquare
										header={el.header}
										text={el.text}
										hour={el.hour}
										price={el.price}
										reviewsArr={el.reviewsArr}
										i={i}
										key={i}
									/>
								)
							})
						}
					</div>
				</div>
			</div>
			{/*       <Footer /> */}
		</div>
	)
}

export default Check