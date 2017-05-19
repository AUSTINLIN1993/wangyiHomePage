function logicPage(){
	var logic_page = document.getElementById("logic-box");
	var begain_btn = document.getElementById("logic-btn");
	var vmw = document.documentElement.clientWidth;
	var vmh = document.documentElement.clientHeight;
	var body_box = document.getElementsByTagName("body")[0];
	var logic_value = document.getElementById("logic-value");
	var close_btn = document.getElementById("close-logic");

	logic_value.style.marginTop = vmh/2-102 + "px";
	logic_value.style.marginLeft = vmw/2-150 + "px";
	begain_btn.onclick = function(){
		logic_page.style.display = "block";
		return false;
	}
	close_btn.onclick = function(){
		logic_page.style.display = "none";
		return false;
	}
}

addLoadEvent(logicPage);