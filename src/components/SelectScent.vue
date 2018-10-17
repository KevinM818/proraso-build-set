<template>
	<div class="componentContainer">
		<h1>{{ headerText.heading }}</h1>
		<p class="headerText">{{ headerText.text }}</p>
		<div class="componentInnerContainer">
			<div class="Scents">
				<div class="Scents__scent" v-for="scent in scentText" @click="addScent(scent.heading)" :class="selectedScents.length === 2 && selectedScents.indexOf(scent.heading) === -1 ? 'inactive' : selectedScents.indexOf(scent.heading) !== -1 ? `selected selected-${scent.heading}` : '' ">
					<div class="addRemoveIcons">
						<div class="addIcon iconWrap">
							<svg class="iconDT" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 10.5789H9.5V7.42105H0V10.5789ZM9.5 10.5789H19V7.42105H9.5V10.5789ZM11.0789 9V0H7.92105V9H11.0789ZM7.92105 9V18H11.0789V9H7.92105Z" fill="black"/>
							</svg>
							<svg class="iconMob" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 7H6V5H0V7ZM6 7H12V5H6V7ZM7 6V0H5V6H7ZM5 6V12H7V6H5Z" fill="black"/>
							</svg>
						</div>
						<div class="removeIcon iconWrap">
							<svg class="iconDT" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.89841 21.834L14.6159 15.1164L12.383 12.8835L5.66545 19.601L7.89841 21.834ZM14.6159 15.1164L21.3334 8.39893L19.1005 6.16596L12.383 12.8835L14.6159 15.1164ZM14.6159 12.8835L8.25197 6.51952L6.019 8.75249L12.383 15.1164L14.6159 12.8835ZM12.383 15.1164L18.7469 21.4804L20.9799 19.2474L14.6159 12.8835L12.383 15.1164Z" fill="black"/>
							</svg>
							<svg class="iconMob" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.94975 13.9497L9.19239 9.70711L7.77817 8.29289L3.53553 12.5355L4.94975 13.9497ZM9.19239 9.70711L13.435 5.46447L12.0208 4.05025L7.77817 8.29289L9.19239 9.70711ZM9.19239 8.29289L4.94975 4.05025L3.53553 5.46447L7.77817 9.70711L9.19239 8.29289ZM7.77817 9.70711L12.0208 13.9497L13.435 12.5355L9.19239 8.29289L7.77817 9.70711Z" fill="black"/>
							</svg>
						</div>
					</div>
					<div class="imgIcon"><img :src="scent.imgSrc"></div>
					<div class="scentInfo">
						<h3>{{ scent.heading }}</h3>
						<p>{{ scent.text }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="navigationButtons navigationButtonsScentMobile">
			<button class="buttonPrev buttonPrevDisabled buildBtn" disabled>
				previous
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 1L2 10.0667L10 18" stroke="#333333" stroke-width="2"/>
				</svg>
			</button>
			<PageBar></PageBar>
			<button class="buttonNext buildBtn" @click="$store.commit('setComponent','SelectPreShave')" :disabled="selectedScents.length < 2">
				next
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L9 10.0667L1 18" stroke="white" stroke-width="2"/>
				</svg>
			</button>
		</div>
		<p class="mobileText__scent">Select two scents to continue</p>
		<button class="mobileScentContinue buildBtn"  @click="$store.commit('setComponent','SelectPreShave')" :disabled="selectedScents.length < 2">
			Continue
			<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 16L8 8.17949L1 1" stroke="white" stroke-width="2"/>
			</svg>
		</button>
	</div>
</template>

<script type="text/javascript">
import PageBar from './PageBar.vue'
	export default {
		components: {
			PageBar
		},
		data() {
			return {
				selectedScents: []
			};
		},
		computed: {
			headerText() {
				return this.$store.getters.getLanguages.steps[0];
			},
			scentText() {
				return this.$store.getters.getLanguages.scents;
			}
		},
		methods: {
			addScent(scent) {
				if (this.selectedScents.indexOf(scent) !== -1) {
					return this.selectedScents.splice(this.selectedScents.indexOf(scent), 1);
				} 
				if (this.selectedScents.length < 2) {
					this.selectedScents.push(scent);
					this.$store.commit('setActiveScents', this.selectedScents);
					this.$store.commit('setSelectedPreShave', '');
					this.$store.commit('setSelectedShave', '');
					this.$store.commit('setSelectedAfterShave', '');
				}
			}
		}
	}
</script>

