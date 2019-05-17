<template>
	<div>
		<!-- 头部 -->
		<header>
			<div class="one">
				<div>
					<a href="/"><img src="../assets/logo_05.png" id="logo"></a>
					<a href="" class="beijing">北京&nbsp;∨</a>
				</div>
				<div>
					<router-link to='/me'><img src="../assets/wo_02.png" alt=""></router-link>
					<router-link to="#"><img src="../assets/xiazai_03.png" alt=""></router-link>

				</div>
			</div>

		</header>

		<div style=" width: 100%;border-bottom: 1px solid silver;padding: 1rem;background: white;">
			<a href="sy.html" style="text-decoration: none;color: slategray; font-size: 2rem;">首页</a>
			<span style="display: inline-block; position: relative; top: 0.6rem;left: 0.6rem;"><img src="../assets/right.png"
				 style="width: 100%;"></span>
			<a href="" style="text-decoration: none; font-size: 2rem;margin-left: 1rem; color: green;">北京租房</a>
		</div>
		<!-- 搜索框 -->
		<aside>
			<div class="two">
				<input type="text" id="" value="" />
				<a href="#"><img src="../assets/search_03.png"></a>
			</div>
		</aside>
		<!-- 导航 -->
		<nav>
			<ul class="fenlei">
				<li style="color: orange;">区域 ▼</li>
				<li>月租 ▼</li>
				<li>房型 ▼</li>
				<li>更多 ▼</li>
			</ul>
		</nav>
		<section>
			<div class="demo" style="position: relative;">
				<div class="left"><img src="../assets/img3.png" style="width: 10rem;height: 9rem;margin-left: -1rem;"></div>
				<div class="right">
					<p style="font-size: 1.6rem;">南沙滩小区&nbsp;超低价急售</p>
					<span class="b" style="color: #8E8E8E;">2室一厅&nbsp; 96㎡ &nbsp;南北</span><br>
					<span class="a" style="color: #8E8E8E;">青岛新天地</span>
					<div class="btn">集中供暖</div>
					<span style="position: absolute;right: 1rem;bottom: 2rem;font-size: 1.8rem;color: #FF8A00;">3700元/月</span>
				</div>
			</div>
			<div class="demo" style="position: relative;">
				<div class="left"><img src="../assets/img4.png" style="width: 10rem;height: 9rem;margin-left: -1rem;"></div>
				<div class="right">
					<p style="font-size: 1.6rem;">南沙滩小区&nbsp;超低价急售</p>
					<span class="b" style="color: #8E8E8E;">2室一厅&nbsp; 96㎡ &nbsp;南北</span><br>
					<span class="a" style="color: #8E8E8E;">青岛新天地</span>
					<div class="btn">集中供暖</div>
					<span style="position: absolute;right: 1rem;bottom: 2rem;font-size: 1.8rem;color: #FF8A00;">1600元/月</span>
				</div>
			</div>
			<div class="demo" style="position: relative;">
				<div class="left"><img src="../assets/img5.png" style="width: 10rem;height: 9rem;margin-left: -1rem;"></div>
				<div class="right">
					<p style="font-size: 1.6rem;">南沙滩小区&nbsp;超低价急售</p>
					<span class="b" style="color: #8E8E8E;">2室一厅&nbsp; 96㎡ &nbsp;南北</span><br>
					<span class="a" style="color: #8E8E8E;">青岛新天地</span>
					<div class="btn">集中供暖</div>
					<span style="position: absolute;right: 1rem;bottom: 2rem;font-size: 1.8rem;color: #FF8A00;">3400元/月</span>
				</div>
			</div>
			<div class="demo" style="position: relative;">
				<div class="left"><img src="../assets/img6.png" style="width: 10rem;height: 9rem;margin-left: -1rem;"></div>
				<div class="right">
					<p style="font-size: 1.6rem;">南沙滩小区&nbsp;超低价急售</p>
					<span class="b" style="color: #8E8E8E;">2室一厅&nbsp; 96㎡ &nbsp;南北</span><br>
					<span class="a" style="color: #8E8E8E;">青岛新天地</span>
					<div class="btn">集中供暖</div>
					<span style="position: absolute;right: 1rem;bottom: 2rem;font-size: 1.8rem;color: #FF8A00;">5400元/月</span>
				</div>
			</div>
			<div class="demo" style="position: relative;">
				<div class="left"><img src="../assets/img7.png" style="width: 10rem;height: 9rem;margin-left: -1rem;"></div>
				<div class="right">
					<p style="font-size: 1.6rem;">南沙滩小区&nbsp;超低价急售</p>
					<span class="b" style="color: #8E8E8E;">2室一厅&nbsp; 96㎡ &nbsp;南北</span><br>
					<span class="a" style="color: #8E8E8E;">青岛新天地</span>
					<div class="btn">集中供暖</div>
					<span style="position: absolute;right: 1rem;bottom: 2rem;font-size: 1.8rem;color: #FF8A00;">3300元/月</span>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
		border: 0;
		outline: none;
		vertical-align: baseline;
	}

	a {
		text-decoration: none;
	}

	em {
		font-style: normal;
	}

	ul {
		list-style: none;
	}

	ol {
		list-style: none;
	}

	html,
	body {
		font-size: 10px;
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

	.one img {
		width: 65%;
		height: 100%;
	}

	.one div {
		height: 4rem;
		margin: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.one .beijing {
		width: 68%;
		color: white;
		font-size: 2rem;
		/* margin-left:1rem; */
	}

	aside {
		width: 100%;
		height: 6rem;
		background: #F5F5F5;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.two {
		width: 80%;
		height: 4rem;
		border: 0.1rem solid #A2A2A2;
		background: white;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.two input {
		width: 80%;
		height: 3rem;
		border-right: 0.1rem solid #A2A2A2;
		font-size: 1.2rem;
	}

	.two img {
		width: 2rem;
		height: 2rem;
		margin-right: 0.6rem;
	}

	nav {
		background: white;
		color: #A2A2A2;
	}

	nav>ul {
		width: 100%;
		height: 4rem;
		border-top: 0.1rem solid #A2A2A2;
		border-bottom: 0.1rem solid #A2A2A2;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 1.4rem;
		position: relative;

	}

	nav>ul>li {
		width: 25%;
		height: 3rem;
		text-align: center;
		line-height: 3rem;
		cursor: pointer;
		position: relative;
	}

	nav>ul>li:nth-child(n+2) {
		border-left: 0.1rem solid #A2A2A2;

	}

	section {
		width: 100%;
		background: white;

	}

	.demo {
		width: 88%;
		height: 10rem;
		display: flex;
		justify-content: space-around;
		border-bottom: 0.12rem solid orange;
		padding: 1rem;
		margin: auto;
	}

	.demo:last-of-type {
		border: 0;
	}

	.demo>div {
		flex: none;
	}

	.right>.b {
		display: block;
		margin-top: 0.2rem;
	}

	.right>.a {
		display: block;
		margin-top: -1rem;
	}

	.right>span {
		font-size: 1.4rem;
	}

	.btn {
		color: #42B983;
		border: 1px solid green;
		margin-top: 0.6rem;
		width: 6rem;
		text-align: center;
		font-size: 1.3rem;
	}
</style>
