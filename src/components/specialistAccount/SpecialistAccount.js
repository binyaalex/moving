import '../myProfile/MyProfile.css';
import DetailsList from '../myProfile/DetailsList';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import profilePhoto from '../../assets/images/specialistAccount/profilePhoto.png'
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const SpecialistAccount = () => {

	const containerArr = [
		{
			img: profilePhoto,
			info: 'אבי דוידוף',
			descrip: 'ערוך',
			link: '#',
		},
		{
			icon: <PersonIcon className='detailImg' />,
			img: false,
			info: 'חשמלאי',
			descrip: 'שם, פלאפון, אימייל',
			link: '#',
		},
		{
			icon: <LocationOnIcon className='detailImg' />,
			img: false,
			info: 'כתובת',
			descrip: 'שדרות רגר 131, באר שבע',
			link: '/myadresses',
		},
		{
			icon: <StarIcon className='detailImg' />,
			img: false,
			info: 'השירותים שלי',
			descrip: 'מחיר ולו"ז',
			link: '/paidservices',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='חשבון מומחה' />
				<div className='contactPage'>
					<DetailsList containerArr={containerArr} />
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	)
}

export default SpecialistAccount
