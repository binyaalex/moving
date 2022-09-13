 const NotificationsSquare = ({img, massageBeforeBold, bold, massageAfterBold, date, btn, i}) => {
	const headerClassName = `NotificationsTextMassage NotificationsTextMassage${i}`

	const undisplay = (e) => {
		const notification = e.target.parentElement.parentElement.parentElement
		notification.style.display = 'none'
	}

	return (
		<section className='NotificationsSquare' >
			<div className='NotificationsImgDiv' >
				<img className='NotificationsImg' src={img} />
			</div>
			<div className='NotificationsTextDiv' >
				<h1 className={headerClassName} >
					{massageBeforeBold} 
					<span className='NotificationsTextMassageSpan'> {bold} </span>
					 {massageAfterBold}
				</h1>
				<div className='NotificationsDateAndBtn' >
					<div className='NotificationsTextDate' >{date}</div>
					<div onClick={undisplay} className='NotificationsBtn' >Ok</div>
				</div>
			</div>
		</section>
	)
}

export default NotificationsSquare