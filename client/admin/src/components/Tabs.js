import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs as TabsMUI } from '@mui/material';

export const Tabs = (props) => {

	const location = useLocation();
	const currentPath = location.pathname;

	// Убираем префикс '/admin' из текущего пути для корректной работы с tab'ами
	const cleanPath = currentPath.replace('/admin', '');

	return (
		<div className="window">
			<TabsMUI value={cleanPath} variant="fullWidth">
				<Tab label="Brokers" value="/brokers" component={Link} to="/brokers" />
				<Tab label="Stocks" value="/stocks" component={Link} to="/stocks" />
				<Tab label="Trade" value="/trade" component={Link} to="/trade" />
			</TabsMUI>
			{props.children}
		</div>
	);
};
