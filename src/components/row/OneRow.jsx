import React, { Component } from 'react';
import styles from './row.css';

function OneRow(props) {
	return (
		<td className="aRow">
			<div>
				Time -
				{props.value}
			</div>
			<div>
				Temp -
				{props.airTemperature}
			</div>
			<div>
				Wind -
				{props.windSpeed}
			</div>
			<div>
				Clouds -
				{props.cloudCover}
			</div>
			<div>
				Condition -
				{props.conditionCode}
			</div>
		</td>
	)
}

export default OneRow;