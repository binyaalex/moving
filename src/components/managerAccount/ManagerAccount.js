import '../myProfile/MyProfile.css';
import DetailsList from '../myProfile/DetailsList';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import profilePhoto from '../../assets/images/managerAccount/profilePhoto.png'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ManagerAccount = () => {

	const containerArr = [
		{
			img: profilePhoto,
			info: 'עדי מזרחי',
			descrip: 'ערוך',
			link: '#',
		},
		{
			icon: <PersonIcon className='detailImg' />,
			img: false,
			info: 'פרטי התקשרות',
			descrip: 'שם, פלאפון, אימייל',
			link: '#',
		},
		{
			icon: <LocationOnIcon className='detailImg' />,
			img: false,
			info: 'כתובת',
			descrip: 'שדרות רגר 101, באר שבע',
			link: '#',
		},
		{
			icon: <StarIcon className='detailImg' />,
			img: false,
			info: 'המומחים שלי',
			descrip: '12 מומחים',
			link: '#',
		},
		{
			icon: <CheckCircleIcon className='detailImg' />,
			img: false,
			info: 'רשימת בקרה',
			descrip: 'לו"ז, ביקורות ועוד',
			link: '#',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='חשבון מנהל' />
				<div className='contactPage'>
					<DetailsList containerArr={containerArr} />
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	)
}

export default ManagerAccount
