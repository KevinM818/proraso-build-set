<template>
	<div class="componentContainer summaryContainer">
		<h1>{{ summaryText[0] }}</h1>
		<div class="componentInnerContainer">
			<transition name="fade">
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
			</transition>
			<div class="Summary">
				<div class="Summary__products">
					<div class="summaryProd">
						<img :src="getSelectedPreshave.image">
						<h4>{{ getSelectedPreshave.title }}</h4>
						<span class="prodForm">{{ getSelectedPreshave.scent }}</span>
						<span class="prodPrice">${{ getSelectedPreshave.price }}</span>
					</div>
					<div class="summaryProd">
						<img :src="getSelectedShave.image">
						<h4>{{ getSelectedShave.title }}</h4>
						<span class="prodForm">{{ getSelectedShave.scent }}</span>
						<span class="prodPrice">${{ getSelectedShave.price }}</span>
					</div>
					<div class="summaryProd">
						<img :src="getSelectedAfterShave.image">
						<h4>{{ getSelectedAfterShave.title }}</h4>
						<span class="prodForm">{{ getSelectedAfterShave.scent }}</span>
						<span class="prodPrice">${{ getSelectedAfterShave.price }}</span>
					</div>
				</div>
				<div class="Summary__total">
					<div class="giftQuestion" v-if="askGift">
						<p>is this item a gift?</p>
						<button @click="askGift = false; isGift = true" class="btnIsGift">
							<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 8.79443H26V15.0076H1V8.79443Z" stroke="white"/>
							<path d="M2.44231 15.9634H24.5577V26H2.44231V15.9634Z" stroke="white"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7404 8.79437C13.6601 7.28091 13.2596 3.96724 12.2981 2.82022C11.0962 1.38642 9.89423 0.66952 8.93269 1.14745C8.16341 1.52979 6.84928 2.74055 6.28846 3.29815C6.04808 3.61678 5.75957 4.54076 6.52885 5.68781C7.29812 6.83486 11.1762 8.23678 13.0192 8.79437H13.7404ZM7.97115 4.49298C7.77889 3.91946 8.0512 3.45745 8.21154 3.29815C8.37187 3.13885 8.78856 2.91581 9.17308 3.29815C9.5576 3.68049 11.4166 6.64368 12.2981 8.07747C10.9358 7.12161 8.16341 5.0665 7.97115 4.49298Z" stroke="white"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8.79437C13.5803 7.28091 13.9808 3.96724 14.9423 2.82022C16.1442 1.38642 17.3462 0.66952 18.3077 1.14745C19.077 1.52979 20.3911 2.74055 20.9519 3.29815C21.1923 3.61678 21.4808 4.54076 20.7115 5.68781C19.9423 6.83486 16.0642 8.23678 14.2212 8.79437H13.5ZM18.7885 4.49298C18.9807 3.91946 18.7084 3.45745 18.5481 3.29815C18.3877 3.13885 17.9711 2.91581 17.5865 3.29815C17.202 3.68049 15.343 6.64368 14.4615 8.07747C15.8238 7.12161 18.5962 5.0665 18.7885 4.49298Z" stroke="white"/>
							<rect x="12" y="8" width="3" height="18" fill="white"/>
							</svg>
							yes
						</button>
						<button  @click="askGift = false" class="btnNotGift">no, its for me</button>
					</div>
					<div class="summarylist" v-else>
						<div class="listItem">
							<h4>{{ getSelectedPreshave.title }}</h4>
							<span>${{  getSelectedPreshave.price }}</span>
						</div>
						<div class="listItem">
							<h4>{{ getSelectedShave.title }}</h4>
							<span>${{  getSelectedShave.price }}</span>
						</div>
						<div class="listItem">
							<h4>{{ getSelectedAfterShave.title }}</h4>
							<span>${{  getSelectedAfterShave.price }}</span>
						</div>
					</div>
					<div class="totalText">
						<h5>Total:</h5>
						<h5>${{ calculatePrice }}</h5>
					</div>
				</div>
			</div>
			<p class="mobileAskText" v-if="askGift">is this item a gift?</p>
			<div class="navButtonsMobile summaryMobileButtons mobileConfirmButtons" v-if="askGift">
				<button @click="askGift = false; isGift = true" class="btnIsGift">
					<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 7.54732H22V12.7663H1V7.54732Z" stroke="white"/>
					<path d="M2.21154 13.5693H20.7885V22H2.21154V13.5693Z" stroke="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7019 7.54727C11.6345 6.27596 11.2981 3.49248 10.4904 2.52898C9.48077 1.32459 8.47115 0.722397 7.66346 1.12386C7.01727 1.44503 5.9134 2.46206 5.44231 2.93045C5.24038 3.1981 4.99804 3.97424 5.64423 4.93776C6.29042 5.90128 9.54801 7.07889 11.0962 7.54727H11.7019ZM6.85577 3.9341C6.69427 3.45234 6.92301 3.06426 7.05769 2.93045C7.19237 2.79663 7.54239 2.60928 7.86538 2.93045C8.18838 3.25161 9.74993 5.74069 10.4904 6.94508C9.34609 6.14215 7.01727 4.41586 6.85577 3.9341Z" stroke="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 7.54727C11.5674 6.27596 11.9038 3.49248 12.7115 2.52898C13.7212 1.32459 14.7308 0.722397 15.5385 1.12386C16.1847 1.44503 17.2885 2.46206 17.7596 2.93045C17.9615 3.1981 18.2039 3.97424 17.5577 4.93776C16.9115 5.90128 13.6539 7.07889 12.1058 7.54727H11.5ZM15.9423 3.9341C16.1038 3.45234 15.8751 3.06426 15.7404 2.93045C15.6057 2.79663 15.2557 2.60928 14.9327 2.93045C14.6097 3.25161 13.0481 5.74069 12.3077 6.94508C13.452 6.14215 15.7808 4.41586 15.9423 3.9341Z" stroke="white"/>
					<rect x="10" y="7" width="3" height="15" fill="white"/>
					</svg>
					yes
				</button>
				<button  @click="askGift = false" class="btnNotGift">no, its for me</button>
			</div>
			<div class="navButtonsMobile summaryMobileButtons" v-else>
				<button class="prevMobile" @click="$store.commit('setComponent','SelectAfterShave')">
					previous
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 15L2 7.70085L9 1" stroke="#333333" stroke-width="2"/>
					</svg>
				</button>
				<button class="nextMobile" @click="addToCart()" :disabled="disableAddToCart">
					next
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 15L8 7.70085L1 1" stroke="white" stroke-width="2"/>
					</svg>
				</button>
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
			<button class="buttonNext buildBtn" @click="addToCart()" :disabled="disableAddToCart">
				next
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L9 10.0667L1 18" stroke="white" stroke-width="2"/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
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
			},
			disableAddToCart() {
				if (!this.askGift) {
					if (this.isGift) {
						if (this.giftName && this.giftMessage) {
							return false
						}
						return true;
					}
					return false;
				}
				return true;
			}
		},
		methods: {
			addToCart() {
				let setNumber = new Date().valueOf();
				let cartQueue = [];

				function ajaxAdd(queue){
					if (queue.length > 0){
						let currentItem = queue.pop();
						axios.post('/cart/add.js', currentItem)
						.then(response => {
							ajaxAdd(queue);
						})
						.catch(err => {
							console.log(err);
						});
						} else {
							window.location.href = '/cart';
						}
					}

				if (this.isGift) {
					cartQueue.push({
						id: this.getMainProduct,
						quantity: 1,
						properties: {
							'Set Number': setNumber,
							'Pre-Shave': this.getSelectedPreshave.title,
							'Shave': this.getSelectedShave.title,
							'Aftershave': this.getSelectedAfterShave.title,
							'Gift Recipient': this.giftName,
							'Gift Message': this.giftMessage
						}
					});
				} else {
					cartQueue.push({
						id: this.getMainProduct,
						quantity: 1,
						properties: {
							'Set Number': setNumber,
							'Pre-Shave': this.getSelectedPreshave.title,
							'Shave': this.getSelectedShave.title,
							'Aftershave': this.getSelectedAfterShave.title
						}
					});
				}

				cartQueue.push({
					id: this.getSelectedPreshave.id, 
					quantity: 1, 
					properties: { 'Set Number': setNumber }
				});

				cartQueue.push({
					id: this.getSelectedShave.id, 
					quantity: 1, 
					properties: { 'Set Number': setNumber }
				});

				cartQueue.push({
					id: this.getSelectedAfterShave.id, 
					quantity: 1, 
					properties: { 'Set Number': setNumber }
				});
				ajaxAdd(cartQueue);
			}
		},
		activated() {
			document.body.scrollTop = 0; // For Safari
     		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
	}
</script>