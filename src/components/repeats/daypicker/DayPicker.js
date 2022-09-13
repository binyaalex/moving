import './DayPicker.css';

const DayPicker = () => {
	return (
		<div className='dayPicker'>
			<input className='dayPickerInput' list="browsers" name="browser" id="browser" placeholder="ראשון"/>
			<datalist id="browsers">
				<option value="ראשון"/>
				<option value="שני"/>
				<option value="שלישי"/>
				<option value="רביעי"/>
				<option value="חמישי"/>
				<option value="שישי"/>
				<option value="שבת"/>
			</datalist>
		</div>
	)
}

export default DayPicker