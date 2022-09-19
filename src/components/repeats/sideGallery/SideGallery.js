import './SideGallery.css'

const SideGallery = (props) => {
    return (
        <div className="sideGallery">
            <img className="galleryMainImg" src={props.mainImg}/>
            <div className='galleryHeader'>{props.header}</div>
            <div className="gallery">
                {props.galleryArr.map((el, i) => {
                    return (
                        <img src={el.img} key={i} />
                    )
                })}
            </div>
        </div>
    )
}

export default SideGallery