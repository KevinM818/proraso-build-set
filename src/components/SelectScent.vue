<template>
	<div class="componentContainer">
		<h1>{{ headerText.heading }}</h1>
		<p>{{ headerText.text }}</p>
		<div class="componentInnerContainer">
			<div class="Scents">
				<div class="Scents__scent" v-for="scent in scentText" @click="addScent(scent.heading)">
					<div class="addRemoveIcon">+X</div>
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