import { Link } from "react-router-dom";

const DetailSquare = ({img, info, descrip, icon, link}) => {	

	return (
		<Link to={link} className='detailSquare' >
			<div className='detailImgDiv' >
				{
					img ? <img className='detailImg' src={img} /> : icon 			
				}
			</div>
			<div className='detailTextDiv' >
				<h1 className='detailInfo' >{info}</h1>
				<h5 className='detailEdit' >{descrip}</h5>
			</div>
		</Link>
	)
}

export default DetailSquare