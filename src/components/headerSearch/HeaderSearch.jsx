import React, { Component } from 'react';
import styles from './header.css';
import { Input, Dropdown } from "semantic-ui-react";

function HeaderSearch(props) {
	let ratesArray = [];

	if (props.items != null)
		props.items.forEach((anItem) => {
			let obj = { key: anItem.code, text: anItem.name, value: anItem.name }
			ratesArray.push(obj);
		});

	console.log(props.items);

	return (
		<header className="super">
			<div className="container-fluid background">
				<div className="row justify-content-center">
					<h1 className="display-4 text-left text-white">
						WEATHER
				</h1>
					<div className="col">
						<Dropdown
							className="search"
							placeholder="Search.."
							className="slectCity"
							search
							fluid
							selection
							options={ratesArray}
							onChange={(e, optionsObj) => props.onChange(optionsObj.value)}
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

{/* <Input
className="search"
fluid
icon='search'
placeholder='Search...' /> 

							// options={props.value}
							// defaultValue={props.sel.value}
							// onChange={(e, optionsObj) => props.afunc(optionsObj.value)}

*/}
export default HeaderSearch;