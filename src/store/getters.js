let getters = {
	getLoaded(state) {
		return state.dataFetched;
	},
	getActiveComponent(state) {
		return state.activeComponent;
	},
	getLanguages(state) {
		return state.languages;
	},
	getMainProduct(state) {
		return state.mainProductId;
	},
	getActiveScents(state) {
		return state.activeScents;
	},
	getSelectedPreshave(state) {
		return state.selectedPreShave;
	},
	getSelectedShave(state) {
		return state.selectedShave;
	},
	getSelectedAfterShave(state) {
		return state.selectedAfterShave;
	},
	getPreShaveProducts(state) {
		return state.preShaveProducts.filter(product => -1 !== state.activeScents.indexOf(product.scent));
	},
	getShaveProducts(state) {
		return state.shaveProducts.filter(product => -1 !== state.activeScents.indexOf(product.scent));
	},
	getAfterShaveProducts(state) {
		return state.afterShaveProducts.filter(product => -1 !== state.activeScents.indexOf(product.scent));
	}
};

export default getters;