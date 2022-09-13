import FiveStar from './FiveStar'

const StarRate = () => {
    const arr = [0,1,2,3,4]
    return (
        <>
            <div className="productdetail_card">
                <div className="productdetail_card_div">
                    <p className="productdetail_card_text">8.0</p>
                    <p className="productdetail_card_subtext">מתוך 10</p>
                </div>
            </div>

            <div className="productdetail_rating">
                <h5>ביקורות</h5>
                <div className="productdetail_star_list">
                    {
                        arr.map((el, i) => {
                            return (
                                <div className="starsAndBar" key={i}>
                                    <div className="ratingimg" ></div>
                                    <FiveStar />
                                    <br/>
                                </div>
                            )
                        })
                    }    
                    <p className="productdetail_rating_p">248 ביקורות</p>
                </div>
            </div>
        </>
    )
}

export default StarRate