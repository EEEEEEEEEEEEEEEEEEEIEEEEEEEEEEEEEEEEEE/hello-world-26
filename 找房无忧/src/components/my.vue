<template>
	<div>
		<header>
			<router-link to='/'><img src="../assets/logo.png" alt=""></router-link>
			<div>
				<router-link to='#'><img src="../assets/wo_02.png" alt=""></router-link>
				<router-link to="#"><img src="../assets/xiazai_03.png" alt=""></router-link>

			</div>
		</header>
		<section class="section">
			<span class="j4"><a href="/" style="color: black;">首页</a></span><span class="j5"><img src="../assets/right.png" /></span>
			<span class="j6">我的</span>

		</section>
		<footer>
			<div class="wei1">
				<span class="j7"><img src="../assets/urse2.png" /></span>
				<p class="j8">欢迎您，18536796288</p>
			</div>
			<div class="wei2">
				<p class="p1">
					<span class="wei3">
						<router-link to="/kanfang">我关注的房源</router-link>
					</span>
					<span class="wei4"><img src="../assets/right.png" /></span>
				</p>
				<p class="p2">
					<span class="wei3">
						<router-link to="/kanfang">我关注的小区</router-link>
					</span>
					<span class="wei4"><img src="../assets/right.png" /></span>
				</p>
				<p class="p3">
					<span class="wei3">我的看房记录</span>
					<span class="wei4"><img src="../assets/right.png" /></span>
				</p>
			</div>
		</footer>
		<div class="tou6">
			<a href="/">退出登录</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	header {
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		background: #FF8A00;
		display: flex;
		justify-content: space-around;
	}

	header img {
		height: 4rem;

	}

	.section {
		width: 100%;
		height: 4rem;
		position: relative;
		background-color: white;
	}

	.j4 {
		display: inline-block;
		position: relative;
		top: -1.5rem;
		font-size: 1.6rem;
		left: 1rem;
		text-align: center;
	}

	.j5 {
		margin-left: 2rem;
		margin-right: 0.5rem;
	}

	.j6 {
		display: inline-block;
		position: relative;
		top: -1.5rem;
		font-size: 1.6rem;
		left: 1rem;
		text-align: center;
	}

	section>span>img {
		width: 0.7rem;
		height: 100%;
		line-height: 4rem;
	}

	.wei1 {
		width: 100%;
		height: 13.5rem;
		background: url(../assets/bg2.png);
		background-size: 100% 100%;
		position: relative;
	}

	.j7>img {
		width: 6rem;
		height: 6rem;
		position: absolute;
		left: 50%;
		margin-left: -3rem;
		top: 50%;
		margin-top: -5rem;
	}

	.j8 {
		position: absolute;
		left: 22%;
		top: 50%;
		margin-top: 2rem;
		color: white;
		font-size: 1.6rem;
		text-align: center;
	}

	.wei2>p {
		width: 100%;
		height: 5rem;
		border-bottom: 1px solid whitesmoke;
		border-top: 1px solid whitesmoke;
		font-size: 1.5rem;
		line-height: 5rem;
	}

	.wei3 {
		margin-left: 1rem;
	}

	.wei4 {
		display: inline-block;
		height: 3rem;
		position: relative;
		left: 56%;
		top: 14%;
	}
	footer {
		width: 100%;
		background-color: white;
	}

	.tou6 {
		width: 80%;
		height: 5rem;
		margin: auto;
		border: 1px solid whitesmoke;
		margin-top: 2rem;
		text-align: center;
		line-height: 5rem;
		font-size: 1.4rem;
		color: #FF8A00;
		background-color: white;
	}

	.tou6>a {
		color: #FF8A00;
	}
</style>
