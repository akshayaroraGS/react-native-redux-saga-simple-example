import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import { FETCHING_DATA } from './constants';

const App = props => {
	const { container, text, button, buttonText, mainContent } = styles;

	return (
		<View style={container}>
			<Text style={text}>Redux Saga Examples</Text>
			<TouchableHighlight style={button} onPress={() => props.fetchData()}>
				<Text style={buttonText}>Load Data</Text>
			</TouchableHighlight>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				{props.products.isFetching && (
					<ActivityIndicator style={{ alignItems: 'center' }} size="large" color="#0000ff" />
				)}
				{props.products.data.length
					? props.products.data.map((person, i) => {
							return (
								<View
									key={i}
									style={{
										justifyContent: 'center',
										width: '100%',
										height: 50,
										backgroundColor: 'yellow',
										margin: 5,
										padding: 5
									}}
								>
									<Text>Name: {person.name}</Text>
									<Text>Price: {person.price}rs</Text>
								</View>
							);
					  })
					: null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 44,
		flex: 1
	},
	text: {
		textAlign: 'center'
	},
	button: {
		width: '100%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0b7eff',
		position: 'absolute',
		bottom: 0
	},
	buttonText: {
		color: 'white'
	}
});

//action
function fetchData() {
	return {
		type: FETCHING_DATA
	};
}

// connect implementation
function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => dispatch(fetchData())
	};
}

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
