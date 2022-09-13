import DetailSquare from './DetailSquare';

const DetailsList = ({containerArr}) => {

	return (
		<main className='detailsList' >
			{
				containerArr.map((el, i) => {
					return (
						<DetailSquare
							img={el.img}
							icon={el.icon}
							info={el.info}
							descrip={el.descrip}
							link={el.link}
							key={i}
						/> 
					)
				})
			}
		</main>
	)
}

export default DetailsList