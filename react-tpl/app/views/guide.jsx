import React, { Component } from "react";

import "@assets/sass/guide.scss";

export default class Guid extends Component {
	constructor(props){
		super( props );
	}
	componentWillMount(){
		document.title="下载引导";
	}
	componentDidMount() {

		let ua = navigator.userAgent.toLowerCase(),
			isWeChat = /micromessenger/i.test(ua),
			isIOS = /iphone|ipad/.test(ua),
			appDownloadUrl = isIOS ? 'https://itunes.apple.com/cn/app/tai-he-wang/id954734297?mt=8' : 'http://dl.trc.com/trc.apk';
            
		this.refs.downloadBtn.href = appDownloadUrl; // 设置 download url

		if (isWeChat) {
			//微信中打开,显示引导层
			let weChatMask = document.createElement('div');
			weChatMask.setAttribute('class', 'wechat-download-mask');
			this.refs.downloadPage.appendChild(weChatMask);
		} else {
			//其他终端,尝试唤醒app
			let jumpUrl = decodeURIComponent(this.props.params['jumpUrl']);

			if (!/^(trc|taihe):\/\//.test(jumpUrl))		//判断是否是正确的trc或taihe协议
				jumpUrl = 'trc://main?page=home';

			// trcApp.open(jumpUrl);
		}

	}
	render() {
		return (
				<div className="download-view-wrap" ref="downloadPage">
					<div className="content">
						<div className="app_download_inner">
							<a className="app_download_btn" href="javascript:void(0);" ref="downloadBtn"></a>
							<p className="copyright">©TRC.COM　浙江小泰科技有限公司　版权所有</p>
						</div>
					</div>
				</div>
			)
	}
}

