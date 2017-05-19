function back_top(){
	var body = document.getElementsByTagName("body")[0];
	
	var btn = document.createElement("a");
	body.appendChild(btn);
	btn.setAttribute("href", "javascript:scroll(0,0)");
	btn.style.width = "49px";
	btn.style.height = "44px";
	btn.style.position = "fixed";
	btn.style.left = "1180px";
	btn.style.top = "450px";
	btn.className = "back-top hide";

	window.onscroll = function(){
		if(document.body.scrollTop){
			btn.className = "back-top";
		}else{
			btn.className = "back-top hide";
		}
	}
}
function chang_btn(){
	var btn = document.getElementById("top-logic-btn");
	var btn_l = btn.getElementsByTagName("span")[0];
	var btn_r = btn.getElementsByTagName("span")[1];
	btn.onmouseover = function (){
		btn_l.style.background = "url(image/index/button2.png) 0 -1730px";
		btn_r.style.background = "url(image/index/button2.png) -225px -1770px";
	}
	btn.onmouseout = function (){
		btn_l.style.background = "url(image/index/button2.png) 0 -1650px";
		btn_r.style.background = "url(image/index/button2.png) -225px -1690px";
	}
}
addLoadEvent(back_top);
addLoadEvent(chang_btn);
