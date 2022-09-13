import '../../hospitalStay/patient/staff/Staff.css';
import ToggleSquare from '../../regularPages/repeatsComponents/togglesquare/ToggleSquare.js';
import Head from '../../repeats/head/Head';
import Footer from '../../repeats/footer/Footer';


const SettingsNotifications = () => {

	const SettingsNotificationsArr = [
		{
			header: 'הפגישות שלי',
		},
		{
			header: 'ההריון שלי',
		},
		{
			header: 'הגוף שלי',
		},
		{
			header: 'תרופות וויטמנים',
		},
		{
			header: 'הודעות',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='הגדרת התראות' />
				<div className='staffPage'>
					<div className='staffSquaresDiv'>
						{
							SettingsNotificationsArr.map((el, i) => {
								return (
									<ToggleSquare header={el.header} key={i} />
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

export default SettingsNotifications