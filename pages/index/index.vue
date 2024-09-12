<template>
	<view class="content">
		<view class="" style="margin-top: 40rpx;font-size: 48rpx;text-align: center;">
			<text>视频如何去水印?</text>
			<image class="img" src="/static/1.jpg" mode="widthFix"
				style="margin-top: 20rpx;width: 640rpx;height: 224rpx">
			</image>
		</view>
		<view class="text-area">
			<text class="title">这是什么宝藏小程序？它不仅免费去水印，而且不限次数，还无广告！
				现在抖音上很多热门视频都带有水印，用这个软件就可以轻松去除。它的操作非常简单，只需要把带水印的视频或图片分享链接粘贴进去，点击开始解析，最后保存就可以了。
				我试过很多去水印的软件，不是收费就是有次数限制，要么就是满屏的广告。但是这个软件完全免费，没有任何套路。而且它对安卓和苹果手机都适配，赶紧下载试试吧！</text>
		</view>
		<view class="" style="display: flex;flex-direction: column;align-items: center;">
			<text style="font-size: 48rpx; color: chocolate;">打开微信扫码体验</text>
			<image class="logo" src="/static/365.jpg"></image>
		</view>
		<!-- 视频 -->
		<view class=" video-box">
			<text style="font-size: 48rpx; color: chocolate;margin-bottom: 20rpx;">观看视频教程</text>
			<video id="myVideo" src="/static/video.mp4" controls></video>
		</view>
		<view class="u-flex-col" style="width: 100%;align-items: center;">
			<image class="img" src="/static/2.jpg" mode="widthFix"></image>
			<image class="img" src="/static/3.jpg" mode="widthFix"></image>
			<image class="img" src="/static/4.jpg" mode="widthFix"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx;

	}

	.video-box {
		width: 100%;
		margin-bottom: 20rpx;
		text-align: center;

		::v-deep video {
			width: 100%;
		}
	}

	.img {
		margin-bottom: 20rpx;
	}

	.logo {
		height: 400rpx;
		width: 400rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 100rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 20rpx;

	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>