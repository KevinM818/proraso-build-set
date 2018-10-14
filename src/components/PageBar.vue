<template>
	<div class="PageBar">
		<button class="PageBar__step" :class="getActiveScents.length === 2 ? 'completeStep' : getActiveComponent === 'SelectScent' ? 'activeStep' : '' " @click="$store.commit('setComponent','SelectScent')">
			<div class="circle">
				<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.77734 10.5184L7.23641 15.715L21.7939 1.85742" stroke="white" stroke-width="3.07947"/>
				</svg>
			</div>
			<span>Scent</span>
		</button>
		<button class="PageBar__step" :class="getSelectedPreshave ? 'completeStep' : getActiveComponent === 'SelectPreShave' ? 'activeStep' : '' " @click="$store.commit('setComponent','SelectPreShave')" :disabled="getActiveScents.length < 2">
			<div class="circle">
				<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.77734 10.5184L7.23641 15.715L21.7939 1.85742" stroke="white" stroke-width="3.07947"/>
				</svg>
			</div>
			<span>Pre-Shave</span>
		</button>
		<button class="PageBar__step">
			<div class="circle">
				<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.77734 10.5184L7.23641 15.715L21.7939 1.85742" stroke="white" stroke-width="3.07947"/>
				</svg>
			</div>
			<span>Shave</span>
		</button>
		<button class="PageBar__step">
			<div class="circle">
				<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.77734 10.5184L7.23641 15.715L21.7939 1.85742" stroke="white" stroke-width="3.07947"/>
				</svg>
			</div>
			<span>Aftershave</span>
		</button>
	</div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'getActiveComponent',
				'getActiveScents',
				'getSelectedPreshave'
			])
		}
	}
</script>