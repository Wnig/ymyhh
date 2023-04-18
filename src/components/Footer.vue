<template>
  <footer>
  	<div class="pc">
	  	<div class="footer">
	  		<h4>越麦越红火餐饮管理有限公司</h4>
	  		<h1>加盟热线：400-1668-622</h1>
	  		<p>闽ICP备16018304号-1</p>
	  	</div>
  	</div>
  	<div class="mob">
  		<h4>越麦越红火餐饮管理有限公司</h4>
  		<h1>加盟热线：400-1668-622</h1>
  		<p>闽ICP备16018304号-1</p>
  	</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 22.22vh;
		background: #2A2A2A;
	}
	h4 {
		margin-bottom: 1.85vh;
		color: #8D8D8D;
		font-size: 1.04vw;
		font-family: 'PingFangSC-Light';
	}
	h1 {
		margin-bottom: 1.85vh;
		color: #8C8C8C;
		font-size: 1.82vw;
		font-family: 'PingFangSC-Medium';
	}
	p {
		color: #484848;
		font-size: 0.63vw;
		font-family: 'PingFangSC-Thin';
	}
	.mob {
		display: none;
	}

	@media screen and (max-width: 750px) {
		.mob {
	      	display: block;
	    }

		footer {
			height: 17.99vh;
		}

		h4 {
			margin-bottom: 0.3vh;
			font-size: 3.73vw;
		}
		h1 {
			margin-bottom: 1.48vh;
			font-size: 5.33vw;
		}
		p {
			font-size: 3.2vw;
		}
	}

</style>
