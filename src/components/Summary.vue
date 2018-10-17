<template>
	<div class="componentContainer summaryContainer">
		<h1>{{ summaryText[0] }}</h1>
		<div class="giftQuestion" v-if="askGift">
			<p>{{ summaryText[1] }}</p>
			<button @click="askGift = false; isGift = true">Yes</button>
			<button @click="askGift = false">No</button>
		</div>
		<div class="componentInnerContainer">
			<div class="giftMessage" v-if="isGift">
				<div class="giftMessage__img">
					<img :src="summaryText[4]">
				</div>
				<div class="giftMessage__text">
					<label>{{ summaryText[2] }}</label>
					<input type="text" v-model="giftName">
					<label>{{ summaryText[3] }}</label>
					<textarea  v-model="giftMessage"></textarea>
				</div>
			</div>
			<div class="Summary">
				<div class="Summary__products">
					<div class="summaryProd">
						<img :src="getSelectedPreshave.image">
						<h4>{{ getSelectedPreshave.title }}</h4>
						<span>${{ getSelectedPreshave.price }}</span>
					</div>
					<div class="summaryProd">
						<img :src="getSelectedShave.image">
						<h4>{{ getSelectedShave.title }}</h4>
						<span>${{ getSelectedShave.price }}</span>
					</div>
					<div class="summaryProd">
						<img :src="getSelectedAfterShave.image">
						<h4>{{ getSelectedAfterShave.title }}</h4>
						<span>${{ getSelectedAfterShave.price }}</span>
					</div>
				</div>
				<div class="Summary__total">
					<div class="totalText">
						<h5>Total:</h5>
						<h5>${{ calculatePrice }}</h5>
					</div>
					<button @click="addToCart()">Add to cart</button>
				</div>
			</div>
		</div>
		<div class="navigationButtons">
			<button class="buttonPrev buildBtn" @click="$store.commit('setComponent','SelectAfterShave')">
				previous
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 1L2 10.0667L10 18" stroke="#333333" stroke-width="2"/>
				</svg>
			</button>
			<PageBar></PageBar>
			<button class="buttonNext buildBtn" disabled>
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
import { mapGetters } from 'vuex'
	export default {
		components: {
			PageBar
		},
		data() {
			return {
				askGift: true,
				isGift: false,
				giftName: '',
				giftMessage: ''
			};
		},
		computed: {
			...mapGetters([
				'getMainProduct',
				'getSelectedPreshave',
				'getSelectedShave',
				'getSelectedAfterShave'
			]),
			summaryText() {
				return this.$store.getters.getLanguages.summary;
			},
			calculatePrice() {
				let preShavePrice = parseFloat(this.getSelectedPreshave.price);
				let shavePrice = parseFloat(this.getSelectedShave.price);
				let AfterShavePrice = parseFloat(this.getSelectedAfterShave.price);
				return (preShavePrice + shavePrice + AfterShavePrice).toFixed(2);
			}
		},
		methods: {
			addToCart() {
				console.log('addtocart');
			}
		},
		activated() {
			document.body.scrollTop = 0; // For Safari
     		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
	}
</script>