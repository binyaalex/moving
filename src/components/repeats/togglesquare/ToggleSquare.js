import './ToggleSquare.css';

const ToggleSquare = ({header}) => {
	return (
		<div className='toggleSquare'>
			<div className='openSquareTextH' >{header}</div>
			<label className="switch">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		</div>
	)
}

export default ToggleSquare