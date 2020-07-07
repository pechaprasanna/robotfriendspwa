import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return Object.keys(robots).length>0 ?(
	<div>
	{
		robots.map((user, i) => {
			return(
				<Card 
					key={robots[i].id}
		     		id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}/>
			);
		})
	}
	</div>
	): <h3>No Results</h3>;
}

export default CardList;