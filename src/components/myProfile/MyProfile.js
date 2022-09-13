import './MyProfile.css';
import DetailsList from './DetailsList';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import profilePhoto from '../../assets/images/myProfile/profilePhoto.png'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const MyProfile = () => {

	const containerArr = [
		{
			img: profilePhoto,
			info: 'אתי ליפשיץ',
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
			descrip: 'שדרות רגר 8, באר שבע',
			link: '#',
		},
		{
			icon: <StarIcon className='detailImg' />,
			img: false,
			info: 'השירותים שהוזמנו',
			descrip: 'שדרות רגר 8, באר שבע',
			link: '/paidservices',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='הפרופיל שלי' />
				<div className='contactPage'>
					<DetailsList containerArr={containerArr} />
				</div>
			</div>
			{/* <Footer page='myprofile' /> */}
		</div>
	)
}

export default MyProfile
