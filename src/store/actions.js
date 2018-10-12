import axios from 'axios';
import _ from 'lodash';

const STORE_URL = 'https://proraso-company.myshopify.com';
const STORE_PAGE = 'build-a-set';
const STORE_COLLECTION = 'build-a-set';

let actions = {
	getContent(context) {
		let languages = {
			steps: [],
			scents: [],
			summary: []
		};
		let allScents = [];

		axios.get(`${STORE_URL}/pages/${STORE_PAGE}`)
		.then(response => {
			let page = document.createElement('html');
			page.innerHTML = response.data;
			let steps = page.querySelectorAll('.stepInfo');
			let scents = page.querySelectorAll('.scentInfo');
			let summaryText = page.querySelectorAll('.summaryText');

			steps.forEach(step => {
				let stepHeading = step.querySelector('h3').textContent;
				let stepText = step.querySelector('p').textContent;
				languages.steps.push({
					heading: stepHeading,
					text: stepText
				});
			});

			scents.forEach(scent => {
				let scentImg = scent.querySelector('img').getAttribute('src');
				let scentHeading = scent.querySelector('h3').textContent.toLowerCase();
				let scentText = scent.querySelector('p').textContent;
				languages.scents.push({
					imgSrc: scentImg,
					heading: scentHeading,
					text: scentText
				});
				allScents.push(scentHeading);
			});

			summaryText.forEach(text => languages.summary.push(text.textContent));
			
			context.commit('setLanguages', languages);
			context.commit('setScents', allScents);

			return axios.get(`${STORE_URL}/collections/${STORE_COLLECTION}/products.json?limit=250`);
		})
		.then(response => {
			response.data.products.forEach(product => {
				if (product.variants[0].available) {
					let item = _.pick(product, ['images', 'product_type', 'tags', 'title', 'variants']);
					context.commit('sortProducts', item);
				} 
			});
		})
		.catch(error => console.log('Error fetching content ', error));
	}
};

export default actions;