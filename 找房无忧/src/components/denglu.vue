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
				<router-link to="#" tag='li'><span>登录</span></router-link>
			</ul>
		</nav>
		<section>
			<ul>
				<li class="a" id="a" @click="toggle()">普通登录
					<div class="aa">
						<input type="text" class="tel" placeholder="请输入手机号码" />
						<input type="password" name="" id="pwd" value="" placeholder="请输入密码" />
					</div>
				</li>
				<li class="b" id="b" @click="toggle()">验证码快捷登录
					<div class="bb">
						<input type="text" class="tel" placeholder="请输入手机号码" /><button type="button">发送验证码</button>
						<input type="text" name="" id="yanzhengma" value="" placeholder="请输入短信中的验证码" />
					</div>
				</li>
			</ul>
		</section>
		<footer>
			<router-link to="/my" tag="button" class="a1">立即登录</router-link>
			<router-link to="/my" tag="button" class="b1">验证并登录</router-link>
			<router-link to='/zhuce' class="c">立即注册</router-link>
			<router-link to='/wjmm' class="d">忘记密码</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

			toggle() {
				var a = document.getElementById("a");
				var b = document.getElementById("b");
				var aa = document.getElementsByClassName('aa');
				var bb = document.getElementsByClassName('bb');
				var a1 = document.getElementsByClassName('a1');
				var b1 = document.getElementsByClassName('b1');

				// 	a[0].style.borderColor='#d8d8d8';
				// 	b[0].style.borderColor='#FF8A00';

				if ((a.className == 'a') && (b.className == 'b')) {
					b.className = 'a';
					a.className = 'b';
					aa[0].style.display = 'none';
					bb[0].style.display = 'block';
					a1[0].style.display = 'none';
					b1[0].style.display = 'block';

				} else {
					b.className = 'b';
					a.className = 'a';
					aa[0].style.display = 'block';
					bb[0].style.display = 'none';
					a1[0].style.display = 'block';
					b1[0].style.display = 'none';
				}

			}
		}
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
		font-size: 1.6rem;
		/* border:0.01rem solid black; */
		color: gray;
	}

	nav img {
		width: 70%;
		height: 100%;
	}

	.liright {
		width: 5%;
	}

	section {
		width: 100%;
		height: 14.77rem;
		border-bottom: 0.01rem solid gray;
		position: relative;
		background: white;
	}

	section>ul {
		width: 100%;
		height: 5rem;
		display: flex;
	}

	section>ul>li {
		width: 50%;
		line-height: 5rem;
		border-bottom: 0.5rem solid #d8d8d8;
		text-align: center;
		font-size: 2rem;
		cursor: pointer;
	}

	section input {
		width: 180%;
		height: 4rem;
		font-size: 1.6rem;
		border-bottom: 0.01rem solid #d8d8d8;
		/* border:0.01rem solid black; */
		margin-left: 10%;
	}

	section input:last-child {
		border: none;
	}

	.a {
		border-bottom: 0.5rem solid #FF8A00;
	}

	.b {
		border-bottom: 0.5rem solid #d8d8d8;

	}

	.aa {
		width: 100%;
	}

	.bb {
		width: 15rem;
		margin-left: -100%;
		display: none;
	}

	.bb>button {
		width: 9rem;
		height: 3.5rem;
		position: absolute;
		top: 40%;
		right: 5%;
		background: white;
		border: 0.01rem solid #d8d8d8;
		font-size: 1.5rem;
	}

	.ab {
		position: relative;
		bottom: 0.72rem;
	}

	footer {
		width: 100%;
		height: 34.7rem;
		/* border:0.01rem solid black; */
		background: #F0EFED;
	}

	footer>button {
		width: 92%;
		height: 5rem;
		background: #FF8A00;
		margin: 4%;
		font-size: 1.8rem;
		color: white;
	}

	.b1 {
		display: none;
	}

	.c {
		margin-left: 4%;
		color: #FF8A00;
		font-size: 1.6rem;
	}

	.d {
		float: right;
		margin-right: 4%;
		color: gray;
		font-size: 1.6rem;
	}
</style>
