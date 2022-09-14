import './Head.css';
import React, { useEffect } from 'react';
// import Menu from '../menu/Menu'
// import HeadNotifications from '../../notificationsPages/headNotifications/HeadNotifications'

import menu from '../../../assets/images/head/menu.png'
import esc from '../../../assets/images/head/esc.png'
import bell from '../../../assets/images/head/bell1.png'
import CircleIcon from '@mui/icons-material/Circle';

const Head = ({ text }) => {

	// const display = (className) => {
	// 	const item = document.querySelector(className)
	// 	if (item.style.display === 'block') {
	// 		item.style.display = 'none';
	// 	} else {
	// 		item.style.display = 'block';
	// 	}
	// 	const headNotifications = document.querySelector('.headNotifications')
	// 	if (className === '.menu') {
	// 		headNotifications.style.display = 'none'
	// 	}
	// }

	// const changeHeadNotPosition = () => {
	// 	const head = document.querySelector('.head')
	// 	 const headNotifications = document.querySelector('.headNotifications')
	// 	if (head !== null) {
	// 		let rightPosition = head.getBoundingClientRect().y + 38
	// 		headNotifications.style.top = `${rightPosition}px`
	// 	}
	// }

	// useEffect(() => {
	// 	changeHeadNotPosition()
	// 	document.addEventListener("scroll", changeHeadNotPosition);
	// }, []);

	return (
		<>
			<div className='head' >
				<img
					// onClick={() => display('.menu')}
					className='menuIcon'
					src={menu}
					width='19px'
				/>
				<div className='headHeader' >{text}</div>
				<div className='bellAndCircle'>
					<img
						// onClick={() => display('.headNotifications')}
						className='bell'
						src={bell}
					/>
					<CircleIcon className='bellCircle' />
				</div>
			</div>
			<div className='menu' >
				<img
					// onClick={() => display('.menu')}
					className='menuEsc'
					src={esc}
				/>
				{/* <Menu display={display} /> */}
			</div>
			{/* <HeadNotifications /> */}
		</>
	)
}

export default Head