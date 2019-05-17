<template>
	<div>
		<div class="tou">
			<div class="tou1">
				<div class="tou2">
					<p><span><img src="../assets/down.png" /></span></p>
					<p>APP</p>
				</div>
				<a href="#" class="tou2">
					<p><span><img src="../assets/urse.png" /></span></p>
					<p>我的</p>
				</a>
			</div>
			<div class="tou3">
				<a href="sy.html"><img src="../assets/logo.png" /></a>
			</div>
			<router-link to='/denglu' class="tou4">
				登录
			</router-link>
		</div>
		<div class="wei">
			<p class="p1">
				<span class="wei2"><img src="../assets/icon1.png" /></span>
				<router-link to="/kanfang" class="wei3">我关注的房源</router-link>
				<span class="wei1"><img src="../assets/right.png" /></span>
			</p>
			<p class="p2">
				<span class="wei2"><img src="../assets/icon2.png" /></span>
				<router-link to="/kanfang" class="wei3">我关注的小区</router-link>
				<span class="wei8"><img src="../assets/right.png" /></span>
			</p>
			<p class="p3">
				<span class="wei2"><img src="../assets/icon3.png" /></span>
				<span class="wei3">我关注的新房</span>
				<span class="wei9"><img src="../assets/right.png" /></span>
			</p>
			<p class="p4">
				<span class="wei2"><img src="../assets/icon4.png" /></span>
				<span class="wei3">我的看房记录</span>
				<span class="wei10"><img src="../assets/right.png" /></span>
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: none;
		vertical-align: baseline;
		font-family: "微软雅黑";
	}

	img {
		border: none;
	}

	a {
		text-decoration: none;
	}

	em {
		font-style: normal;
	}

	li {
		list-style: none;
	}

	html,
	body {
		background: #F0EFED;
		font-size: 10px;
	}

	.tou {
		width: 100%;
		height: 20rem;
		background: url(../assets/bg1.png) no-repeat;
		background-size: 100%;
		position: relative;
	}

	.wei {
		background: white;
	}

	.tou1 {
		float: right;
		margin-top: 0.5rem;
	}

	.tou2 img {
		width: 1.5rem;
		height: 1.5rem;
	}

	.tou2>p {
		margin-top: -0.4rem;
	}

	.tou2 {
		float: right;
		margin-right: 2rem;
		margin-top: 0.5rem;
		color: white;
		font-size: 1.5rem;
		text-align: center;
	}

	.tou3 {
		position: absolute;
		left: 50%;
		margin-left: -3.5rem;
		top: 50%;
		margin-top: -5rem;
	}

	.tou3>a>img {
		width: 7rem;
		height: 7rem;
	}

	.tou4 {
		width: 8rem;
		height: 3rem;
		border: 1px solid white;
		text-align: center;
		line-height: 3rem;
		color: white;
		font-size: 2rem;
		position: absolute;
		left: 50%;
		margin-left: -4rem;
		top: 70%;
		margin-top: -1.5rem;
		border-radius: 3px 3px 3px 3px;
	}

	.wei1>img {
		width: 1rem;
		height: 1.5rem;
	}

	.wei1 {
		float: right;
		margin-right: 1rem;
		line-height: 6rem;
	}

	.wei8>img {
		width: 1rem;
		height: 1.5rem;
	}

	.wei8 {
		float: right;
		margin-right: -1rem;
		line-height: 6rem;
	}

	.wei9>img {
		width: 1rem;
		height: 1.5rem;
	}

	.wei9 {
		float: right;
		margin-right: -1rem;
		line-height: 6rem;
	}

	.wei10>img {
		width: 1rem;
		height: 1.5rem;
	}

	.wei10 {
		float: right;
		margin-right: -1rem;
		line-height: 6rem;
	}

	.wei2 {
		display: inline-block;
		width: 3rem;
		height: 3rem;
		margin-left: 2rem;
		line-height: 3rem;
		float: left;
		line-height: 6rem;
	}

	.wei2>img {
		width: 1.8rem;
		height: 1.8rem;
	}

	.wei3 {
		display: inline-block;
		height: 2rem;
		line-height: 2rem;
		font-size: 2rem;
		margin-left: 1rem;
		line-height: 5rem;
		color: black;
	}

	.p1 {
		width: 100%;
		height: 5rem;
		border-bottom: 1px solid whitesmoke;
		border-top: 1px solid whitesmoke;
		margin-top: 0px;

	}

	.wei>p {
		width: 100%;
		height: 5rem;
		border-bottom: 1px solid whitesmoke;
		border-top: 1px solid whitesmoke;
	}
</style>
