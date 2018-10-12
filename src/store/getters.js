let getters = {
	getLoaded(state) {
		return state.dataFetched;
	},
	getActiveComponent(state) {
		return state.activeComponent;
	},
	getLanguages(state) {
		return state.languages;
	}
};

export default getters;