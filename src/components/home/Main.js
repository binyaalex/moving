const Main = (props) => {
    return (
        <div className="homeMain">
            <div className="homeMainH">
                !קבל עכשיו הצעה להובלה    
            </div>
            <div className="homeMainBtn"
              onClick={() => {
                console.log(props.openSideBarComponent)
                props.openSideBarComponent("getmoving");
              }}
            >
                התחל
            </div>
        </div>
    )
}

export default Main