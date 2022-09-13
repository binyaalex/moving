import './MyAdresses.css';
import Search from '../repeats/starSearch/Search'
import ListHeader from '../repeats/listHeader/ListHeader'
import MyAdressesSquare from "./MyAdressesSquare"
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import StarIcon from '@mui/icons-material/Star';

const MyAdresses = () => {

	const reportSquareArr = [
		{
			header: 'בקרה',
			text: 'החלפת נורות',
			hour: 'שני',
			price: `23.05`,
		},
		{
			header: 'החלפת כבל',
			text: 'דירה 151',
			hour: 'שישי',
			price: `27.05`,
		},
		{
			header: 'הוספת שקעים',
			text: 'דירה 207',
			hour: 'שני',
			price: `30.05`,
		},
		{
			header: 'בקרה',
			text: 'החלפת נורות ובדיקה מלאה',
			hour: 'שישי',
			price: `03.06`,
		},
	]

	const ListHeaderObj = {
		header: 'כתובת ראשית',
		headerSpan: 'שדרות רגר 8, באר שבע',
		par: 'מומחיות',
		parSpan: 'חשמל',
	}

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='השירותים שהוזמנו לכתובת' />
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
									<MyAdressesSquare
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

export default MyAdresses