<template>
	<div class="componentContainer">
		<h1>{{ headerText.heading }}</h1>
		<p class="headerText">{{ headerText.text }}</p>
		<div class="componentInnerContainer">
			<div class="Scents">
				<div class="Scents__scent" v-for="scent in scentText" @click="addScent(scent.heading)">
					<div class="addRemoveIcons">
						<div class="addIcon iconWrap">
							<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 10.5789H9.5V7.42105H0V10.5789ZM9.5 10.5789H19V7.42105H9.5V10.5789ZM11.0789 9V0H7.92105V9H11.0789ZM7.92105 9V18H11.0789V9H7.92105Z" fill="black"/>
							</svg>
						</div>
						<div class="removeIcon iconWrap">
							<svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.89841 21.834L14.6159 15.1164L12.383 12.8835L5.66545 19.601L7.89841 21.834ZM14.6159 15.1164L21.3334 8.39893L19.1005 6.16596L12.383 12.8835L14.6159 15.1164ZM14.6159 12.8835L8.25197 6.51952L6.019 8.75249L12.383 15.1164L14.6159 12.8835ZM12.383 15.1164L18.7469 21.4804L20.9799 19.2474L14.6159 12.8835L12.383 15.1164Z" fill="black"/>
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
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			headerText() {
				return this.$store.getters.getLanguages.steps[0] || '';
			},
			scentText() {
				return this.$store.getters.getLanguages.scents;
			}
		},
		methods: {
			addScent(scent) {
				console.log(scent);
			}
		}
	}
</script>

