<template>
  <div class="home" onresize="resize_canvas()">
  	<div class="pc">
		<div class="selection selection-1">
			<video class="video1" src="../assets/video_01.mp4" autoplay="" loop=""></video>
			<div class="con">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<h1>麻辣烫新兴潮流品牌“<img src="../assets/3.svg" alt="">”首轮加盟<br/>
				  		火热进行中<br/>
				  		… …</h1>
				  		<div class="p_con">
				  			<p class="p_left"><strong>10</strong>个名额免费开放</p><p><strong>0</strong>门槛助您创业！</p>
				  		</div>
				  		<div class="down-con" @click="slideDown">
					  		<div class="down"></div>
					  		<div class="slidedown">Scroll Down</div>
				  		</div>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-2">
			<div class="cont">
				<div class="cont_">
					<div class="con_p">
						<ul class="hover_ul">
							<li class="li_01"></li>
							<li class="li_02"></li>
							<li class="li_03"></li>
							<li class="li_04"></li>
							<li class="li_05"></li>
							<li class="li_06"></li>
							<li class="li_07"></li>
							<li class="li_08"></li>
							<li class="li_09"></li>
						</ul>
						<div class="con_p_">
							<h1>越麦越红火主打<br/>麻辣烫品牌<strong>“汤小盟”</strong></h1>
							<h4>—— 时下最潮最流行的特色麻辣烫 ——</h4>
							<p><strong>“汤小盟”</strong>作为越麦越红火旗下热门主打品牌，迎合了现代都市人风格、口味、流行元素的多重需要，结合了正宗重庆麻辣烫的风味、来自星星的你泡菜汤底、中式香浓营养大骨高汤汤底以及风靡全球的东南亚咖喱味汤底，给食客带来时下潮流和独特风味的双重味蕾体验。3种风味汤底搭配百变菜系，塑造了大受都市人青睐的潮流特色麻辣烫“汤小盟”</p>
							<img src="../assets/7.svg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-3">
			<div class="cont">
				<div class="cont_">
					<div class="disrc-con">
						<h2 class="title">产品介绍</h2>
						<p class="disrc">经过8道工序，精选一百多种优质食材，添加47种中草药秘制底料，选用上等骨头炖制成鲜味汤底，百变菜系荤素搭配。</p>
					</div>
					<div class="cons">
						<div class="hero-canvas">
							<canvas id="c" width="" height="287"></canvas>
						</div>
						<img src="../assets/22.png" alt="">
						<div class="list_div list_01">
							<div class="list_div_">
								中式香浓<br/>营养大骨<br/>高汤汤底
							</div>
						</div>
						<div class="list_div list_02">
							<div class="list_div_">
								正宗重庆<br/>麻辣烫汤底
							</div>
						</div>
						<div class="list_div list_03">
							<div class="list_div_">
								来自星星的你<br/>泡菜汤底
							</div>
						</div>
						<div class="list_div list_04">
							<div class="list_div_">
								东南亚<br/>咖喱味汤底
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-4">
			<div id="swiperCon" class="swiper-container">
          		<div class="swiper-wrapper">
            		<div class="swiper-slide">
            			<div class="cont bg_01 clearfix">
            				<div class="left_div">
            					<transition name="fade" enter-active-class="fadeInUp" leave-active-class="fadeOutUp">
            						<div v-if="isShow" class="con">
		            					<h2>高效运营支持</h2>
		            					<h4>汤小盟9大运营支撑体系</h4>
		            					<p>整店输出模式，傻瓜式操作，标准化轻运营！保证产品品质和出餐效率，让加盟商轻松做老板！</p>
            						</div>
            					</transition>
            				</div>
            				<transition name="fade" enter-active-class="fadeInUp" leave-active-class="fadeOutUp">
								<div class="img_con" v-if="isShow">
									<img src="../assets/12.png" alt="">
								</div>
            				</transition>
            			</div>
					</div>
					<div class="swiper-slide">
						<div class="cont bg_02 clearfix">
            				<div class="left_div">
								<transition name="fade" enter-active-class="fadeInDown" leave-active-class="fadeOutDown">
									<div v-if="isShow_02" class="con">
										<h2>投资分析</h2>
	            						<h4>轻松加盟，年入百万！</h4>
									</div>
								</transition>
            				</div>
            				<transition name="fade" enter-active-class="fadeInDown" leave-active-class="fadeOutDown">
								<div class="img_con" v-if="isShow_02">
									<img src="../assets/16.png" alt="">
								</div>
            				</transition>
            			</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
		        <div class="pre_next">
		            <i class="icon-13 left_ico"></i>Next <i class="icon-14 right_ico"></i>  
		        </div>
			</div>
		</div>
		<div class="selection selection-5">
			<div class="cont">
				<div class="cont_">
					<h2 class="title">加盟方式</h2>
					<div class="conts">
						<div class="list_div list_div_01">
							<div class="list_div_">
								<h1>A</h1>
								<p>加盟商100%控股加盟</p>
							</div>
						</div>
						<div class="list_div list_div_02">
							<div class="list_div_">
								<h1>B</h1>
								<p>加盟商90%控股+公司总部10%技术入股</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-6">
			<div class="cont">
				<div class="circle-nav" style="opacity: 1;">
				    <div id="steps-menu" class="nav-elems">
				    	<div data-id="title-1" class="is-active">
				    		<a data-page="1" class="nav-el nav-el-1 visible white active"></a>
				    	</div>
				    	<div data-id="title-2" >
				    		<a data-page="2" class="nav-el nav-el-2 visible white active"></a>
				    	</div>
				    	<div data-id="title-3">
				    		<a data-page="3" class="nav-el nav-el-3 visible white active"></a>
				    	</div>
				    	<div data-id="title-4">
				    		<a data-page="4" class="nav-el nav-el-4 visible white active"></a>
				    	</div>
				    	<div data-id="title-5">
				    		<a data-page="5" class="nav-el nav-el-5 visible white active"></a>
				    	</div>
				    	<div data-id="title-6" >
				    		<a data-page="6" class="nav-el nav-el-6 visible white active"></a>
				    	</div>
				    	<div data-id="title-7">
				    		<a data-page="7" class="nav-el nav-el-7 visible white active"></a>
				    	</div>
				    	<div data-id="title-8">
				    		<a data-page="8" class="nav-el nav-el-8 visible white active"></a>
				    	</div>
				    </div>
				    <div class="titles">
				        <div class="sub">
							<span class="active-text">加盟流程</span>	        
						</div>
				        <div class="main">
			            	<h2 class="title-1 next-text active-text"><strong>01.</strong><br>咨询加盟</h2>
			            	<h2 class="title-2 next-text"><strong>02.</strong><br>合作签约</h2>
			            	<h2 class="title-3 next-text"><strong>03.</strong><br>选址评估</h2>
			            	<h2 class="title-4 next-text"><strong>04.</strong><br>设计装修</h2>
			            	<h2 class="title-5 next-text"><strong>05.</strong><br>培训学习</h2>
			            	<h2 class="title-6 next-text"><strong>06.</strong><br>门店落地</h2>
			            	<h2 class="title-7 next-text"><strong>07.</strong><br>开业营业</h2>
			            	<h2 class="title-8 next-text"><strong>08.</strong><br>后续服务</h2>	
			            </div>
				    </div>
				    <!-- <div class="arrows show">
				    	<div class="arrow up disabled"><i class="fa fa-angle-up"></i></div>
				     	<div class="arrow down"><i class="fa fa-angle-down"></i></div>
				    </div> -->
				</div>
				<div class="hot-con">
					<p>加盟细则请拨打加盟热线</p>
					<h2>400-1668-622</h2>
				</div>
			</div>
		</div>
		<div class="selection selection-7">
			<div class="cont">
				<div class="cont_">
					<img src="../assets/1.svg" alt="">
					<div class="conts">
						<div class="conts_">
							<h2 class="title">关于我们</h2>
							<p>越麦越红火餐饮管理有限公司，是一家特许经营专业从事麻辣小吃的大型连锁企业。企业坚持走“民以食为天，食以安为先”的发展道路；秉承着“绿色健康，美食营养，优质诚信，共赢发展”的企业理念；坚守不断创新，努力进取的职业精神。旗下拥有麻城辣府、汤小盟、汤小资三个品牌，引领新潮餐饮模式。越麦越红火愿与合作伙伴及加盟商家携手共进，利益共赢，共同创造精彩纷呈的人生事业。</p>
						</div>
					</div>
				</div>
			</div>
			<app-footer></app-footer>
		</div>
  	</div>
  	<div class="mob">
  		<div class="selection selection-1">
			<img class="video1" src="../assets/video_01.gif"></img>
			<div class="con">
				<app-header></app-header>
			  	<div class="cont">
				  	<div class="cont_">
				  		<h1>麻辣烫新兴潮流品牌<br/>“<img src="../assets/3.svg" alt="">”首轮<br/>
				  		加盟火热进行中<br/>
				  		… …</h1>
				  		<div class="p_con">
				  			<div class="con_p">
				  				<p>
				  					<strong>10</strong><span>10个名额免费开放</span>
				  				</p>
			  				</div>
				  			<div class="con_p">
				  				<p>
				  					<strong>0</strong><span>0门槛助您创业！</span>
				  				</p>
				  			</div>
				  		</div>
				  		<div class="down-con" @click="slideDown">
					  		<div class="down"></div>
					  		<div class="slidedown">Scroll Down</div>
				  		</div>
				  	</div>
			  	</div>
			</div>
		</div>
		<div class="selection selection-2">
			<div class="cont">
				<div class="cont_">
					<div class="con_p">
						<div class="con_p_">
							<h1>越麦越红火主打<br/>麻辣烫品牌<strong>“汤小盟”</strong></h1>
							<h4>—— 时下最潮最流行的特色麻辣烫 ——</h4>
							<p><strong>“汤小盟”</strong>作为越麦越红火旗下热门主打品牌，迎合了现代都市人风格、口味、流行元素的多重需要，结合了正宗重庆麻辣烫的风味、来自星星的你泡菜汤底、中式香浓营养大骨高汤汤底以及风靡全球的东南亚咖喱味汤底，给食客带来时下潮流和独特风味的双重味蕾体验。3种风味汤底搭配百变菜系，塑造了大受都市人青睐的潮流特色麻辣烫“汤小盟”</p>
							<img src="../assets/7.svg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-3">
			<div class="cont">
				<div class="cont_">
					<div class="disrc-con">
						<h2 class="title">产品介绍</h2>
						<p class="disrc">经过8道工序，精选一百多种优质食材，添加47种中草药秘制底料，选用上等骨头炖制成鲜味汤底，百变菜系荤素搭配。</p>
					</div>
					<div class="cons">
						<div class="hero-canvas">
						</div>
						<img src="../assets/22.png" alt="">
						<div class="list_div list_01">
							<div class="list_div_">
								中式香浓<br/>营养大骨<br/>高汤汤底
							</div>
						</div>
						<div class="list_div list_02">
							<div class="list_div_">
								正宗重庆<br/>麻辣烫汤底
							</div>
						</div>
						<div class="list_div list_03">
							<div class="list_div_">
								来自星星的你<br/>泡菜汤底
							</div>
						</div>
						<div class="list_div list_04">
							<div class="list_div_">
								东南亚<br/>咖喱味汤底
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-4">
			<div id="swiper" class="swiper-container">
          		<div class="swiper-wrapper">
            		<div class="swiper-slide">
            			<div class="cont bg_01 clearfix">
    						<div class="con">
            					<h2>高效运营支持</h2>
            					<h4>汤小盟9大运营支撑体系</h4>
            					<p>整店输出模式，傻瓜式操作，标准化轻运营！保证产品品质和出餐效率，让加盟商轻松做老板！</p>
            					<img src="../assets/006.png" alt="">
    						</div>
            			</div>
					</div>
					<div class="swiper-slide">
						<div class="cont bg_02 clearfix">
							<div class="con">
								<h2>投资分析</h2>
        						<h4>轻松加盟，年入百万！</h4>
        						<img src="../assets/008.png" alt="">
							</div>
            			</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="selection selection-5">
			<div class="cont">
				<div class="cont_">
					<h2 class="title">加盟方式</h2>
					<div class="list_div list_div_1">
						<div class="list_div_">
							<h1>A</h1>
							<p>加盟商100%控股加盟</p>
						</div>
					</div>
					<div class="list_div">
						<div class="list_div_">
							<h1>B</h1>
							<p>加盟商90%控股+公司总部10%技术入股</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selection selection-6">
			<div class="cont">
				<div class="circle-nav" style="opacity: 1;">
				    <div id="steps-menus" class="nav-elems">
				    	<div data-id="title-1" class="is-active">
				    		<a data-page="1" class="nav-el nav-el-1 visible white active"></a>
				    	</div>
				    	<div data-id="title-2" >
				    		<a data-page="2" class="nav-el nav-el-2 visible white active"></a>
				    	</div>
				    	<div data-id="title-3">
				    		<a data-page="3" class="nav-el nav-el-3 visible white active"></a>
				    	</div>
				    	<div data-id="title-4">
				    		<a data-page="4" class="nav-el nav-el-4 visible white active"></a>
				    	</div>
				    	<div data-id="title-5">
				    		<a data-page="5" class="nav-el nav-el-5 visible white active"></a>
				    	</div>
				    	<div data-id="title-6" >
				    		<a data-page="6" class="nav-el nav-el-6 visible white active"></a>
				    	</div>
				    	<div data-id="title-7">
				    		<a data-page="7" class="nav-el nav-el-7 visible white active"></a>
				    	</div>
				    	<div data-id="title-8">
				    		<a data-page="8" class="nav-el nav-el-8 visible white active"></a>
				    	</div>
				    </div>
				    <div class="titles">
				        <div class="sub">
							<span class="active-text">加盟流程</span>	        
						</div>
				        <div class="main">
			            	<h2 class="title-1 next-text active-text"><strong>01.</strong><br>咨询加盟</h2>
			            	<h2 class="title-2 next-text"><strong>02.</strong><br>合作签约</h2>
			            	<h2 class="title-3 next-text"><strong>03.</strong><br>选址评估</h2>
			            	<h2 class="title-4 next-text"><strong>04.</strong><br>设计装修</h2>
			            	<h2 class="title-5 next-text"><strong>05.</strong><br>培训学习</h2>
			            	<h2 class="title-6 next-text"><strong>06.</strong><br>门店落地</h2>
			            	<h2 class="title-7 next-text"><strong>07.</strong><br>开业营业</h2>
			            	<h2 class="title-8 next-text"><strong>08.</strong><br>后续服务</h2>	
			            </div>
				    </div>
				</div>
				<div class="hot-con">
					<p>加盟细则请拨打加盟热线</p>
					<h2>400-1668-622</h2>
				</div>
			</div>
		</div>
		<div class="selection selection-7">
			<div class="cont">
				<div class="cont_">
					<img src="../assets/1.svg" alt="">
					<div class="conts">
						<div class="conts_">
							<h2 class="title">关于我们</h2>
							<p>越麦越红火餐饮管理有限公司，是一家特许经营专业从事麻辣小吃的大型连锁企业。企业坚持走“民以食为天，食以安为先”的发展道路；秉承着“绿色健康，美食营养，优质诚信，共赢发展”的企业理念；坚守不断创新，努力进取的职业精神。旗下拥有麻城辣府、汤小盟、汤小资三个品牌，引领新潮餐饮模式。越麦越红火愿与合作伙伴及加盟商家携手共进，利益共赢，共同创造精彩纷呈的人生事业。</p>
						</div>
					</div>
				</div>
			</div>
			<app-footer></app-footer>
		</div>
		<div id="top" class="top"></div>
  	</div>
  </div>
</template>

<script>
import '../../static/js/circle.js'
import '../../static/css/videointro.css'

import Header from './Header'
import Footer from './Footer'

export default {
	name: 'Home',
	data () {
	    return {
	    	isShow: false,
	    	isShow_02: false,
	    }
	},
	created() {
		this.isShow = true;
	},
    methods: {
	    slideDown() {
	      let downHeight = document.documentElement.clientHeight || document.body.clientHeight;
	      window.scrollTo(0, downHeight);
	      this.slideShow = true;
	    }
    },
	components: {
	   'app-header': Header,
	   'app-footer': Footer
	},
    mounted() {
	  	// 波浪滚动
	  	function resize_canvas(){  
	        canvas  =  document.getElementById('canvas');  
	        if(canvas.width < window.innerWidth) {  
	            canvas.width  = window.innerWidth;  
	        }  
	    }

	    function swave() {
		  	var canvas = document.getElementById('c');
		    var ctx = canvas.getContext('2d');
		    var range = 60;
		 
		    //range控件信息
		    var rangeValue = range;
		    var nowRange = 0; //用于做一个临时的range
		 
		    //画布属性
		    var mW = canvas.width = 1920;
		    var mH = canvas.height = 287;
		    var lineWidth = 2;
		 
		    //圆属性
		    var r = mH / 2; //圆心
		    var cR = r - 16 * lineWidth; //圆半径
		 
		    //Sin 曲线属性
		    var sX = 0;
		    var sY = mH / 2;
		    var axisLength = mW; //轴长
		    var waveWidth = 0.018 ; //波浪宽度,数越小越宽 
		    var waveHeight = 10; //波浪高度,数越大越高
		    var speed = 0.20; //波浪速度，数越大速度越快
		    var xOffset = 10; //波浪x偏移量
		 
		    ctx.lineWidth = lineWidth;
		 
		    //画sin 曲线函数
		    var drawSin = function(xOffset) {
		   		ctx.save();
		   		var points=[]; //用于存放绘制Sin曲线的点
		   		ctx.beginPath();
		   		//在整个轴长上取点
		   		for(var x = sX; x < sX + axisLength; x += 20 / axisLength) {
			    	//此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
			    	var y = -Math.sin((sX + x) * waveWidth + xOffset);
			    	var dY = mH * (1 - nowRange / 100 );
			 
				    points.push([x, dY + y * waveHeight]);
				    ctx.lineTo(x, dY + y * waveHeight);  
			    }
			 
			    //封闭路径
			    ctx.lineTo(axisLength, mH);
			    ctx.lineTo(sX, mH);
			    ctx.lineTo(points[0][0],points[0][1]);
			    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
			    ctx.fill();
			 
			    ctx.restore();
			};

		  	var render = function() {
		   		ctx.clearRect(0, 0, mW, mH);
		 
			   	rangeValue = range;

			   	if(nowRange <= rangeValue) {
				    var tmp = 1;
				    nowRange += tmp;
			   	}

			   	if(nowRange > rangeValue) {
				    var tmp = 1;
				    nowRange -= tmp;
			   	}

				drawSin(xOffset);

		    	xOffset += speed;
		    	requestAnimationFrame(render);
		   	}
		  	render();  
	    }swave();

	    //swiper轮播
	    let _this = this;
	    let swiperCon = new Swiper('#swiperCon', {
	      direction: 'vertical',
	      slidesPerView: 1,
	      spaceBetween: 800,
	      speed: 10,
	      // mousewheelControl: true,
	      releaseOnEdges: true,
	      paginationClickable: true,
	      pagination: '.swiper-pagination',
	      paginationType : 'custom',
	      paginationCustomRender: function (swiper, current, total) {
	        return '<span style="color: #EC6A00;font-size: 2.34vw;font-family: PingFangSC-Semibold;" class="swiper-pagination-current">0'+ current +'</span>' + ' / ' + '<span style="font-size: 1.15vw;font-family: PingFangSC-Regular;" class="swiper-pagination-total">0'+ total + '</span>';
	      },
	      prevButton: '.left_ico',
	      nextButton: '.right_ico',
	      onSlideChangeEnd:function(swiper){
	        if(swiper.activeIndex == 0) {
	          _this.isShow = true;
	          _this.isShow_02 = false;
	        } else {
	          _this.isShow = false;
	          _this.isShow_02 = true;
	        }
	      },
	    });

	    let swiper = new Swiper('#swiper', {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      speed: 1,
	      releaseOnEdges: true,
	      paginationClickable: true,
	      pagination: '.swiper-pagination',
	    });
	    let swiper02 = new Swiper('#swiper02', {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      speed: 1000,
	      releaseOnEdges: true,
	      paginationClickable: true,
	      pagination: '.swiper-pagination',
	    });

	    // 第二屏鼠标移入
	    $('.hover_ul li').hover(function() {
	    	var ind = $(this).index() + 1;
	    	$('.selection-2 .con_p').addClass('hover3d_0'+ ind);
	    }, function() {
	    	var ind = $(this).index() + 1;
	    	$('.selection-2 .con_p').removeClass('hover3d_0'+ ind);
	    });

	    $('#swiper02 .list_div_bg').on('click', function() {
	    	if($(this).hasClass('list_div_bg_sel')) {
	    		$(this).removeClass('list_div_bg_sel');
	    	} else {
	    		$(this).addClass('list_div_bg_sel');
	    	};
	    });

	    // 返回顶部
	    $('#top').on('click', function() {
	    	$('html, body').animate({scrollTop: '0px'}, 800);
	    });

	    $(window).scroll(function() {
		　　 var scrollTop = $(this).scrollTop();
		　　 var scrollHeight = $(document).height();
		　　 var windowHeight = $(this).height();
			if(scrollTop < scrollHeight / 9) {
				$('#top').css({
					'display': 'none'
				});
			} else {
				$('#top').css({
					'display': 'block'
				});
			}
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.video1 {
	    position: relative;
	    z-index: -1;
	    width: 100%;
	    height: 100%;
	    -o-object-fit: fill;
	    object-fit: fill;
	}
	/*selection-1*/
	.selection-1 {
	}
	.selection-1 .con {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.65);
	}
	.selection-1 h1 {
		margin-bottom: 3.98vh;
		color: #FFFFFF;
		text-align: center;
		line-height: 5.73vw;
		font-size: 3.39vw;
		font-family: 'PingFangSC-Regular';
	}
	.selection-1 p strong {
		display: inline-block;
		margin-right: 0.4vw;
		color: #FF6000;
		text-align: center;
		line-height: 4.69vw;
		font-size: 3.91vw;
		font-family: 'PingFangSC-Medium';
	}
	.selection-1 h1 img {
		display: inline-block;
		width: 11.3vw;
		margin-bottom: -1vw;
	}
	.selection-1 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 55%;
		color: #FFFFFF;
		text-align: center;
		line-height: 2.34vw;
		font-size: 1.3vw;
	}
	.selection-1 .cont_ {

	}
	.selection-1 .p_con {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.selection-1 .p_left {
		margin-right: 12.24vw;
	}

	/*selection-2*/
	.selection-2 {
		background: url('../assets/6.jpg') center center  no-repeat;
		background-size: cover;
	}
	.selection-2 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.selection-2 .con_p {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 42.76vw;
		height: 42.76vw;
		margin: 0 auto;
		border-radius: 50%;
		text-align: center;
		background: rgba(255, 255, 255, 0.8);
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}
	.selection-2 h1 {
		margin-bottom: 1.09vh;
		color: #000000;
		text-align: center;
		font-size: 2.86vw;
		font-family: 'PingFangSC-Medium';
	}
	.selection-2 h1 strong {
		color: #FF6000;
		font-family: 'PingFangSC-Medium';
	}
	.selection-2 p {
		width: 73%;
		margin: 0 auto 4.81vh;
		color: #002727;
		text-align: center;
		font-size: 0.94vw;
		line-height: 2.08vw;
		font-family: 'PingFangSC-Light';
	} 
	.selection-2 h4 {
		margin-bottom: 3.76vh;
		color: #FF6000;
		font-size: 1.3vw;
		font-family: 'PingFangSC-Regular';
	}
	.selection-2 p strong {
		color: #FF6000;
		line-height: 2.08vw;
		font-size: 0.94vw;
		font-family: 'PingFangSC-Semibold';
	}
	.selection-2 img {
		width: 7.5vw;
		margin: 0 auto;
	}
	.selection-2 .hover_ul {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	.selection-2 .hover_ul li {
		float: left;
		width: 14.25vw;
		height: 14.25vw;
		cursor: pointer;
	}
	.selection-2 .hover3d_01 {
		-webkit-transform: translate3d(100px, 40px, 200px); 
		-moz-transform: translate3d(100px, 40px, 200px); 
		-ms-transform: translate3d(100px, 40px, 200px); 
		-o-transform: translate3d(100px, 40px, 200px); 
		transform: translate3d(100px, 40px, 200px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_02 {
		-webkit-transform: translate3d(70px, 40px, 100px); 
		-moz-transform: translate3d(70px, 40px, 100px); 
		-ms-transform: translate3d(70px, 40px, 100px); 
		-o-transform: translate3d(70px, 40px, 100px); 
		transform: translate3d(70px, 40px, 100px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_03 {
		-webkit-transform: translate3d(-100px, 40px, 200px); 
		-moz-transform: translate3d(-100px, 40px, 200px); 
		-ms-transform: translate3d(-100px, 40px, 200px); 
		-o-transform: translate3d(-100px, 40px, 200px); 
		transform: translate3d(-100px, 40px, 200px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_04 {
		-webkit-transform: translate3d(100px, -40px, 100px); 
		-moz-transform: translate3d(100px, -40px, 100px); 
		-ms-transform: translate3d(100px, -40px, 100px); 
		-o-transform: translate3d(100px, -40px, 100px); 
		transform: translate3d(100px, -40px, 100px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_05 {
		-webkit-transform: translate3d(100px, -40px, 100px); 
		-moz-transform: translate3d(100px, -40px, 100px); 
		-ms-transform: translate3d(100px, -40px, 100px); 
		-o-transform: translate3d(100px, -40px, 100px); 
		transform: translate3d(100px, -40px, 100px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_06 {
		-webkit-transform: translate3d(100px, -50px, -100px); 
		-moz-transform: translate3d(100px, -50px, -100px); 
		-ms-transform: translate3d(100px, -50px, -100px); 
		-o-transform: translate3d(100px, -50px, -100px); 
		transform: translate3d(100px, -50px, -100px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_07 {
		-webkit-transform: translate3d(-100px, -60px, -100px); 
		-moz-transform: translate3d(-100px, -60px, -100px); 
		-ms-transform: translate3d(-100px, -60px, -100px); 
		-o-transform: translate3d(-100px, -60px, -100px); 
		transform: translate3d(-100px, -60px, -100px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_08 {
		-webkit-transform: translate3d(-100px, 40px, -100px); 
		-moz-transform: translate3d(-100px, 40px, -100px); 
		-ms-transform: translate3d(-100px, 40px, -100px); 
		-o-transform: translate3d(-100px, 40px, -100px); 
		transform: translate3d(-100px, 40px, -100px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}
	.selection-2 .hover3d_09 {
		-webkit-transform: translate3d(-100px, -60px, -100px); 
		-moz-transform: translate3d(-100px, -60px, -100px); 
		-ms-transform: translate3d(-100px, -60px, -100px); 
		-o-transform: translate3d(-100px, -60px, -100px); 
		transform: translate3d(-100px, -60px, -100px);

		-webkit-transition: all 1.8s;
      	transition: all 1.8s;
	}

	/*selection-3*/
	.selection-3 {
		background: url('../assets/8.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-3 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.selection-3 .cont_ {
		height: 90%;
	}
	.selection-3 .title {
		margin-bottom: 1.09vh;
	}
	.selection-3 .cons {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.selection-3 .cons img {
		position: absolute;
	    left: 0;
	    right: 0;
	    top: 8.02vw;
	    margin: auto;
		width: 44.02vw;
	}
	.selection-3 .list_div {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FF6203;
		line-height: 1.61vw;
		text-align: center;
		background: url('../assets/10.png') bottom center no-repeat;
		background-size: 100% 100%;
	}
	.selection-3 .list_div_ {
		font-family: 'PingFangSC-Medium';
	}
	
	.selection-3 .list_01 {
		left: 8.75vw;
		bottom: 21.39vh;
		width: 13.07vw;
		height: 34.91vh;
		font-size: 1.32vw;
		-webkit-animation: float_03 3.6s infinite;
    	animation: float_03 3.6s infinite;
	}
	.selection-3 .list_02 {
		left: 23.39vw;
		bottom: 17.5vh;
		width: 8.44vw;
		height: 24.54vh;
		font-size: 1.1vw;
		-webkit-animation: float_04 4s infinite 0.1s;
    	animation: float_04 4s infinite 0.1s;
	}
	.selection-3 .list_03 {
		left: 65.6vw;
		bottom: 30.37vh;
		width: 10.47vw;
		height: 30.28vh;
		font-size: 1.2vw;
		-webkit-animation: float_03 3.6s infinite;
    	animation: float_03 3.6s infinite;
	}
	.selection-3 .list_04 {
		left: 80.89vw;
		bottom: 20.19vh;
		width: 8.18vw;
		height: 23.61vh;
		font-size: 1.1vw;
		-webkit-animation: float_04 4s infinite 1s;
    	animation: float_04 4s infinite 1s;
	}
	.selection-3 .list_01 .list_div_ {
		margin-bottom: -30%;
	}
	.selection-3 .list_02 .list_div_ {
		margin-bottom: -30%;
	}
	.selection-3 .list_03 .list_div_ {
		margin-bottom: -50%;
	}
	.selection-3 .list_04 .list_div_ {
		margin-bottom: -30%;
	}

	#c {
		display: block;
    	width: 100vw;
    	height: 287px;
	}
	.hero-canvas {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 0;
	}
	    
	/*selection-4*/
	.selection-4 {

	}
	.selection-4 #swiperCon {
		width: 100%;
		height: 100%;
	}
	.selection-4 .cont {
		height: 100%;
	}
	.selection-4 .left_div {
		float: left;
		width: 23.02vw;
		height: 100%;
		color: #000000;
		background-color: #fff;
	}
	.selection-4 .left_div h2 {
		padding-top: 8.49vh;
		text-align: center;
		font-size: 2.34vw;
		font-family: 'PingFangSC-Medium';
	}
	.selection-4 .left_div h4 {
		margin-top: 2.6vh;
		text-align: center;
		line-height: 1.61vw;
		font-size: 1.3vw;
		font-family: 'PingFangSC-Light';
	}

	.selection-4 .left_div p {
		width: 66%;
		margin: 1.04vh auto 0;
		line-height: 1.46vw;
		font-size: 0.83vw;
		font-family: 'PingFangSC-Light';
	}
	
	
	.selection-4 .bg_01 {
		background: url('../assets/11.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-4 .bg_02 {
		background: url('../assets/15.jpg') center center no-repeat;
		background-size: cover;
	}

	#swiperCon .swiper-container-horizontal>.swiper-pagination-bullets, #swiperCon .swiper-pagination-custom, .swiper-pagination-fraction {
	    bottom: 19.35vh;
	    left: 0;
	    width: 23.02vw;
  	}
  	.pre_next {
	    position: absolute;
	    left: 0;
	    bottom: 7.4vh;
	    width: 23.02vw;
	    text-align: center;
	    line-height: 2vw;
	    font-size: 1.3vw;
	    font-family: 'PingFangSC-Light';
	    z-index: 999999999;
	}
	.pre_next i {
	    color: #A5A5A5;
	    line-height: 2vw;
	    font-size: 1.35vw;
	    cursor: pointer;
	}
	.left_ico {
	    margin-right: 1.82vw;
	} 
	.right_ico {
	    margin-left: 1.82vw;
	}
	.selection-4 .cont .img_con {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.selection-4 .cont img {
		width: 45.94vw;
	}
	
	/*selection-5*/
	.selection-5 {
		background: url('../assets/17.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-5 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.selection-5 .conts {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.selection-5 .title {
		margin-bottom: 5.47vh;
	}
	.selection-5 .list_div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 19.58vw;
		height: 19.58vw;
		margin: 0 8.02vw;
		border-radius: 50%;
		background: #FFFFFF;
		cursor: pointer;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}
	.selection-5 .list_div h1 {
		color: #EC6A00;
		text-align: center;
		line-height: 6.25vw;
		font-size: 5.99vw;
		font-family: 'PingFangSC-Semibold';
	}
	.selection-5 .list_div p {
		width: 80%;
		margin: 1.72vh auto 0;
		color: #000000;
		text-align: center;
		line-height: 1.56vw;
		font-size: 1.3vw;
		font-family: 'PingFangSC-Thin';
	}
	.selection-5 .list_div_01 {
      	-webkit-animation: float_02 3.6s infinite;
    	animation: float_02 3.6s infinite;
	}
	.selection-5 .list_div_02 {
      	-webkit-animation: float_03 3.6s infinite;
    	animation: float_03 3.6s infinite;
	}

	/*selection-6*/
	.selection-6 {
		background: url('../assets/18.jpg') center center no-repeat;
		background-size: cover;
	}
	.selection-6 .cont {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.selection-6 .titles {
		border: 1px solid rgba(255, 255, 255, 0.5);
    	border-radius: 50%;
    	z-index: -1;
	}
	.selection-6 .titles span {
		top: 26.6%;
		font-size: 1.82vw;
	}
	.selection-6 .titles h2.active-text strong, .selection-6 .titles span.active-text strong, .selection-6 .cover-numbers .current span.active-text strong {
		display: inline-block;
		margin-bottom: 0.5vw;
		color: #EC6A00;
		font-size: 2.86vw;
		font-family: 'PingFangSC-Medium';
	}
	.selection-6 #steps-menu .is-active a {
		background: #EC6A00;
		-webkit-transform: scale(1.5);
          transform: scale(1.5);
	}
	.selection-6 #steps-menu .is-active a:after {
		color: #EC6A00;
	}
	.selection-6 .titles span:after {
		width: 2.66vw;
		bottom: -2.41vh;
	}
	.selection-6 .titles h2 {
		top: 50%;
		font-size: 2.86vw;
	}
	.selection-6 .fa-angle-up:after {
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		width: 2vw;
		height: 1.2vw;
		background: url('../assets/27.svg') center center no-repeat;
		background-size: 100% 100%;
		cursor: pointer;

	}
	.selection-6 .fa-angle-down:after {
		position: absolute;
		left: 0;
		bottom: 0;
		content: '';
		width: 2vw;
		height: 1.2vw;
		background: url('../assets/28.svg') center center no-repeat;
		background-size: 100% 100%;
		cursor: pointer;
	}
	.selection-6 .arrows {
		width: 2vw;
		height: 4.56vw;
		margin: 0;
		top: 85%;
	}
	.selection-6 .nav-el:after {
		font-size: 1.04vw;
		font-family: 'PingFangSC-Light';
	}
	.selection-6 .circle-nav, .selection-6 .nav-elems {
		width: 28.65vw;
		height: 28.65vw;
	}
	.selection-6 .nav-el {
		width: 0.73vw;
		height: 0.73vw;
	}
	.selection-6 .nav-el-1:after {
	    right: -238%;
	}
	.selection-6 .nav-el-2:after {
	    right: -280%;
	}
	.selection-6 .nav-el-3:after {
	    right: -238%;
	}
	.selection-6 .nav-el-4:after {
	    top: 160%;
	}
	.selection-6 .nav-el-5:after {
	    left: -200%;
	}
	.selection-6 .nav-el-6:after {
	    left: -290%;
	}
	.selection-6 .nav-el-7:after {
	    left: -290%;
	}
	.selection-6 .nav-el-8:after {
		top: -210%;
	}
	
	.selection-6 .circle-nav {
		top: 38%;
	}
	.selection-6 .hot-con {
		position: absolute;
		top: 80%;
		left: 0;
		width: 100%;
		text-align: center;
	}
	.selection-6 .hot-con p {
		margin-bottom: 0.73vh;
		color: #EBEBEB;
		font-size: 1.04vw;
		font-family: 'PingFangSC-Thin';
	}
	.selection-6 .hot-con h2 {
		color: #EBEBEB;
		font-size: 2.6vw;
		font-family: 'PingFangSC-Semibold';
	}
	
	

	/*selection-7*/
	.selection-7 {
		background: url('../assets/19.jpg') center center no-repeat;
		background-size: cover; 
	}
	.selection-7 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 77.78vh;
	}
	.selection-7 .cont_ {

	}
	.selection-7 .cont_ img {
		display: block;
		width: 8.28vw;
		margin: 0 auto 7.21vh;
	}
	.selection-7 .conts {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 66.3vw;
		height: 19.17vw;
		background: url('../assets/20.svg') center center no-repeat;
		background-size: 100% 100%; 
	}
	.selection-7 .conts .title {
		margin-bottom: 1.51vh;
	}
	.selection-7 .conts p {
		width: 80%;
		margin: 0 auto;
		color: #FFFFFF;
		text-align: left;
		line-height: 2.14vw;
		font-size: 0.94vw;
	}
	

	/*selection-8*/
	.selection-8 {
		background: #2A2A2A;
	}
	.selection-8 .cont {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 77.78vh;
		background: url('../assets/21.jpg') top center no-repeat;
		background-size: cover;
	}
	.selection-8 .title {
		margin-bottom: 6.94vh;
	}
	.selection-8 .cont_ {
		width: 100%;
	}
	.selection-8 .conts {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.selection-8 .conts_ {
		width: 100%;
	}
	.selection-8 .list_div {
		width: 17.69vw;
		height: 46.57vh;
		margin: 0 0.39vw;
		cursor: pointer;
		-webkit-transition: all 0.8s;
      	transition: all 0.8s;
	}
	.selection-8 .list_div_bg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100.1%;
    	height: 100%;
		background: rgba(0, 0, 0, 0.8);
		opacity: 0;
	}
	.selection-8 .list_div_bg_ {
		width: 88%;
	}
	.selection-8 .list_div h4 {
		color: #FF5000;
		text-align: center;
		font-size: 1.56vw;
		font-family: 'PingFangSC-Regular';
	}
	.selection-8 .list_div p {
		color: #FFFFFF;
		font-size: 0.63vw;
		font-family: 'PingFangSC-Thin';
	}
	.selection-8 .list_div .name {
		margin-bottom: 2.15vh;
		text-align: center;
	}
	.selection-8 .list_div_01 {
		background: url('../assets/24.jpg') top center no-repeat;
		background-size: 100% 100%;
	}
	.selection-8 .list_div_02 {
		background: url('../assets/25.jpg') top center no-repeat;
		background-size: 100% 100%;
	}
	.selection-8 .list_div_03 {
		background: url('../assets/26.jpg') top center no-repeat;
		background-size: 100% 100%;
	}
	
	

	.mob {
		display: none;
	}

	@media screen and (max-width: 750px) {
	    .mob {
	      	display: block;
	    }

	    .video1 {
		    width: 150%;	
		}

	    /*selection-1*/
		.selection-1 h1 {
			margin-bottom: 4.28vh;
			line-height: 12.33vw;
			font-size: 7.47vw;
		}
		.selection-1 h1 img {
			width: 20.87vw;
			margin-bottom: -1vw;
		}
		.selection-1 .con_p {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 28vw;
			margin: 0 2.93vw;
		}
		.selection-1 p {
			width: 100%;
			line-height: 5vw;
		}
		.selection-1 p strong {
			display: block;
			width: 13.07vw;
			height: 13.6vw;
			margin: 0 auto 1.77vh;
			text-align: center;
			color: #FFFFFF;
			line-height: 12vw;
			font-size: 9.33vw;
			background: url('../assets/001.svg') center center no-repeat;
			background-size: 100% 100%;
		}
		.selection-1 p span {
			display: block;
			font-size: 3.2vw;
		}
		
		/*selection-2*/
		.selection-2 {
			background: url('../assets/002.jpg') center center  no-repeat;
			background-size: cover;
		}

		.selection-2 .con_p {
			width: 85.33vw;
			height: 140.53vw;
			margin: 0 auto;
			border-radius: 0;
		}
		.selection-2 h1 {
			margin-bottom: 1.8vh;
			font-size: 7.47vw;
		}
		.selection-2 h4 {
			/*width: 90%;*/
			margin: 0 auto 2.76vh;
			font-size: 4.24vw;
		}
		.selection-2 p {
			width: 85%;
			margin: 0 auto 6.2vh;
			color: #595757;
			text-align: left;
			line-height: 6.93vw;
			font-size: 3.47vw;
		} 
		.selection-2 p strong {
			line-height: 6.93vw;
			font-size: 4.24vw;
		}
		.selection-2 img {
			float: right;
			width: 25.5vw;
			margin-right: 5%;
		}

		/*selection-3*/
		.selection-3 {
			background: url('../assets/003.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-3 .cont {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		.selection-3 .title {
			margin-bottom: 2.51vh;
		}
		.selection-3 .disrc {
			width: 90%;
			margin: 0 auto;
		}
		.selection-3 .cons img {
			position: absolute;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    margin: auto;
			width: 100%;
		}
		.selection-3 .list_div {
			line-height: 4.8vw;
			font-size: 3.73vw;
			background: url('../assets/004.svg') bottom center no-repeat;
			background-size: 100% 100%;
		}
		.selection-3 .list_01 {
			left: 0;
			bottom: 35.28vh;
			width: 37.87vw;
			height: 30.28vh;
			-webkit-animation: float_03 3.6s infinite;
	    	animation: float_03 3.6s infinite;
		}
		.selection-3 .list_02 {
			left: 0;
			bottom: 3.77vh;
			width: 37.87vw;
			height: 30.28vh;
			-webkit-animation: float_04 4s infinite 0.1s;
	    	animation: float_04 4s infinite 0.1s;
		}
		.selection-3 .list_03 {
			bottom: 35.28vh;
			left: 63vw;
			width: 37.87vw;
			height: 30.28vh;
			-webkit-animation: float_03 3.6s infinite;
	    	animation: float_03 3.6s infinite;
		}
		.selection-3 .list_04 {
			left: 63vw;
			bottom: 3.77vh;
			width: 37.87vw;
			height: 30.28vh;
			-webkit-animation: float_04 4s infinite 1s;
	    	animation: float_04 4s infinite 1s;
		}
		.selection-3 .list_01 .list_div_ {
			margin-bottom: -30%;
		}
		.selection-3 .list_02 .list_div_ {
			margin-bottom: -30%;
		}
		.selection-3 .list_03 .list_div_ {
			margin-bottom: -30%;
		}
		.selection-3 .list_04 .list_div_ {
			margin-bottom: -30%;
		}
		.hero-canvas {
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 0;
			width: 100%;
			height: 18.76vh;
			background: url('../assets/swave.png') center center no-repeat;
			background-size: 100% 100%;
		}
		
		/*selection-4*/
		.selection-4 {
			height: 134.42vh;
			background: url('../assets/005.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-4 .cont {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 134.42vh;
		}
		.selection-4 .bg_01 h2 {
			margin-bottom: 1.03vh;
			color: #FFFFFF;
			text-align: center;
			line-height: 8vw;
			font-size: 6.67vw;
			font-family: 'PingFangSC-Medium';
		}
		.selection-4 .bg_01 h4 {
			margin-bottom: 2.81vh;
			color: #FFFFFF;
			text-align: center;
			line-height: 5.33vw;
			font-size: 3.73vw;
			font-family: 'PingFangSC-Light';
		}
		.selection-4 .bg_01 p {
			width: 80%;
			margin: 0 auto 6.5vh;
			color: #FFFFFF;
			text-align: center;
			line-height: 5.33vw;
			font-size: 3.2vw;
			font-family: 'PingFangSC-Light';
		}
		.selection-4 .cont img {
			display: block;
			width: 80.93vw;
			height: 85.23vh;
			margin: 0 auto;
		}
		.selection-4 .bg_01 .con {
			width: 100%;
			height: 85%;
		}
		.selection-4 .bg_02 h2 {
			margin-bottom: 4.28vh;
			color: #FFFFFF;
			text-align: center;
			line-height: 8vw;
			font-size: 6.67vw;
			font-family: 'PingFangSC-Medium';
		}
		.selection-4 .bg_02 h4 {
			margin-bottom: 9.45vh;
			color: #FFFFFF;
			text-align: center;
			line-height: 5.33vw;
			font-size: 3.73vw;
			font-family: 'PingFangSC-Light';
		}

		.selection-4 .bg_02 .con {
			width: 100%;
			height: 80%;
		}
		
		
		.selection-4 .bg_01 {
			background: url('../assets/005.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-4 .bg_02 {
			background: url('../assets/007.jpg') center center no-repeat;
			background-size: cover;
		}

		/*selection-5*/
		.selection-5 {
			background: url('../assets/009.jpg') center center no-repeat;
			background-size: cover;
		}
		.selection-5 .title {
			margin-bottom: 5.91vh;
		}
		.selection-5 .list_div {
			width: 51.73vw;
			height: 51.73vw;
			margin: 0 8.02vw;
		}
		.selection-5 .list_div h1 {
			color: #EC6A00;
			text-align: center;
			line-height: 16vw;
			font-size: 18.67vw;
		}
		.selection-5 .list_div p {
			width: 80%;
			margin: 1.72vh auto 0;
			text-align: center;
			line-height: 6.56vw;
			font-size: 4.27vw;
		}
		
		.selection-5 .list_div_1 {
			margin-bottom: 8.53vh;	
		}

		/*selection-6*/
		.selection-6 {
			background: url('../assets/010.jpg') center center no-repeat;
			background-size: cover;
		}

		.selection-6 .titles span {
			top: 26.6%;
			font-size: 1.82vw;
		}
		.selection-6 .titles h2.active-text strong, .selection-6 .titles span.active-text strong, .selection-6 .cover-numbers .current span.active-text strong {
			margin-bottom: 1.5vw;
			color: #EC6A00;
			font-size: 8.8vw;
		}
		.selection-6 .titles span:after {
			width: 6.67vw;
			bottom: -2.41vh;
		}
		.selection-6 .titles h2 {
			top: 50%;
			font-size: 9.33vw;
		}

		.selection-6 .arrows {
			width: 2vw;
			height: 4.56vw;
			margin: 0;
			top: 85%;
		}
		.selection-6 .nav-el:after {
			font-size: 1.04vw;
		}
		.selection-6 .titles span {
		    font-size: 6.82vw;
		}


		.selection-6 .circle-nav, .selection-6 .nav-elems {
			width: 72.27vw;
			height: 72.27vw;
		}
		.selection-6 .nav-el {
			width: 1.87vw;
			height: 1.87vw;
		}
		.selection-6 .nav-el:after {
			font-size: 3.2vw;
		}
		.selection-6 #steps-menus .is-active a {
			background: #EC6A00;
		}
		.selection-6 #steps-menus .is-active a:after {
			color: #EC6A00;
		}
		.selection-6 .nav-el-1:after {
		    right: -300%;
    		top: -50%;
		}
		.selection-6 .nav-el-2:after {
		    right: -300%;
		}
		.selection-6 .nav-el-3:after {
		    right: -300%;
		}
		.selection-6 .nav-el-4:after {
		    top: 200%;
		}
		.selection-6 .nav-el-5:after {
		    left: -300%;
		}
		.selection-6 .nav-el-6:after {
		    left: -290%;
		}
		.selection-6 .nav-el-7:after {
		    left: -290%;
		}
		.selection-6 .nav-el-8:after {
			top: -200%;
    		left: -50%;
		}
		
		.selection-6 .circle-nav {
			top: 38%;
		}
		.selection-6 .hot-con {
			position: absolute;
			top: 72.23vh;
			left: 0;
			width: 100%;
			text-align: center;
		}
		.selection-6 .hot-con p {
			margin-bottom: 1.6vh;
			font-size: 4.27vw;
		}
		.selection-6 .hot-con h2 {
			font-size: 8vw;
		}

		/*selection-7*/
		.selection-7 {
			background: url('../assets/011.jpg') center center no-repeat;
			background-size: cover; 
		}
		.selection-7 .cont {
			height: 82.8vh;
		}
		.selection-7 .cont_ img {
			display: block;
			width: 22.28vw;
			margin: 0 auto 7.39vh;
		}
		.selection-7 .conts {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 78.3vw;
			height: auto;
			background: none;
		}
		.selection-7 .conts .title {
			margin-bottom: 5.6vh;
		}
		.selection-7 .conts p {
			width: 100%;
			margin: 0 auto;
			text-align: left;
			line-height: 6.93vw;
			font-size: 3.47vw;
		}
		
		/*selection-8*/
		.selection-8 .cont {
			height: 80.8vh;
			background: url('../assets/012.jpg') top center no-repeat;
			background-size: cover;
		}

		.selection-8 .title {
			margin-bottom: 3.4vh;
		}
		.selection-8 .cont_ {
			width: 100%;
		}
		.selection-8 .conts {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
		}
		.selection-8 .conts_ {
			width: 100%;
		}
		.selection-8 .list_div {
			width: 62.47vw;
			height: 52.29vh;
			margin: 0 auto;
			-webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}
		.selection-8 .list_div_bg {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100.1%;
	    	height: 100%;
			background: rgba(0, 0, 0, 0.8);
			opacity: 0;
			-webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}
		.selection-8 .list_div_bg_ {
			width: 88%;
		}
		.selection-8 .list_div h4 {
			color: #FF5000;
			text-align: center;
			font-size: 4.56vw;
			font-family: 'PingFangSC-Regular';
		}
		.selection-8 .list_div p {
			color: #FFFFFF;
			font-size: 2.73vw;
			font-family: 'PingFangSC-Thin';
		}
		.selection-8 .list_div .name {
			margin-bottom: 3.15vh;
			text-align: center;
		}
		
		.selection-8 .list_div_bg_sel {
			opacity: 1;
			-webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}

		/*返回顶部*/
		.top {
			display: none;
			position: fixed;
			right: 2.93vw;
			bottom: 21.27vh;
			width: 11.47vw;
			height: 11.47vw;
			background: url('../assets/013.svg') center center no-repeat;
			background-size: 100% 100%;
			z-index: 99999999;
		}

	}
	@media screen and (min-width: 751px) {
		.selection-1 p {
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 5vw;
		}

		.selection-8 .list_div:hover .list_div_bg {
			opacity: 1;
			-webkit-transition: all 0.8s;
	      	transition: all 0.8s;
		}
	}
</style>
