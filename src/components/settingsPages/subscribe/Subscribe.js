import '../../hospitalStay/patient/staff/Staff.css';
import { Link } from "react-router-dom"
import ToggleSquare from '../../regularPages/repeatsComponents/togglesquare/ToggleSquare.js';
import Head from '../../repeats/head/Head';
import Footer from '../../repeats/footer/Footer';


const Subscribe = () => {

	const subscribeSquareArr = [
		{
			header: 'בלוגים חדשים',
		},
		{
			header: 'חדשות בית החולים',
		},
		{
			header: 'מוצרים חדשים',
		},
		{
			header: 'הטבות מועדון חדשות',
		},
		{
			header: 'שירותים חדשים',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='עקבי אחר החדשות שלנו' />
				<div className='staffPage'>
					<div className='staffSquaresDiv'>
						{
							subscribeSquareArr.map((el, i) => {
								return (
									<ToggleSquare header={el.header} key={i} />
								)
							})
						}
						<div className='toggleSquare'>
							<Link className='' to='/tellus' >
								<div className='openSquareTextH' >ספרי לנו מה את אוהבת</div>
							</Link>
							<Link className='' to='/tellus' >
								<img className='arrow' src='/images/settings/arrow.png' />
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>

	)
}

export default Subscribe