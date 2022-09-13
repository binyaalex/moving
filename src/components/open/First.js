import './Opening.css';
import { Link } from "react-router-dom";

const First = () => {
	return (
		<div className='PageDad' >
			<div className='openingPage page' >
				<div className='firstPage'>
					<div className='firstPageContent' >
						<div className='firstPageBtns' >
							<Link to='/login'>
								<div className='loginBtn'>התחברי</div>
							</Link>
							<Link to='/signup'>
								<div className='signinBtn'>הרשמי</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default First