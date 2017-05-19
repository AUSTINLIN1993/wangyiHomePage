	var now_num = 0;
	// 轮播间隔
	var chang_time = 4000;
function showPic(){
	var pic_arr = new Array;
	var img0 = {
		src: "0",
		back: "#FFE8E8"
	};
	var img1= {
		src: "1",
		back: "#111088"
	};
	var img2 = {
		src: "2",
		back: "#51423F"
	};
	var img3 = {
		src: "3",
		back: "#E7C86D"
	};
	pic_arr[0] = img0;
	pic_arr[1] = img1;
	pic_arr[2] = img2;
	pic_arr[3] = img3;

	var background = document.getElementById("pic-and-down");
	var pic_div = document.getElementById("lunbotu_pic"); 
	var pic_a = document.createElement("a");
	pic_a.setAttribute("href", "#");
	var pic_img = document.createElement("img");
	pic_div.appendChild(pic_a);
	pic_a.appendChild(pic_img);
	createPic(pic_arr, background, pic_img, 0);

	var time_change = setInterval(function(){
		if(now_num == pic_arr.length-1){
		now_num = 0;
	}else{
		now_num++;
	}
		createPic(pic_arr, background, pic_img, now_num);
	},chang_time);

	background.onmouseover = function(){
		clearInterval(time_change);
	};
	background.onmouseout = function(){
			time_change = setInterval(function(){
			if(now_num == pic_arr.length-1){
				now_num = 0;
			}else{
				now_num++;
			}
			createPic(pic_arr, background, pic_img, now_num);
			},chang_time);
	};
	
	var last_pic_btn = background.getElementsByTagName("a")[0];
	var next_pic_btn = background.getElementsByTagName("a")[1];
	last_pic_btn.onclick = function(){
		if(now_num == 0){
			now_num =  pic_arr.length-1;
		}else{
			now_num--;
		}
		createPic(pic_arr, background, pic_img, now_num);
		return false;
	};
	next_pic_btn.onclick = function(){
		if(now_num == pic_arr.length-1){
			now_num =  0;
		}else{
			now_num++;
		}
		createPic(pic_arr, background, pic_img, now_num);
		return false;
	};
	

}

function createPic(arr, back_node, pic_node, now){
	pic_node.setAttribute("src", "image/index/lunbotu/" + arr[now].src + ".jpg");
	pic_node.setAttribute("alt", arr[now].toString());
	back_node.style.backgroundColor = arr[now].back;
	if(pic_node.parentNode.parentNode.getElementsByTagName("div").length>0){
		var old_div = pic_node.parentNode.parentNode.getElementsByTagName("div")[0];
		pic_node.parentNode.parentNode.removeChild(old_div);
	}
	var dian_div = document.createElement("div");
	dian_div.className = "fast_btn"
	dian_div.style.position = "absolute";
	dian_div.style.height = "8px";
	dian_div.style.bottom = "10px";
	dian_div.style.marginLeft = "300px";
	pic_node.parentNode.parentNode.appendChild(dian_div);
	for (var i = 0; i < arr.length; i++) {
		var now_pic_dian = document.createElement("a");
		now_pic_dian.setAttribute("href", "#");
		var dian_pi = document.createElement("img");
		if(i == now){
			dian_pi.setAttribute("src", "image/index/lunbotu/banner/dian.png");
		}else{
			dian_pi.setAttribute("src", "image/index/lunbotu/banner/dian_before.png");
		}
		dian_pi.setAttribute("alt", "dian");
		now_pic_dian.style.width = "8px";
		now_pic_dian.style.height = "8px";
		now_pic_dian.style.marginLeft = "8px";
		now_pic_dian.style.marginRight = "8px";
		now_pic_dian.appendChild(dian_pi);
		dian_div.appendChild(now_pic_dian);
	}

	var fast_btn_list = document.getElementById("lunbotu_pic").getElementsByTagName("div")[0].getElementsByTagName("a");
	// 实验
	for (var i = 0; i < fast_btn_list.length; i++) {
		fast_btn_list[i].index = i;
		fast_btn_list[i].onclick = function (){
		now_num = this.index;
		createPic(arr, back_node, pic_node, now_num);
		return false;	
		};
		fast_btn_list[i].onmouseover = function (){
			this.getElementsByTagName("img")[0].setAttribute("src", "image/index/lunbotu/banner/dian.png");
		}
		fast_btn_list[i].onmouseout = function (){
			if(this.index != now_num){
				this.getElementsByTagName("img")[0].setAttribute("src", "image/index/lunbotu/banner/dian_before.png");
			}
		}
	}
}
addLoadEvent(showPic);