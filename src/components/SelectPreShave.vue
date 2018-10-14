<template>
	<div class="componentContainer">
		<h1>{{ headerText.heading }}</h1>
		<p class="headerText">{{ headerText.text }}</p>
		<div class="componentInnerContainer">
			<div class="PreShaveProducts">
				
			</div>
		</div>
		<div class="navigationButtons">
			<button class="buttonPrev buildBtn" @click="$store.commit('setComponent','SelectScent')">
				previous
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 1L2 10.0667L10 18" stroke="#333333" stroke-width="2"/>
				</svg>
			</button>
			<PageBar></PageBar>
			<button class="buttonNext buildBtn" @click="$store.commit('setComponent','')" >
				next
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L9 10.0667L1 18" stroke="white" stroke-width="2"/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script type="text/javascript">
import PageBar from './PageBar.vue'
	export default {
		components: {
			PageBar
		},
		computed: {
			headerText() {
				return this.$store.getters.getLanguages.steps[1];
			}
		}
	}
</script>