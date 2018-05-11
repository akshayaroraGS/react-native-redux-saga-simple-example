import React from 'react';
import { AppRegistry } from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

//reducers Implementation
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants';
const initialState = {
	data: [],
	dataFetched: false,
	isFetching: false,
	error: false
};

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_DATA:
			return {
				...state,
				data: [],
				isFetching: true
			};
		case FETCHING_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.data
			};
		case FETCHING_DATA_FAILURE:
			return {
				...state,
				isFetching: false,
				error: true
			};
		default:
			return state;
	}
}

//saga implementation
import dataSaga from './saga';
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
	const store = createStore(combineReducers({ products: dataReducer }), applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(dataSaga);
	return store;
}

//Main RN Component
import App from './App';

const MainApp = () => (
	<Provider store={configureStore()}>
		<App />
	</Provider>
);

AppRegistry.registerComponent('sagaExample', () => MainApp);
