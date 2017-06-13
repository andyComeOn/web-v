import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Bigshot from '@/components/Bigshot'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
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
