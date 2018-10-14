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
	getActiveScents(state) {
		return state.activeScents;
	},
	getSelectedPreshave(state) {
		return state.selectedPreShave;
	}
};

export default getters;