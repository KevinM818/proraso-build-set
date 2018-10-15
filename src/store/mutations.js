let mutations = {
	setComponent(state, payload) {
		state.activeComponent = payload;
	},
	setLanguages(state, payload) {
		state.languages = payload;
	},
	setScents(state, payload) {
		state.allScents = payload;
	},
	setActiveScents(state, payload) {
		state.activeScents = payload;
	},
	setSelectedPreShave(state, payload) {
		state.selectedPreShave = payload;
	},
	setSelectedShave(state, payload) {
		state.selectedShave = payload;
	},
	setSelectedAfterShave(state, payload) {
		state.selectedAfterShave = payload;
	},
	sortProducts(state, payload) {
		if (payload.product_type == 'Set') {
			return state.mainProductId = payload.variants[0].id;
		}

		let product = {
			image: payload.images[0].src,
			type: payload.product_type,
			scent: payload.tags,
			title: payload.title,
			id: payload.variants[0].id,
			price: payload.variants[0].price
		};

		product.scent = product.scent.filter(tag => -1 !== state.allScents.indexOf(tag.toLowerCase()))[0];

		switch(product.type) {
			case 'Pre-Shave':
				state.preShaveProducts.push(product);
				break;
			case 'Shave':
				state.shaveProducts.push(product);
				break;
			case 'Aftershave':
				state.afterShaveProducts.push(product);
				break;
		}
		state.dataFetched = true;
	}
};

export default mutations;