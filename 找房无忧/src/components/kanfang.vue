<template>
	<div>
		<header>
			<div>
				<a href="/"><img src="../assets/logo.jpg"></a>
				<a href="" class="beijing">北京
					<!-- &nbsp; -->∨</a>
			</div>
			<div>
				<router-link to='/me'><img src="../assets/my.jpg"></router-link>
				<router-link to="#"><img src="../assets/xiazai.jpg"></router-link>
			</div>
		</header>
		<nav>
			<ul>
				<router-link to="/" tag='li'>首页</router-link>
				<li class="liright"><img src="../assets/right.png"></li>
				<router-link to="/my" tag='li'>我的</router-link>
				<li class="liright"><img src="../assets/right.png"></li>
				<router-link to="#" tag='li'><span>我关注的小区</span></router-link>
			</ul>
		</nav>
		<section>
			<div class="f1">
				<div class="ff1"><img src="../assets/img1.png"></div>
				<div>
					<h1 class="ff2">辉煌国际</h1>
					<p class="ff3">昌平区-回龙观</p>
					<p class="ff3">2007年建成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ff4">37050元/平</span></p>
					<p class="ff3">板塔结合</p>
				</div>
			</div>
			<div class="f1">
				<div class="ff1"><img src="../assets/img2.png"></div>
				<div>
					<h1 class="ff2">万寿园</h1>
					<p class="ff3">昌平区-回龙观</p>
					<p class="ff3">2007年建成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ff4">57050元/平</span></p>
					<p class="ff3">板塔结合</p>
				</div>
			</div>
			<div class="f1">
				<div class="ff1"><img src="../assets/img3.png"></div>
				<div>
					<h1 class="ff2">红莲南5号</h1>
					<p class="ff3">昌平区-回龙观</p>
					<p class="ff3">2007年建成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ff4">37222元/平</span></p>
					<p class="ff3">板塔结合</p>
				</div>
			</div>
			<div class="f1">
				<div class="ff1"><img src="../assets/img4.png"></div>
				<div>
					<h1 class="ff2">万寿西街16号</h1>
					<p class="ff3">昌平区-回龙观</p>
					<p class="ff3">2007年建成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ff4">36650元/平</span></p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
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

	ul {
		list-style: none;
	}

	html,
	body {
		font-size: 10px;
	}

	header {
		width: 100%;
		height: 3.96rem;
		background: #FF8A00;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* 上下居中 */
	}

	header img {
		width: 76%;
		height: 100%;
	}

	header div {
		height: 4rem;
		margin: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* 上下居中 */
		/* border:0.01rem solid black; */
	}

	header .beijing {
		width: 66%;
		color: white;
		margin-left: -1rem;
		font-size: 1.5rem;
		/* border:0.01rem solid black; */
	}

	nav {
		width: 100%;
		height: 3.8rem;
		border-bottom: 0.01rem solid #d8d8d8;
		line-height: 3.8rem;
		background: white;

	}

	nav>ul {
		height: 100%;
		margin-left: 4%;
	}

	nav>ul>li {
		width: 13%;
		height: 100%;
		float: left;
		text-align: center;
		font-size: 1.4rem;
		/* border:0.01rem solid black; */
		color: gray;
	}

	nav>ul>li:last-child {
		width: 33%;

	}

	nav img {
		width: 70%;
		height: 100%;
	}

	nav .liright {
		width: 5%;
	}

	section {
		width: 100%;
		background: white;
	}

	section .f1 {
		width: 86%;
		padding: 1rem 0;
		border-bottom: 0.0625rem solid orange;
		height: 8rem;
		margin: auto;
	}

	section .ff1 {
		float: left;
		margin-right: 0.7rem;
	}

	section img {
		width: 10rem;
		height: 8rem;
	}

	section .ff2 {
		font-size: 2rem;
		font-weight: normal;
		line-height: 2rem;
	}

	section .ff3 {
		width: 104%;
		font-size: 1.1rem;
		margin-top: 0.4rem;
		color: gray;
	}

	section .ff4 {
		color: orange;
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
