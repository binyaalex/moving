import StarIcon from '@mui/icons-material/Star';

const FiveStar = () => {
    const arr = [0,1,2,3,4]
    return (
        <>
            {
                arr.map((el, i) => {
                    return (
                        <StarIcon className="fa fa-star checked" />
                    )
                })    
            }      
        </>
    )
}

export default FiveStar