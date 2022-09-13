import './Settings.css';
import ToggleSquareImg from '../../repeats/togglesquare/ToggleSquareImg.js';
import ArrowSquare from '../../repeats/togglesquare/ArrowSquare.js';
import Head from '../../repeats/head/Head';
import Footer from '../../repeats/footer/Footer';

// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';
import LockIcon from '@mui/icons-material/Lock';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const Settings = () => {

	const settingsTogglesArr = [
		{
			header: 'התראות',
			img: <NotificationsIcon className='toggleSquareImg' />,
			link: '/settingsnotifications'
		},
		// {
		// 	header: 'עקבי אחר החדשות שלנו',
		// 	img: '/images/settings/news.png',
		// 	link: '/subscribe'
		// },
	]

	const settingsArrowArr = [
		{
			header: 'תנאים והגבלות',
			img: <DescriptionIcon className='toggleSquareImg' />,
			link: '#'
		},
		{
			header: 'פרטיות',
			img: <LockIcon className='toggleSquareImg' />,
			link: '#'
		},
		// {
		// 	header: 'מועדפים',
		// 	img: <FavoriteIcon className='toggleSquareImg' />,
		// 	link: '/favorites'
		// },
		{
			header: 'עזרה',
			img: <HelpIcon className='toggleSquareImg' />,
			link: '#'
		},
		{
			header: 'יציאה',
			img: <LogoutIcon className='toggleSquareImg' />,
			link: '#'
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				{/* <MobileView> */}
				<Head text='הגדרות ' />
				{/* </MobileView> */}
				<div className='staffPage'>
					<div className='staffSquaresDiv'>
						{
							settingsTogglesArr.map((el, i) => {
								return (
									<ToggleSquareImg
										header={el.header}
										img={el.img}
										link={el.link}
										key={i}
									/>
								)
							})
						}
						{
							settingsArrowArr.map((el, i) => {
								return (
									<ArrowSquare
										header={el.header}
										img={el.img}
										link={el.link}
										key={i}
									/>
								)
							})
						}
					</div>
				</div>
			</div>
			{/* <MobileView> */}
			{/* <Footer /> */}
			{/* </MobileView> */}
		</div>

	)
}

export default Settings