<template>
	<div>
		<header>
			<div>
				<a href="/"><img src="../assets/logo.jpg"></a>
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
				<router-link to="#" tag='li'><span>注册</span></router-link>
			</ul>
		</nav>
		<section>
			<input type="text" class="tel" name="" id="" value="" placeholder="请输入手机号码"><button type="button">发送验证码</button>
			<input type="text" name="" id="yanzhengma" value="" placeholder="请输入短信中的验证码">
			<input type="password" name="" id="pwd" value="" placeholder="输入新密码">
		</section>
		<footer>
			<button type="button">立即注册</button>
		</footer>
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
		width: 65%;
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
		font-size: 1.6rem;
		/* border:0.01rem solid black; */
		color: gray;
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
		height: 12.1rem;
		border-bottom: 0.01rem solid gray;
		position: relative;
	}

	section input {
		width: 95%;
		height: 4rem;
		font-size: 1.6rem;
		border-bottom: 0.01rem solid #d8d8d8;
		padding-left: 5%;
	}

	section button {
		width: 9rem;
		height: 3.5rem;
		position: absolute;
		top: 2%;
		right: 5%;
		background: white;
		border: 0.01rem solid #d8d8d8;
		font-size: 1.4rem;
	}

	footer {
		width: 100%;
		background: #F0EFED;
		position: relative;
	}

	footer>button {
		width: 92%;
		height: 5rem;
		background: #FF8A00;
		margin: 4%;
		font-size: 1.8rem;
		color: white;
	}
</style>
