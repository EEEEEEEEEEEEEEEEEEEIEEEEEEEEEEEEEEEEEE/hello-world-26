<template>
	<div id="">
		<!-- 头部 -->
		<header>
			<div class="one">
				<div>
					<a href="/"><img src="../assets/logo_05.png" id="logo"></a>
				</div>
				<div>
					<router-link to='/me'><img src="../assets/wo_02.png" alt=""></router-link>
					<router-link to="#"><img src="../assets/xiazai_03.png" alt=""></router-link>
				</div>
			</div>
		</header>
		<section>
			<img src="../assets/banner.png" alt="">
			<div class="input">
				<img src="../assets/seach.jpg" alt="">
				<input type="text" placeholder="输入小区或商圈开始找房咯！" style="font-size: 0.6rem;">
			</div>
		</section>
		<aside>
			<router-link to="/second" tag='div'>
				<img src="../assets/index_03.png" alt="">
				<p>二手房</p>
			</router-link>
			<router-link to="/xingfang" tag='div'>
				<img src="../assets/index_05.png" alt="">
				<p>新房</p>
			</router-link>
			<router-link to="/zufang" tag='div'>
				<img src="../assets/index_07.png" alt="">
				<p>租房</p>
			</router-link>
			<router-link to="/denglu" tag='div'>
				<img src="../assets/index_09.png" alt="">
				<p>卖房</p>
			</router-link>
		</aside>
		<article>
			<img src="../assets/banner2.png" alt="">
		</article>
		<nav>
			<router-link to="#" tag='h4'>
				<p>热门房源<br><span>Hot house</span></p>
			</router-link>
			<div class="cou" style="border-bottom: 0.0625rem solid #FF8A00;">
				<div class="cou1">
					<img src="../assets/img1.jpg" alt="">
				</div>
				<div class="p">
					<h2>文化部最T中间层 一层带..</h2>
					<p style="margin-top:0.4rem;"><span style=" font-size: 1.4rem;">2室1厅 96m² 南北</span>
						<span style=" margin-left: 2rem; font-size: 1.6rem;color:#FF8A00;font-weight: bold;">1105万</span></p>
					<p style="margin-top:0.4rem;"><span style=" font-size: 1.2rem; color:#A8A8A8;">红庙北里</span>
						<span style=" margin-left:7rem; font-size: 1.2rem;color:#A8A8A8;">14268元/万</span></p>
					<p class="pn" style="margin-top:0.4rem;"><span>学区房</span><span>独家</span></p>
				</div>
			</div>
			<div class="cou" style="border-bottom: 0.0625rem solid #FF8A00;">
				<div class="cou1">
					<img src="../assets/img2.png" alt="">
				</div>
				<div class="p">
					<h2>文化部最T中间层 一层带..</h2>
					<p style="margin-top:0.4rem;"><span style=" font-size: 1.4rem;">2室1厅 96m² 南北</span>
						<span style=" margin-left: 2rem; font-size: 1.6rem;color:#FF8A00;font-weight: bold;">1105万</span></p>
					<p style="margin-top:0.4rem;"><span style=" font-size: 1.2rem; color:#A8A8A8;">红庙北里</span>
						<span style=" margin-left:7rem; font-size: 1.2rem;color:#A8A8A8;">14268元/万</span></p>
					<p class="pn" style="margin-top:0.4rem;"><span>学区房</span><span>独家</span><span>满五唯一</span></p>
				</div>
			</div>
			<div class="cou">
				<div class="cou1">
					<img src="../assets/img3.png" alt="">
				</div>
				<div class="p">
					<h2>文化部最T中间层 一层带..</h2>
					<p style="margin-top:0.4rem;"><span style=" font-size: 1.4rem;">2室1厅 96m² 南北</span>
						<span style=" margin-left: 2rem; font-size: 1.6rem;color:#FF8A00;font-weight: bold;">1105万</span></p>
					<p style="margin-top:0.4rem;"><span style=" font-size: 1.2rem; color:#A8A8A8;">红庙北里</span>
						<span style=" margin-left:7rem; font-size: 1.2rem;color:#A8A8A8;">14268元/万</span></p>
					<p class="pn" style="margin-top:0.4rem;"><span>学区房</span><span>独家</span></p>
				</div>
			</div>
		</nav>
		<div class="sec5">
			<ul class="first">
				<li v-for="item in list" :class="{active:item.flag}" @click="toggle(item)">
					{{item.name}}
				</li>

			</ul>
			<ul class="last">
				<li v-if="flag">
					<p>北京二手房<span>北京找房无忧</span></p>
					<p>北京二手房价<span>青年家园</span></p>
					<p>海淀日租房<span>免税房源</span></p>
					<p>朝阳新房<span>满五年唯一免税...</span></p>
				</li>
				<li v-else>
					<p>北京二手房2<span>北京找房无忧2</span></p>
					<p>北京二手房价2<span>青年家园2</span></p>
					<p>海淀日租房2<span>免税房源2</span></p>
					<p>朝阳新房2<span>满五年唯一免税...</span></p>
				</li>
			</ul>
		</div>
		<!-- 底部 -->
		<footer>
			<h2>
				北京找房无忧网>首页
			</h2>
			<div class="xitong">
				<div class="iphone">
					<img src="../assets/apple.png">
					<div>
						<p>iphone</p>
						<p>客户端</p>
					</div>
				</div>
				<div class="android">
					<img src="../assets/android.png">
					<div>
						<p>Android</p>
						<p>客户端</p>
					</div>
				</div>
			</div>
			<p>
				北京找房无忧房地产经纪有限公司
			</p>

		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: true,
				list: [{
					name: '热门关注',
					flag: true
				}, {
					name: '友情链接',
					flag: false
				}]
			}
		},
		methods: {
			toggle(item) {
				if (!item.flag) {
					this.list.forEach(function(i) {
						i.flag = false;
					});
					item.flag = !item.flag;
					this.flag = !this.flag;
				}
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
	}

	header {
		width: 100%;
		height: 4rem;
	}

	.one {
		width: 100%;
		height: 4rem;
		background: #FF8A00;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#logo {
		width: 80%;
	}

	.one img {
		width: 65%;
	}

	.one div {
		height: 4rem;
		margin: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	section {
		width: 100%;
		height: 16rem;
		position: relative;
	}

	section>img {
		width: 100%;
		height: 16rem;
	}

	section .input {
		width: 80%;
		height: 3rem;
		border: 0.0625rem solid gray;
		background: white;
		position: absolute;
		left: 10%;
		bottom: 10%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	section .input input {
		width: 82%;
		height: 2rem;
		border: 0;
		outline: none;
	}

	section .input img {
		margin: 1% 0 0 2%;
	}

	aside {
		width: 100%;
		height: 10rem;
		background: #FF8A00;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	aside div {
		width: 25%;
		text-align: center;
	}

	aside img {
		width: 6rem;
	}

	aside p {
		color: white;
		margin-top: 0.4rem;
		font-size: 1.2rem;
	}

	article {
		width: 100%;
		height: 25rem;
		margin-top: 1rem;
	}

	article img {
		width: 100%;
		height: 100%;
	}

	nav {
		width: 100%;
		height: 48rem;
		background: white;
		margin-top: 1rem;
	}

	nav h4 {
		width: 100%;
		background: #FF8A00;
		position: relative;
		top: 1rem;
	}

	nav h4 p {
		padding: 1rem;
		font-size: 1.6rem;
		color: white;
		font-weight: normal;
	}

	nav .cou {
		display: flex;
		padding: 1rem;
		margin-top: 1rem;

	}

	nav .cou img {
		width: 8rem;
		height: 8rem;
		margin-top: 1rem;
	}

	nav .cou .p {
		padding: 1rem;

	}

	nav .cou h2 {
		font-size: 1.6rem;

	}


	nav .cou p {
		width: 20rem;
		display: flex;
	}

	nav .pn span {
		display: inline-block;
		background: #F3F7F9;
		font-size: 1.2rem;
		border: 1px solid #F3F7F9;
		color: #8F9FAF;
		margin-left: 0.4rem;
	}

	.sec5 {
		width: 100%;
		height: 20rem;
		margin-top: 1rem;
		background: white;
		position: relative;
	}

	.sec5 .first {
		width: 100%;
		height: 5rem;
		border-bottom: 1px solid orange;
		display: flex;
	}

	.active {
		color: orange;
		border-bottom: 0.125rem solid orange;
		margin-top: -0.0625rem;
	}

	.sec5 .first>li {
		font-size: 1.4rem;
		height: 5rem;
		line-height: 5rem;
		width: 50vw;
		text-align: center;
		cursor: pointer;
	}

	.sec5 .last {
		width: 100%;
		height: 16rem;
		font-size: 1.2rem;
		position: absolute;
	}

	.sec5 .last>li {
		width: 30rem;
		height: 16rem;
		position: absolute;
		margin: 1rem;
	}

	.sec5 .last>li>p {
		height: 2rem;
		line-height: 2rem;
		margin: 0.4rem;
		padding: 0.2rem;
	}

	.sec5 .last>li>p>span {
		display: block;
		width: 50%;
		height: 2rem;
		line-height: 2rem;
		margin-top: -2rem;
		margin-left: 16rem;
		text-align: left;
	}

	/* 底部 */
	footer {
		width: 100%;
		height: 14rem;
		background: #2F3130;
		font-size: 1rem;
		color: gray;

	}

	footer h2 {
		width: 94%;
		height: 3rem;
		line-height: 3rem;
		color: gray;
		border-bottom: 0.1rem solid gray;
		margin-left: 3%;
		margin-right: 3%;
		font-size: 1.2rem;
	}

	.xitong {
		width: 60%;
		height: 7rem;
		margin: auto;
		display: flex;
		justify-content: space-between;
	}

	.xitong div {
		display: flex;
		align-items: center;

	}

	.xitong div img {
		color: gray;
		margin-right: 1rem;
	}

	.xitong div div {
		display: flex;
		flex-direction: column;
	}

	footer>p {
		height: 4rem;
		text-align: center;
	}
</style>
