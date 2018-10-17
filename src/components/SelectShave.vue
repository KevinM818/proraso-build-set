<template>
	<div class="componentContainer">
		<h1>{{ headerText.heading }}</h1>
		<p class="headerText">{{ headerText.text }}</p>
		<div class="componentInnerContainer prodContainer" :class="shaveProducts.length > 4 ? 'swiper-container' : '' ">
			<div class="navButtonsMobile">
				<button class="prevMobile" @click="$store.commit('setComponent','SelectPreShave')">
					previous
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 15L2 7.70085L9 1" stroke="#333333" stroke-width="2"/>
					</svg>
				</button>
				<button class="nextMobile"  @click="$store.commit('setComponent','SelectAfterShave')" :disabled="$store.getters.getSelectedShave === '' ">
					next
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 15L8 7.70085L1 1" stroke="white" stroke-width="2"/>
					</svg>
				</button>
			</div>
			<div class="Products" :class="shaveProducts.length > 4 ? 'swiper-wrapper' : 'noSlider' ">
				<div class="Products__product" v-for="product in shaveProducts" :class="shaveProducts.length > 4 ? 'swiper-slide' : '' ">
					<img :src="product.image">
					<h4>{{ product.title }}</h4>
					<span class="prodForm">{{ product.scent }} formula</span>
					<span class="prodPrice">${{ product.price }}</span>
					<button @click="selectShave(product)" :class="$store.getters.getSelectedShave === product ? 'addedProd' : '' ">
						<span class="addBtn">Add</span>
						<span class="addedBtn">Added</span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 9.25L3.66667 12L13 1" stroke="white" stroke-width="2"/>
						</svg>
					</button>
				</div>
			</div>
			<div class="swiper-button-prev" v-if="shaveProducts.length > 4">
				<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 2L3 11.5L12 21" stroke="black" stroke-width="3"/>
				</svg>
			</div>
    		<div class="swiper-button-next" v-if="shaveProducts.length > 4">
    			<svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2L12 11.5L2 21" stroke="black" stroke-width="3"/>
				</svg>
    		</div>
    		<div class="navButtonsMobile">
				<button class="prevMobile" @click="$store.commit('setComponent','SelectPreShave')">
					previous
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 15L2 7.70085L9 1" stroke="#333333" stroke-width="2"/>
					</svg>
				</button>
				<button class="nextMobile"  @click="$store.commit('setComponent','SelectAfterShave')" :disabled="$store.getters.getSelectedShave === '' ">
					next
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 15L8 7.70085L1 1" stroke="white" stroke-width="2"/>
					</svg>
				</button>
			</div>
		</div>
		<div class="navigationButtons">
			<button class="buttonPrev buildBtn" @click="$store.commit('setComponent','SelectPreShave')">
				previous
				<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 1L2 10.0667L10 18" stroke="#333333" stroke-width="2"/>
				</svg>
			</button>
			<PageBar></PageBar>
			<button class="buttonNext buildBtn" @click="$store.commit('setComponent','SelectAfterShave')" :disabled="$store.getters.getSelectedShave === '' ">
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
import Swiper from 'swiper'
	export default {
		components: {
			PageBar
		},
		data() {
			return {
				mySwiper: '',
				activeSlide: ''
			};
		},
		computed: {
			headerText() {
				return this.$store.getters.getLanguages.steps[2];
			},
			shaveProducts() {
				return this.$store.getters.getShaveProducts;
			}
		},
		methods: {
			selectShave(product) {
				if (this.$store.getters.getSelectedShave === product) {
					return this.$store.commit('setSelectedShave', '');
				}
				this.$store.commit('setSelectedShave', product);
				if (this.mySwiper) {
					this.activeSlide = this.mySwiper.realIndex;
				}
			}
		},
		activated() {
			if (this.shaveProducts.length > 4 && window.innerWidth > 1000) {
				this.mySwiper = new Swiper('.swiper-container', {
					slidesPerView: 4,
					spaceBetween: 44,
					navigation: {
						nextEl: '.swiper-button-prev',
						prevEl: '.swiper-button-next'
					},
					breakpoints: {
						1150: {
							spaceBetween: 22,
							slidesPerView: 3
						}
					}
				});
				if (this.$store.getters.getSelectedShave) {
					this.mySwiper.slideTo(this.activeSlide);
				}
			}
		},
		deactivated() {
			if (this.mySwiper) {
				this.mySwiper.destroy();
			}
		}
	}
</script>