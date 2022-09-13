import './Review.css'

import StarIcon from '@mui/icons-material/Star';

const Review = ({writerName, date, rating, text, img }) => {
    return (
        <div className="service_box rating_box review">
            <div className="box_con review_box" id='review_box'>
                <div className="box_heading d-flex align-center justify-between">
                    <div>
                        <h4>{writerName}</h4>
                        <span className="star">
                            <StarIcon /> {rating}
                        </span>
                    </div>
                    <span>{date}</span>
                </div>
                <div className="price d-flex align-center justify-between">
                    <p>{text}</p>
                </div>
            </div>
            <div className="box_round_img">
                <img src={img} alt="Online" />
            </div>
        </div>
    )
}

export default Review