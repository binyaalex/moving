import '../../hospitalStay/patient/staff/Staff.css';
import './Favorites.css';
import OpenSquare from '../../regularPages/repeatsComponents/opensquare/OpenSquare';
import Head from '../../repeats/head/Head';
import Footer from '../../repeats/footer/Footer';


const Favorites = () => {

	const favoritesSquareArr = [
		{
			img: '/images/favorites/foods.jpg',
			header: '8 מזונות הנקה',
			text: '',
			link: '',
		},
		{
			img: '/images/favorites/carriage.jpg',
			header: 'עגלות תינוק',
			text: '',
			link: '',
		},
		{
			img: '/images/favorites/depression.jpg',
			header: 'דיכאון במהלך ...',
			text: '',
			link: '',
		},
		{
			img: '/images/favorites/ring.jpg',
			header: 'גלגל ים',
			text: '',
			link: '',
		},
		{
			img: '/images/favorites/yoga.jpg',
			header: 'יוגה לנשים בהריון',
			text: '',
			link: '',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='מועדפים' />
				<div className='staffPage favoritesPage'>
					<div className='staffSquaresDiv'>
						{
							favoritesSquareArr.map((el, i) => {
								return (
									<OpenSquare
										img={el.img}
										header={el.header}
										text={el.text}
										link={el.link}
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

export default Favorites