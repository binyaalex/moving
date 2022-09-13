import './ToggleSquareImg.css';
import { Link } from "react-router-dom"

const ArrowSquare = ({header, img, link}) => {
	return (
		<div className='toggleSquare toggleSquareImgDiv'>
			<Link className='ImgAndH' to={link}>
				{/* <img className='toggleSquareImg' src={img} /> */}
				{img}
				<div className='openSquareTextH' >{header}</div>
			</Link>
			<Link className='' to={link} >
				<img className='arrow' src='/images/settings/arrow.png' />
			</Link>
		</div>
	)
}

export default ArrowSquare