import './Opening.css';
import { Link } from "react-router-dom"

import doubleArrow from "../../assets/images/opening/doubleArrow.png";
import blind from "../../assets/images/opening/blind.png";

const Login = () => {
	return (
		<div className='PageDad' >
			<div className='page openingPage' >
				<div className='firstPage loginPage'>
					<div className='loginArrowDiv'>
						<Link to='/first'>
							<img className='loginArrow' src='/images/opening/rightArrow.png' />
						</Link>
					</div>
					<div className='loginHDiv'>
						<div className='loginH'>ברוכה הבאה, <br/>שרה</div>
					</div>
					<div className='firstPageContent loginPageContent' >
						<div className='loginPageInputsAndBtns' >
							<div className='loginPageInputs' >
								<div className='emailDiv' >
									<input type='email' className='email' placeholder='אימייל'/>
									<img src={doubleArrow} />
								</div>
								<div className='passwordDiv' >
									<input type='password' className='password' placeholder='סיסמה' />
									<img src={blind} />
								</div>
								<div className='forget'>שכחת את הסיסמה?</div>
							</div>
							<div className='firstPageBtns loginPageBtns' >
								<Link to='/'>
									<div className='loginBtn loginLoginBtn'>התחברי</div>
								</Link>
								<div className='orDiv' >
									<div className='or'>או</div>
								</div>
								<Link to='/signin'>
									<div className='signinBtn loginSigninBtn'>הרשמי</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login