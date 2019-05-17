<template>
	<div>
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
		<!-- 搜索框 -->
		<aside>
			<div class="two">
				<input type="text" id="" value="" placeholder="请输入小区或商区名称" />
				<a href=""><img src="../assets/search_03.png"></a>
			</div>
		</aside>
		<!-- 导航 -->
		<nav>
			<ul>
				<li>区域<span>
						▼
					</span>

					<div class="area" style="display: none;">
						<div class="area1">
							<ul>
								<li class="red">区域</li>
								<li>地铁</li>

							</ul>
						</div>
						<div class="area2">
							<ul>
								<li>附近</li>
								<li>不限</li>
								<li>朝阳</li>
								<li>海淀</li>
								<li>昌平</li>
								<li>丰台</li>
								<li>石景山</li>
							</ul>
							<ol style="display: none;">
								<li>附近</li>
								<li>666</li>
								<li>666</li>
								<li>666</li>
								<li>666</li>
								<li>666</li>
								<li>666</li>
							</ol>
						</div>
						<div class="area3">
							<ul>
								<li>不限</li>
								<li>安贞</li>
								<li>奥林匹克公园</li>
								<li>百子湾</li>
								<li>北工大</li>
								<li>北苑</li>
								<li>石景山</li>
							</ul>
						</div>
					</div>
				</li>
				<li>价格<span>
						▼
					</span>
					<div class="prive">
						<ul>
							<li>不限</li>
							<li>100万以下</li>
							<li>100万-150万</li>
							<li>150万-200万</li>
							<li>200万-250万</li>
							<li>250万-300万</li>
						</ul>
						<p>自定义价格
							<span id="">
								最小
							</span>
							<span id="">
								最多
							</span>
							<span id="queding">
								确定
							</span>
						</p>
					</div>
				</li>

				<li>房型<span>
						▼
					</span>
					<div class="fangxin">
						<ul>
							<li>不限</li>
							<li><label for="l1">
									1室
								</label>
								<input type="checkbox" name="" id="l1" value="" />
							</li>
							<li><label for="l2">
									2室
								</label>

								<input type="checkbox" name="" id="l2" value="" />
							</li>
							<li><label for="l3">
									3室
								</label>

								<input type="checkbox" name="" id="l3" value="" />
							</li>
							<li><label for="l4">
									4室
								</label>

								<input type="checkbox" name="" id="l4" value="" />
							</li>
							<li><label for="l5">
									5室
								</label>

								<input type="checkbox" name="" id="l5" value="" />
							</li>
						</ul>
						<h2>确定</h2>
					</div>
				</li>
				<li>更多<span>
						▼
					</span>
					<div class="more">
						<div class="more1">
							<p>区域</p>
							<ul>
								<li>南</li>
								<li>南北</li>
								<li>东</li>
								<li>西</li>
								<li>北</li>
							</ul>
						</div>
						<div class="more1">
							<p>面积（平米）</p>
							<ul>
								<li>50以下</li>
								<li>50-70</li>
								<li>70-90</li>
								<li>90-110</li>
								<li>110-130</li>
								<li>130-150</li>
								<li>150-200</li>
								<li>200以上</li>
							</ul>
						</div>
						<div class="more1 more2">
							<p>标签</p>
							<ul>
								<li>学区房</li>
								<li>地铁房</li>
								<li>不限购</li>
								<li>满两年</li>
								<li>学区房</li>
								<li>地铁房</li>
								<li>不限购</li>
								<li>满两年</li>
								<li>有钥匙</li>
							</ul>
						</div>
						<div class="more1 more3">
							<p>楼龄</p>
							<ul>
								<li>5年以内</li>
								<li>10年以内</li>
								<li>10-20年</li>
								<li>20年以上</li>
							</ul>
						</div>
						<div class="more1 more3 more4">
							<p>楼层</p>
							<ul>
								<li>低楼层</li>
								<li>中楼层</li>
								<li>高楼层</li>
							</ul>
						</div>
						<h4>清空条件</h4>
						<p>确定</p>
					</div>
				</li>
			</ul>
		</nav>
		<!-- 主体 -->
		<section>
			<ul>
				<li>
					<div class="fifth">
						<img src="../assets/img1.png" alt="">
						<div class="three">
							<h2>西便门外大街 2室1厅 89平</h2>
							<h4>南北 高楼层/6层</h4>
							<p>签约价格：13244元/平
								<span id="">
									1100万
								</span>
							</p>
							<p>签约日期：2015年11月10日</p>
						</div>
					</div>
					<div class="seventh">
					</div>

				</li>
				<li>
					<div class="fifth">
						<img src="../assets/img2.png" alt="">
						<div class="three">
							<h2>金桥国际 1室1厅 63平</h2>
							<h4>南北 高楼层/6层</h4>
							<p>签约价格：13244元/平
								<span id="">
									900万
								</span>
							</p>
							<p>签约日期：2015年11月10日</p>
						</div>
					</div>
					<div class="seventh">
					</div>

				</li>
				<li>
					<div class="fifth">
						<img src="../assets/img3.png" alt="">
						<div class="three">
							<h2>花涧溪二期 2室2厅 90平</h2>
							<h4>南北 高楼层/6层</h4>
							<p>签约价格：13244元/平
								<span id="">
									1300万
								</span>
							</p>
							<p>签约日期：2015年11月10日</p>
						</div>
					</div>

				</li>
			</ul>
		</section>
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

			}
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
		border: 0.1rem solid gray;
		background: white;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.two input {
		width: 80%;
		height: 3rem;
		border-right: 0.1rem solid gray;
		font-size: 1.2rem;
	}

	.two img {
		width: 3rem;
		height: 3rem;
	}

	nav {
		background: white;
	}

	nav>ul {
		width: 100%;
		height: 3rem;
		border-top: 0.1rem solid gray;
		border-bottom: 0.1rem solid gray;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 1.2rem;
		position: relative;

	}

	nav>ul>li {
		width: 25%;
		height: 2rem;
		text-align: center;
		line-height: 2rem;
		cursor: pointer;
		position: relative;
	}

	nav>ul>li:nth-child(n+2) {
		border-left: 0.1rem solid gray;

	}

	nav ul li span {
		display: inline-block;
		color: gray;

	}

	section {
		width: 100%;
		font-size: 1rem;
		background: white;
		margin-top: -2vh;
	}

	section ul {
		width: 94%;
		height: 32rem;
		/* border: 0.1rem solid gray; */
		margin: 3%;
	}

	.seventh {
		margin-top: 1rem;
		margin-bottom: 1rem;
		position: relative;
		width: 100%;
		height: 0.08rem;
		background: orange;
	}

	.fifth {
		width: 100%;
		display: flex;
		padding-top: 0.6rem;

	}

	.fifth img {
		margin-right: 0.5rem;
		width: 27vw;
		height: 16vh;
		/* border-radius: 50%; */
	}

	.three {
		width: 80%;
	}

	.three h2 {
		font-size: 1.2rem;

	}

	.three h4 {
		padding: 0.6rem;
		text-indent: -0.6rem;
	}

	.three p {
		color: gray;
		padding-bottom: 0.6rem;
		display: flex;
	}

	.three p span {
		color: orange;
		padding-left: 2rem;
		font-size: 1rem;
	}

	footer {
		width: 100%;
		height: 14rem;
		background: #2F3130;
		margin-top: -1rem;
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

	.fivty {
		width: 100%;
		height: 4rem;
	}

	.orange {
		color: orange;
	}

	.transform {
		color: orange;
		transform: rotate(180deg);
	}

	.area {
		width: 400%;
		height: 20rem;
		/* border: 0.1rem solid black; */
		background: white;
		position: absolute;
		top: 130%;
		z-index: 100;
		display: flex;
		color: black;
	}

	.area1 {
		width: 25%;
		height: 20rem;
		/* border: 0.1rem solid black; */
		background: #F0F0F0;

	}

	.area1 li {
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		font-size: 2rem;
		cursor: pointer;
	}

	.area1 .red {
		background: white;
		color: orange;

	}

	.area2 {
		width: 25%;
		height: 20rem;
		/* border: 0.1rem solid black; */
	}

	.area2 ul {
		width: 80%;
		height: 20rem;
		border-right: 0.1rem solid gray;
		margin-left: 20%;

	}

	.area2 ol {
		width: 80%;
		height: 20rem;
		border-right: 0.1rem solid gray;
		margin-left: 20%;

	}

	.area2 li {
		border-bottom: 0.1rem solid gray;
		width: 100%;
		height: 2.8rem;
		line-height: 2.8rem;
		font-size: 2rem;
	}

	.area2 li:first-child {
		border: 0;
	}

	.area2 li:last-child {
		border: 0;
	}

	.area3 {
		width: 50%;
		height: 20rem;
		/* border: 0.1rem solid black; */
	}

	.area3 ul {
		width: 80%;
		height: 20rem;

	}

	.area3 li {
		border-bottom: 0.1rem solid gray;
		width: 100%;
		height: 2.8rem;
		line-height: 2.8rem;
		font-size: 2rem;
		margin-left: 20%;
	}

	.area3 li:first-child {
		border: 0;
	}

	.area3 li:last-child {
		border: 0;
	}

	.prive {
		width: 400%;
		height: 26rem;
		/* border: 0.1rem solid black; */
		background: white;
		position: absolute;
		top: 130%;
		left: -90%;
		z-index: 100;
		color: gray;
		display: none;
	}

	.prive li {
		width: 100%;
		height: 3rem;
		border-bottom: 0.1rem solid gray;
		line-height: 3rem;
		text-align: left;
		font-size: 2rem;
	}

	.prive p {
		width: 100%;
		height: 6rem;
		line-height: 6rem;
		text-align: left;
		font-size: 2rem;
		color: black;
	}

	.prive p span {
		font-size: 1rem;
		height: 2rem;
		line-height: 2rem;
		background: wheat;
		margin-top: 0.5rem;
	}

	#queding {
		background: #FD8901;
		color: white;
	}

	.fangxin {
		width: 400%;
		height: 24rem;
		/* border: 0.1rem solid black; */
		background: white;
		position: absolute;
		top: 130%;
		right: -108%;
		z-index: 100;
		color: gray;
		display: none;
	}

	.fangxin li {
		width: 100%;
		height: 3rem;
		border-bottom: 0.1rem solid gray;
		line-height: 3rem;
		/* text-align: left; */
		margin-left: 1rem;
		font-size: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.fangxin li input {
		width: 2rem;
		height: 2rem;
		margin-right: 3rem;
	}

	.fangxin h2 {
		height: 4rem;
		line-height: 4rem;
		color: white;
		background: #FF8A00;
		cursor: pointer;
	}

	.more {
		width: 400%;
		height: 88rem;
		/* border: 0.1rem solid black; */
		background: white;
		position: absolute;
		top: 130%;
		right: 0;
		z-index: 100;
		display: none;
	}

	.more1 {
		width: 100%;
		height: 14rem;
		border-bottom: 0.1rem solid #EDEDED;
		padding: 1rem;
	}

	.more1 p {
		height: 3rem;
		font-size: 2rem;
		text-align: left;
	}

	.more1 ul {
		width: 92%;
		height: 10rem;
		/* border: 0.1rem solid black; */
		display: flex;
		flex-flow: wrap;
		align-items: center;
		justify-content: space-between;
	}

	.more1 li {
		width: 20%;
		height: 3rem;
		line-height: 3rem;
		border: 0.1rem solid gray;
		border-radius: 0.5rem;
		color: gray;
		cursor: pointer;
	}

	.more2 {
		height: 16rem;

	}

	.more2 ul {
		height: 12rem;

	}

	.more3 {
		height: 10rem;

	}

	.more3 ul {
		height: 6rem;

	}

	.more4 ul {
		height: 6rem;
		justify-content: flex-start;

	}

	.more4 li {
		margin-right: 1rem;

	}

	.more h4 {
		height: 6rem;
		line-height: 6rem;
		color: gray;
		font-size: 2rem;
		font-weight: normal;
		cursor: pointer;

	}

	.more>p {
		height: 4rem;
		line-height: 4rem;
		color: white;
		font-size: 2rem;
		background: #FF8A00;
		cursor: pointer;

	}

	.gray {
		color: red;
		border-color: red;
	}
</style>
