import Vue from 'vue'
import Router from 'vue-router'

import shouye from '@/components/shouye'
import me from '@/components/me'
import my from '@/components/my'
import second from '@/components/second'
import xingfang from '@/components/xingfang'
import zufang from '@/components/zufang'
import denglu from '@/components/denglu'
import zhuce from '@/components/zhuce'
import wjmm from '@/components/wjmm'
import kanfang from '@/components/kanfang'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		component: shouye
	}, {
		path: '/me',
		component: me
	}, {
		path: '/my',
		component: my
	}, {
		path: '/second',
		component: second
	}, {
		path: '/xingfang',
		component: xingfang
	}, {
		path: '/zufang',
		component: zufang
	}, {
		path: '/denglu',
		component: denglu
	}, {
		path: '/zhuce',
		component: zhuce
	}, {
		path: '/wjmm',
		component: wjmm
	}, {
		path: '/kanfang',
		component: kanfang
	}]
})
