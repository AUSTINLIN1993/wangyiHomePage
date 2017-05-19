// 窗口大小改变事件
	var vmw = document.documentElement.clientWidth;
	var vmh = document.documentElement.clientHeight;
	var box = document.getElementById("context-value");
	var all_li_list = document.getElementById("context-value").getElementsByTagName("li");
	var the_ul = box.getElementsByTagName("ul")[0];
	var control_box = document.getElementById("list-control");
	var flag = 1;
	// 目前图片编号
	var now_num = 0;
	// 筛选第一代li标签
	var li_list = [];
	for (var i = 0; i < all_li_list.length; i++) {
		if(all_li_list[i].parentNode == all_li_list[0].parentNode){
			li_list.push(all_li_list[i]);
		}
	}
	// 初始化
	setbox();
	// 控制条位置
	var control_top = (vmh - 105)/2;
	if(control_top<0){
		control_top = 0;
	}
	control_box.style.top = control_top + "px";
	change_control();
	addOnmouse();

	// 为首页按钮添加点击事件
	var value_btn = document.getElementById("value-btn").getElementsByTagName("a");
	value_btn[0].onclick = function(){
		flag = 0;
		now_num = 1;
		movepic();
		change_control();
	}
	value_btn[1].onclick = function(){
		flag = 0;
		now_num = 2;
		movepic();
		change_control();
	}
	value_btn[2].onclick = function(){
		flag = 0;
		now_num = 3;
		movepic();
		change_control();
	}

window.onresize = function (){
	vmw = document.documentElement.clientWidth;
	vmh = document.documentElement.clientHeight;
	box.style.width = vmw.toString() + "px";
	box.style.height = vmh.toString() + "px";

	for(var i = 0; i < 7; i++){
		li_list[i].style.width = vmw.toString() + "px";
		li_list[i].style.height = vmh.toString() + "px";
	}
	control_top = (vmh - 105)/2;
	if(control_top<0){
		control_top = 0;
	}
	control_box.style.top = control_top + "px";	
}

function setbox(){
	box.style.width = vmw.toString() + "px";
	box.style.height = vmh.toString() + "px";
	box.style.position = "relative";
	box.style.overflow = "hidden";

	the_ul.style.position = "absolute";
	the_ul.style.top = "0px";

	li_list[0].style.width = vmw.toString() + "px";
	li_list[0].style.height = vmh.toString() + "px";
	li_list[0].style.background = "url(image/songer/1.jpg) center no-repeat";
	li_list[0].style.backgroundSize = "contain";
	li_list[0].style.backgroundColor = "#282828";

	li_list[1].style.width = vmw.toString() + "px";
	li_list[1].style.height = vmh.toString() + "px";
	li_list[1].style.background = "url(image/songer/2.jpg) center no-repeat";
	li_list[1].style.backgroundSize = "contain";
	li_list[1].style.backgroundColor = "#fefefe";

	li_list[2].style.width = vmw.toString() + "px";
	li_list[2].style.height = vmh.toString() + "px";
	li_list[2].style.background = "url(image/songer/3.jpg) center no-repeat";
	// li_list[2].style.backgroundSize = "contain";
	li_list[2].style.backgroundColor = "#2c2c2c";

	li_list[3].style.width = vmw.toString() + "px";
	li_list[3].style.height = vmh.toString() + "px";
	li_list[3].style.background = "url(image/songer/4.jpg) center no-repeat";
	li_list[3].style.backgroundSize = "contain";
	li_list[3].style.backgroundColor = "#FFF";

	li_list[4].style.width = vmw.toString() + "px";
	li_list[4].style.height = vmh.toString() + "px";
	li_list[4].style.background = "url(image/songer/5.jpg) center no-repeat";
	li_list[4].style.backgroundSize = "contain";
	li_list[4].style.backgroundColor = "#282828";

	li_list[5].style.width = vmw.toString() + "px";
	li_list[5].style.height = vmh.toString() + "px";
	li_list[5].style.background = "url(image/songer/6.jpg) bottom no-repeat";
	// li_list[5].style.backgroundSize = "contain";
	li_list[5].style.backgroundColor = "#f8f8f8";

	li_list[6].style.width = vmw.toString() + "px";
	li_list[6].style.height = vmh.toString() + "px";
	li_list[6].style.background = "url(image/songer/7.jpg) center no-repeat";
	li_list[6].style.backgroundSize = "contain";
	li_list[6].style.backgroundColor = "#292928";

	var scrollFunc = function (){
		var e = window.event;
		if(parseInt(the_ul.style.top)%vmh == 0 || flag == 1){
			var now_pic = Math.abs(parseInt(the_ul.style.top)/vmh);
			if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
		        if (e.wheelDelta > 0) { //当滑轮向上滚动时
		        	if(parseInt(the_ul.style.top)<0){
		        		flag = 0;
		        		now_num--;
		        		movepic();
		        		change_control();
		        	}
		        }
		        if (e.wheelDelta < 0) { //当滑轮向下滚动时
		        	if(parseInt(the_ul.style.top)>-6*vmh){
		        		flag = 0;
		        		now_num++;
		        		movepic();
		        		change_control()
		        	}
		        }
		    } else if (e.detail) {  //Firefox滑轮事件
		        if (e.detail> 0) { //当滑轮向上滚动时
		        	if(parseInt(the_ul.style.top)<0){
		        		flag = 0;
		        		now_num--;
		        		movepic();
		        		change_control();
		        	}
		        }
		        if (e.detail< 0) { //当滑轮向下滚动时
		        	if(parseInt(the_ul.style.top)>-6*vmh){
		        		flag = 0;
		        		now_num++;
		        		movepic();
		        		change_control()
		        	}
		        }
		    }
		}
	}
	window.onmousewheel = document.onmousewheel = scrollFunc;
}

// 移动动画
function movepic(){
	var picbox = document.getElementById("context-value").getElementsByTagName("ul")[0];
	var dis =  now_num*vmh + parseInt(the_ul.style.top);
	var now_move = Math.round(dis/20);
	var dication;
	if(dis>0){
		dication = 1;
	}else{
		dication = -1;
	}
	if(now_move==0){
		if(dication==1){
			now_move = 1;
		}else{
			now_move = -1;
		}
	}
	var next_move = dis - now_move;
	if(next_move){
		picbox.style.top = parseInt(picbox.style.top) - now_move + "px";
		setTimeout("movepic()", 20);
	}else{
		picbox.style.top = parseInt(picbox.style.top) - dication + "px";
		flag = 1;
	}	
}

function change_control(){
	var list = document.getElementById("list-control").getElementsByTagName("li");
	for(var i = 0; i < 7; i++){
		list[i].style.background = "url(image/songer/home.png) -285px -377px";
	}
	list[now_num].style.background = "url(image/songer/home.png) -285px -409px";
}

function addOnmouse(){
	var list = document.getElementById("list-control").getElementsByTagName("li");
	for(var i = 0; i < 7; i++){
		list[i].index = i;
		list[i].onmouseover = function (){
			if(parseInt(the_ul.style.top)%vmh == 0 || flag == 1){
				now_num = this.index;
				change_control();
				flag = 0;
				movepic();
			}
		}
	}
}


