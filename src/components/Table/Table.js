import React from 'react';
import Modal from '../Modal/Modal'
import './Table.css';

const Table = ({Users}) => { 
	const modalProps = {triggerText: 'More Details'};
	return(
		   <table>
			  <caption>Userlist.io</caption>
			  <thead>
			    <tr>
			      <th scope="col">Avatar</th>
			      <th scope="col">Name</th>
			      <th scope="col">Action</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{
			  		Users.map((user, index) => {
						return(
							<tr key={index}>
  					        	<td ><img src={user.avatar} /></td> 
  					        	<td className="table-content" >{user.first_name}</td>
  					        	<td ><Modal modalProps={modalProps} modalContent={user} /></td>
		            		</tr>
						)
					})
				}
			  </tbody>
			</table>
		)
}

export default Table;

