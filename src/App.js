import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './stores';
import routes from './routes';

const RootStack = createStackNavigator(routes, {
	initialRouteName: 'Main',
});

export default function() {
	return (
		<Provider store={store}>
			<RootStack />
		</Provider>
	);
}
