import React from 'react';

const Navbar = ({totalCount}) => {
	return (
		<nav className="navbar navbar-light bg-light">
		  <a className="navbar-brand" href="#">
			Navbar{' '}
			<span className="badge badge-pill badge-primary">{totalCount}</span>
			</a>
	  </nav>  
	);
}
 
export default Navbar;