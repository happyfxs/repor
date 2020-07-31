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
//中间

// 获取元素
		var imgs = document.querySelectorAll('.vedio_div div');
		var showImg = document.querySelector('.swiper img');
		var btn = document.getElementsByClassName('btn');
		
		// 循环绑定事件
		for(var i = 0;i < imgs.length;i++){
		// 点击事件
		imgs[i].onclick = function(){
		showImg.src = this.children[0].src;
		}
		// 鼠标移入事件
		imgs[i].onmouseover = function(){
		this.children[1].src ="../img/animation/play_small_b.png";
		}
		// 鼠标移出事件
		imgs[i].onmouseout = function(){
		this.children[1].src = '../img/animation/play_small_h.png';
		}
		}