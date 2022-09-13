import './ToggleSquareImg.css';
import './ToggleSquare.css';
import { Link } from "react-router-dom"

// import Icon from '@material-ui/core/Icon';

const ToggleSquareImg = ({header, img, link}) => {
	return (
		<div className='toggleSquare toggleSquareImgDiv'>
			<Link className='ImgAndH' to={link}>
				{img}
				<div className='openSquareTextH' >{header}</div>
			</Link>
			<label className="switch">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		</div>
	)
}

export default ToggleSquareImg