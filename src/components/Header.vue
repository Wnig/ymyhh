<template>
    <header>
		<div class="pc">
		  	<div class="cont">
				<a class="logo" @click="jump" ><img src="../assets/1.svg" alt=""></a>
		  		<nav>
		  			<ul>
						<li v-for="(navs, index) in navData" @click="selMenus(index)">
		              	<router-link :to="navs.links">{{navs.tit}}</router-link>
		            	</li>
		            	<li class="backstage">
		              	<a>后台登录</a>
		            	</li>
		  			</ul>
		  		</nav>
		  	</div>
		</div>
		<div class="mob">
		  	<div class="cont">
				<a class="logo" @click="jump" ><img src="../assets/1.svg" alt=""></a>
				<div class="list-con clearfix">
					<img @click="isShow" class="list" src="../assets/30.svg" alt="">
				</div>
				<div class="nav-con" v-if="show" @click="isShow">
			  		<nav>
			  			<ul>
							<li>
			              		<a @click="jump">首页</a>
			            	</li>
			            	<li>
			              		<a>后台登录</a>
			            	</li>
			  			</ul>
			  			<div class="hot">
				            <p>加盟细则请拨打加盟热线</p>
				            <h2>400-1668-622</h2>
				         </div>
			  		</nav>
				</div>
		  	</div>
		</div>
    </header>
</template>

<script>
let storage = window.sessionStorage;
export default {
  name: 'Header',
  data () {
    return {
    	navData: [],
      	num: '',
      	show: false
    }
  },
  created: function() {
    if(storage['selNumymyhh']) {
      this.num= storage['selNumymyhh'];
    } else {
      this.num = 0;
    };
  },
  methods: {
    selMenus(index) {
      storage['selNumymyhh'] = index;
      this.show = false;
    },
    isShow() {
      //点击：左侧菜单栏 收起-展开
      this.show = ! this.show;
    },
    jump() {
      storage['selNumymyhh'] = 0;
      this.show = false;
      this.$router.push({path: '/'});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {
		height: 10.94vw;
	}
	.cont {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 8.28vw;
		height: 10.94vw;
		margin-right: 5vw;
		cursor: pointer;
	}
	.logo img {
		display: block;
		width: 100%;
		height: 8.33vw;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		text-align: center;
		width: 70%;
	}
	nav li {
		margin: 0 4vw;	
	}
	nav li a {
		color: #999999;
		font-size: 1.3vw;
	}
	nav a {
		display: block;
		width: 11.41vw;
		height: 2.76vw;
		line-height: 2.76vw;
		cursor: pointer;
	}
	nav .btn_sel a {
		color: #FBBB02;
	}
	.backstage a {
		color: #FFFFFF;
	}
	.backstage {
		margin-left: 7vw;
		margin-right: -1vw;
		margin-top: -3.59vw;
		background: url('../assets/2.svg') center center no-repeat;
		background-size: 100% 100%;
	}
	.mob {
		display: none;
	}

	@media screen and (max-width: 750px) {
	    .mob {
	      	display: block;
	    }

	    header {
			height: 34vw;
		}
		.cont {
			height: 34vw;
		}
		.logo {
			width: 27.49vw;
			margin-right: 5vw;
		}
		.logo img {
			height: 27.33vw;
		}
		.list-con {
			width: 55%;
		}
		.list {
			float: right;
			width: 8.8vw;
		}
		.nav-con {
			position: fixed;
	        left: 0;
	        top: 0;
	        width: 100%;
	        height: 100vh;
	        background: rgba(0, 0, 0, 0.65);
	        z-index: 9999999999;
		}
		nav {
			position: relative;
			text-align: left;
			width: 61.67vw;
	        height: 100vh;
	        background: #FFFFFF;
	        box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.44);
		}
		nav ul {
			width: 100%;
			padding-top: 16.64vh;
			padding-left: 7.47vw;
		}
		nav li {
			width: 100%;
			margin: 0 0 7.83vh 0;
		}
		nav li a {
			display: block;
			width: 100%;
			height: 100%;
			color: #6A6A6A;
			line-height: 5vw;
			font-size: 4.8vw;
			font-family: 'PingFangSC-Regular';
		}
		nav p {
	      margin-bottom: 1.05vh;
	      color: #797979;
	      font-size: 3.2vw;
	    }
	    nav h2 {
	      color: #000000;
	      line-height: 6.67vw;
	      font-size: 6.5vw;
	      font-family: 'PingFangSC-Semibold';
	    }
	    nav .hot {
	      position: absolute;
	      left: 7.47vw;
	      bottom: 9.45vh;
	    }
	}
</style>
