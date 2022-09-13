import Review from "../repeats/review/Review"

const CheckSquare = ({header, text, hour, price, reviewsArr, i}) => {

	const reviewsSwitch = (e) => {
		const review = e.target.parentElement.nextElementSibling
		const reviewCheck = e.target.parentElement.nextElementSibling.firstChild.firstChild.firstChild
		if (reviewCheck !== null) {
			if (review.style.display !== 'block') {
				review.style.display = 'block'
			} else {
				review.style.display = 'none'
			}				
		}
	}

	let btnClassName = 'reportSquareBtn'
	if (i===2 || i===1) {
		btnClassName = 'reportSquareBtn reportSquareBtnActive'
	}

	return (
		<>
			<div className='reportSquare'>
				<div className='reportSquareTimeAndText'>
					<div className='procedursSquareDate'>
						<div className='procedursSquareDateDay'>{hour}</div>
						<div className='procedursSquareDateDate'>{price}</div>
					</div>
					<div className='procedursSquareTextDiv'>
						<div className='procedursSquareTextDivH'>{header}</div>
						<div className='procedursSquareTextDivP'>{text}</div>
					</div>
				</div>
				<button onClick={reviewsSwitch} className={btnClassName} >ביקורות</button>
			</div>
			<div className="review_rating_sec">
				<div className="container">
					<div className="service_box_area">
						{
							reviewsArr.map((el, i) => {
								return (
									<Review
										writerName={el.writerName}
										text={el.text}
										rating={el.rating}
										img={el.img}
										date={el.date}
										key={i} 
									/> 
								)
							})
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default CheckSquare