import React from 'react';

const SearchBox = ({searchChange}) =>{
	return (
		<div className='pa2 tc'>
			<input className= ' tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'
			type ='search' 
			placeholder = 'search robots' 

			onChange = {searchChange} 
			//Event reads any changes. Calls function SearchChange from App.js. The property associated with Searchbox
			/>
			
		</div>
	);
}


export default SearchBox;