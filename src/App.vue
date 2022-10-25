<script>
	export default {
		onLaunch: function(options) {

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			businessUrl: '',
			userInfo: {},
			token: '',
			appLauchOptions: '',
			testMode: 1 //0: 普通模式  1：测试模式
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
