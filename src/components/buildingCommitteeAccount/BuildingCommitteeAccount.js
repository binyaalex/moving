import '../myProfile/MyProfile.css';
import DetailsList from '../myProfile/DetailsList';
import Head from '../repeats/head/Head';
import Footer from '../repeats/footer/Footer';

import building from '../../assets/images/buildingCommitteeAccount/building.jpg'
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';

const BuildingCommitteeAccount = () => {

	const containerArr = [
		{
			img: building,
			info: 'שדרות רגר 8, באר שבע',
			descrip: 'ערוך',
			link: '#',
		},
		{
			icon: <GroupIcon className='detailImg' />,
			img: false,
			info: 'חברי ועד הבית',
			descrip: 'אתי ליפשיץ, דני קורן, טל קר...',
			link: '/buildingcommitteememberlist',
		},
		{
			icon: <StarIcon className='detailImg' />,
			img: false,
			info: 'השירותים שהוזמנו',
			descrip: 'החלפת כבל, הוספת שקע...',
			link: '/paidservices',
		},
	]

	return (
		<div className='PageDad' >
			<div className='page' >
				<Head text='חשבון ועד בית' />
				<div className='contactPage'>
					<DetailsList containerArr={containerArr} />
				</div>
			</div>
			{/*       {/* <Footer /> */} */}
		</div>
	)
}

export default BuildingCommitteeAccount
