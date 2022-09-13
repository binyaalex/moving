const PaidServicesSqaure = ({header, text, hour, price, i}) => {

	const done = (e) => {
		const btn = e.target
		console.log(btn.style.color)
		if (btn.classList[1] === 'reportSquareBtnActive') {
			btn.classList.remove('reportSquareBtnActive')
		} else {
			btn.classList.add('reportSquareBtnActive')
		}
	}
	let btnClassName = 'reportSquareBtn'
	if (i===0) {
		btnClassName = 'reportSquareBtn reportSquareBtnActive'
	}

	return (
		<div className='reportSquare'>
			<div className='reportSquareTimeAndText'>
				<div className='procedursSquareDate'>
					<div className='procedursSquareDateDay'>{hour}</div>
					<div className='procedursSquareDatePrice'>{price}$</div>
				</div>
				<div className='procedursSquareTextDiv'>
					<div className='procedursSquareTextDivH'>{header}</div>
					<div className='procedursSquareTextDivP'>{text}</div>
				</div>
			</div>
			<button onClick={done} className={btnClassName} >בוצע</button>
		</div>
	)
}

export default PaidServicesSqaure