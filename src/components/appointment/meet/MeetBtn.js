const MeetBtn = ({text}) => {

	const pick = (e) => {
		const choosen = e.target
		const options = document.querySelectorAll('.timeSelectorOption')
		for (let i = 0; i < options.length; i++) {
			options[i].classList.remove('choosen')
		}
		choosen.classList.add('choosen')
	}

	return (
		<div onClick={pick} className="timeSelectorOption col-4">
            {text}
        </div>
	)
}

export default MeetBtn