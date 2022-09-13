import './Menu.css';
import { Link } from "react-router-dom";

const Menu = ({display}) => {


	const menuItemsArr = [
		{
			link: '/myprofile',
			text: 'הפרופיל שלי',
			img: '/images/head/menu/account.png',
		},
		{
			link: '/myadresses',
			text: 'השירותים שלי',
			img: '/images/head/menu/pregnancy.png',
		},
		{
			link: '/PaidServices',
			text: 'שירותים שהוזמנו',
			img: '/images/head/menu/location.png',
		},
		{
			link: '#',
			text: `הצ'אט של הבית`,
			img: '/images/head/menu/group_chat.png',
		},
		{
			link: '#',
			text: `כל הצ'אט`,
			img: '/images/head/menu/chat.png',
		},
		{
			link: '/settings',
			text: 'הגדרות',
			img: '/images/head/menu/settings.png',
		},
		{
			link: '#',
			text: 'יציאה',
			img: '/images/head/menu/out.png',
		},
		{
			link: '/aboutspesialist',
			text: 'דף מנקה',
			img: '',
		},
		{
			link: '/services',
			text: 'שירותים',
			img: '',
		},
		{
			link: '/specialists',
			text: 'מומחים',
			img: '',
		},
		{
			link: '/appointment',
			text: 'הזמנה',
			img: '',
		},
		{
			link: '/entrancecleaninghistory',
			text: 'נקיון כניסה',
			img: '',
		},
		{
			link: '/marketplace',
			text: 'מרכז מסחרי',
			img: '',
		},
		{
			link: '/productdetails',
			text: 'נקיון יסודי',
			img: '',
		},
		{
			link: '/specialistAccount',
			text: 'חשבון מומחה',
			img: '',
		},
		{
			link: '/manageraccount',
			text: 'חשבון מנהל',
			img: '',
		},
		{
			link: '/buildingcommitteeaccount',
			text: 'חשבון ועד בית',
			img: '',
		},
		{
			link: '/memberaccount',
			text: 'חשבון חבר ועד בית',
			img: '',
		},
		{
			link: '/buildingcommitteememberlist',
			text: 'חברי ועד הבית',
			img: '',
		},
		{
			link: '/check',
			text: 'בקרה',
			img: '',
		},
		{
			link: '/confirm',
			text: 'אישור הזמנה',
			img: '',
		},
		{
			link: '/notifications',
			text: 'התראות',
			img: '',
		},
		{
			link: '/bills',
			text: 'עגלת קניות',
			img: '',
		},
		{
			link: '/paynow',
			text: 'תשלום',
			img: '',
		},
		{
			link: '/addcard',
			text: 'הוספת כרטיס',
			img: '',
		},
		{
			link: '/paymentsuccess',
			text: 'תשלום בוצע',
			img: '',
		},
	]

	return (
		<div className='mainList' >
			{
				menuItemsArr.map((el, i) => {
					return (
						<Link onClick={() => display('.menu')} className='menuItem' to={el.link} key={i} >
							<div className='menuItemIconDiv' >
								<img className='menuItemIcon' src={el.img} />
							</div>
							<h1 className='menuItemHeader' >{el.text}</h1>
						</Link>
					)
				})
			}
			
		</div>
	)
}

export default Menu