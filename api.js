const products = [
	{ name: 'MacBook Pro', price: 55000 },
	{ name: 'MacBook Retina', price: 60000 },
	{ name: 'MacBook Air', price: 57000 },
	{ name: 'Iphone 6s', price: 30000 },
	{ name: 'Iphone 7', price: 35000 }
];

export default () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(products);
		}, 3000);
	});
};
