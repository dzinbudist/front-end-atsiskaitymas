import React, { Component } from 'react';
import styles from './tab.css';
import { Tab, Menu } from "semantic-ui-react";
import OneRow from '../row/OneRow';

function TabContent(props) {
	let productsComponents = [];

	if (props.valu != null)

		for (let i = 0; i < props.valu.length; i++) {
			let date = new Date(props.valu[i].forecastTimeUtc);
			let hours = date.getHours();
			productsComponents.push(
				<OneRow value={(hours + ':00')}
					airTemperature={props.valu[i].airTemperature}
					windSpeed={props.valu[i].windSpeed}
					cloudCover={props.valu[i].cloudCover}
					conditionCode={props.valu[i].conditionCode}
				/>)
		}

	return (
		<div className="table-responsive">
			<table className="aTable table table-bordered">
				<tbody>
					<tr>
						{productsComponents}
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default TabContent;