import '../myProfile/MyProfile.css';
import DetailsList from '../myProfile/DetailsList';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import profilePhoto from "../../assets/images/review/review1.jpg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';

const MemberAccount = () => {

	const fontSize = '45px'

	const containerArr = [
		{
			img: profilePhoto,
			info: 'דני קורן',
			descrip: 'סגן ראש ועד בית',
			link: '#',
		},
		{
			icon: <LocationOnIcon className='detailImg' style={{ fontSize: fontSize }} />,
			img: false,
			info: 'כתובת',
			descrip: 'שדרות רגר 8, באר שבע',
			link: '#',
		},
		{
			icon: <PhoneEnabledIcon className='detailImg' style={{ fontSize: fontSize }} />,
			img: false,
			info: 'טלפון',
			descrip: '052-345-6789',
			link: '#',
		},
		{
			icon: <EmailIcon className='detailImg' style={{ fontSize: fontSize }} />,
			img: false,
			info: 'אימייל',
			descrip: 'danikoren@gmail.com',
			link: '#',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='דני קורן' />
				<div className='contactPage'>
					<DetailsList containerArr={containerArr} />
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	)
}

export default MemberAccount
