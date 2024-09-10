import request from '@/utils/request'
//获取接口调用凭据
export function getVoucher(data) {
	return request({
		url: `/h5api/Token/Index`,
		data
	})
}

// 短视频解析
export function watermark(data) {
	return request({
		url: `https://watermark-api.hlyphp.top/Watermark/Index`,
		method: 'POST',
		data
	})
}

// 主页批量解析
export function authorWorkWatermark(data) {
	return request({
		url: `https://watermark-api.hlyphp.top/AuthorWork/Index`,
		method: 'POST',
		data
	})
}