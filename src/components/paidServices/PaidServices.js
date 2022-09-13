import './PaidServices.css';
import Search from '../repeats/starSearch/Search'
import DayPicker from '../repeats/daypicker/DayPicker'
import PaidServicesSquare from "./PaidServicesSquare"
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import StarIcon from '@mui/icons-material/Star';

const PaidServices = () => {

	const reportSquareArr = [
		{
			header: 'החלפת כבל',
			text: 'שדרות רגר 8, דירה 101',
			hour: '08:00',
			price: `45`,
		},
		{
			header: 'הוספת שקעים',
			text: 'שדרות רגר 8, דירה 151',
			hour: '08:30',
			price: `70`,
		},
		{
			header: 'החלפת כבל',
			text: 'שדרות רגר 8, דירה 101',
			hour: '11:00',
			price: `45`,
		},
		{
			header: 'הוספת שקעים',
			text: 'שדרות רגר 8, דירה 151',
			hour: '16:00',
			price: `70`,
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='השירותים שהוזמנו' />
				<div className='procedursPage reoprtPage'>
					<Search icon={<StarIcon className='searchStar' style={{ fontSize: '45px' }} />} />
					<DayPicker />
					<div className='procedursSquaresDiv'>
						{
							reportSquareArr.map((el, i) => {
								return (
									<PaidServicesSquare
										header={el.header}
										text={el.text}
										hour={el.hour}
										price={el.price}
										i={i}
										key={i}
									/>
								)
							})
						}
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>

	)
}

export default PaidServices