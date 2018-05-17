
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

$(document).foundation();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));
/*
const app = new Vue({
    el: '#app'
});
*/

// Vue + Axios
const url = 'https://swapi.co/api/people/?format=json';
new Vue({
	el: 'main',
	data: {
		people: []
	},
	methods: {
		loadPeople() {
			axios.get(url)
				.then((response) => {
					this.people = response.data.results;
				});
		}
	},
	mounted() {
		// When the Component is ready fetch the JSON from the Server Backend
		this.loadPeople();
	},
});