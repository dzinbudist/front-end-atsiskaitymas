import React, { Component } from 'react';
import styles from './tabs.css';
import SingleTabs from '../tab/SingleTabs';
import { Tab, Menu } from "semantic-ui-react";

function TabsBar(props) {
	const panes = [];
	const today = [];
	const tomorrow = [];
	const tomorrowPlus = [];

	if (props.value != null) {

		let date = new Date(props.value.forecastTimestamps[0].forecastTimeUtc);
		let day = date.getDate();
		var res = date.toISOString().slice(0, 10).replace(/-/g, ".");

		props.value.forecastTimestamps.forEach((anItem) => {
			let aTempDate = new Date(anItem.forecastTimeUtc);
			if (aTempDate.getDate() == day) {
				today.push(anItem);
			}
			else if (aTempDate.getDate() == (day + 1)) {
				tomorrow.push(anItem);
			}
			else if (aTempDate.getDate() == (day + 2)) {
				tomorrowPlus.push(anItem);
			}
		});

		//console.log(tomorrowPlus);
		//props.value.forecastTimestamps
		panes.push({ menuItem: res, render: () => <Tab.Pane><SingleTabs valu={today} rangeStart={0} rangeEnd={24} /></Tab.Pane> },
			{ menuItem: 'Tomorrow', render: () => <Tab.Pane><SingleTabs valu={tomorrow} rangeStart={24} rangeEnd={48} /></Tab.Pane> },
			{ menuItem: 'Day after tomorrow', render: () => <Tab.Pane><SingleTabs valu={tomorrowPlus} rangeStart={48} rangeEnd={72} /></Tab.Pane> })
	}
	else {
		panes.push({ menuItem: 'Today', render: () => <Tab.Pane><SingleTabs value={'empty'} /></Tab.Pane> },
			{ menuItem: 'Tomorrow', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
			{ menuItem: 'Day after tomorrow', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> })
	}

	//	if (props.value != null)
	//	console.log(props.value.forecastType);



	return (
		<main className="super">
			<div className="container-fluid">
				<div className="row justify-content-left controledWidth">
					<h2 className="text-white miestas col-1">Kaunas</h2>
					<div className="align-middle col-11">
						<div className="addLabel"> <i className="fas fa-plus-square text-white"></i><span className="text-white">Add to favorites</span></div>
					</div>
				</div>
				<div className="tabs">
					<Tab panes={panes} />
				</div>
			</div>
		</main>
	)
}

export default TabsBar;