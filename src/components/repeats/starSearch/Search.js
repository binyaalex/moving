import './Search.css';

import SearchIcon from '@mui/icons-material/Search';

const Search = ({icon}) => {
	return (
		<div className='SearchDiv' >
			<div className='Search' >
				<SearchIcon className='SearchImg' />
				{/* <img className='SearchImg' src='/images/search/search.png' /> */}
				<input placeholder='חפש שם' type='search' className='SearchInput' />
			</div>
			{icon}
			{/* <img className='searchStar' src={icon} /> */}
		</div>
	)
}

export default Search