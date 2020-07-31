var mySwiper = new Swiper ('.swiper-container', {
		// 渐隐渐现
		effect : 'fade',
		// 立方体效果
		// effect : 'cube',
		// 折页效果
		//effect : 'coverflow',
		// slidesPerView: 2,
		// centeredSlides: true,
		// 翻转效果
		// effect : 'flip',
		
		// 方向vertical垂直
		direction: 'horizontal',
		loop: false, // 循环模式选项
		// 自动播放
		 autoplay: false,
		speed: 1000,
		autoplay: {
		delay: 2000
		},
		
		// 如果需要分页器
		pagination: {
		el: '.swiper-pagination',
		},
		
		// 如果需要前进后退按钮
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
		
		// 如果需要滚动条
		// scrollbar: {
		// el: '.swiper-scrollbar',
		// },
		});
		
// 获取元素
var bottomImg = document.querySelectorAll('.bottom img');

// 定义一个数组存放修改后图片路径
var _bottomIMgSrc = ['../img/mail_h.jpg','../img/facebook_h.jpg','../img/About/twitter_h.jpg','../img/twitter_h.jpg','../img/facebook_h.jpg'];
var bottomIMgSrc = ['../img/mail.jpg','../img/facebook.jpg','../img/About/twitter','../img/linkedln.jpg','../img/facebook.jpg'];

// 循环给footerImgs绑定鼠标移入移出事件
// 点击-onclick 鼠标移入-onmouseover 鼠标移出-onmouseout
for(var i = 0;i < bottomImg.length;i++){
// 自定义属性保存i值
bottomImg[i].index = i;

bottomImg[i].onmouseover = function(){
// 拿出数组里相应索引值 赋值给图片的src属性
this.src = _bottomIMgSrc[this.index];
}

bottomImg[i].onmouseout = function(){
// 拿出数组里相应索引值 赋值给图片的src属性
this.src = bottomIMgSrc[this.index];
}
}

//中间 获取元素
var blackDiv = document.getElementsByClassName('blackDiv');
var showDiv = document.getElementsByClassName('show')[0];
var showImg = document.querySelector('.show img');
var big = document.getElementsByClassName('big')[0];
//循环绑定事件
for(var i = 0;i<blackDiv.length;i++){
	//给所有黑色div添加事件
	blackDiv[i].onclick = function(){
		//获取父元素
		var parentDiv = this.parentNode;
		//获取img标签 （父元素第二个子元素）
		var nowImg =parentDiv.children[1];
		//让show这个div显示
		showDiv.style.display = 'block';
		//把当前图片的路径赋值给show里面的img标签
		showImg.src = nowImg.src;
		big.style.display = 'block';
	}
}
//点击放大后的图片 让div消失
showDiv.onclick = function(){
	showDiv.style.display = 'none'
	big.style.display = 'none';
}