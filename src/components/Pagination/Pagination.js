import React from 'react';
import './Pagination.css' 

const Pagination = ({pageNumbers, getUserData, setCurrentPage, currentPage}) => { 
	return(
		<div>
			{
				pageNumbers.map((page, index) =>{
					if (currentPage === index+1) {
						return(
							<button onClick={() => {
								getUserData(page);
								setCurrentPage(page);
							}}
								className="page-btn highlight"
								key={index}
							>
								{page}
							</button>
						)
					}
					else{
						return(
							<button onClick={() => {
								getUserData(page);
								setCurrentPage(page);
							}}
								className="page-btn "
								key={index}
							>
								{page}
							</button>
						)
					}
				})
			}
		</div>
		)
}

export default Pagination;



				