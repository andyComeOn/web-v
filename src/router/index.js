import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Header from '@/components/common/Header'
import Bigshot from '@/components/Bigshot'
import About from '@/components/About'
import Contact from '@/components/Contact'
// import Footer from '@/components/common/Footer'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Header',
			component: Header
		},
		{
			path: '/',
			name: 'Bigshot',
			component: Bigshot
		},
		{
			path: '/',
			name: 'About',
			component: About
		},
		{
			path: '/',
			name: 'Contact',
			component: Contact
		}



	]
})
