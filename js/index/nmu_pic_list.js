function picList (){
	var pic_box = document.getElementById("three-pic-list");
	var pic_list;
	var btn;
	for(var i = 0; i < 6; i++){
		pic_box.innerHTML += "<li></li>";
	}
	pic_list = pic_box.getElementsByTagName("li");
	for (var i = 0; i < pic_list.length; i++) {
		pic_list[i].className = "fl";
		pic_list[i].style.background = "url(image/songer/0" + (i+1) +".jpg)"
	}
	pic_list[5].style.marginRight = "0";
	pic_box.style.left = "0px";

	btn = pic_box.parentNode.parentNode.getElementsByTagName("a");
	btn[0].style.display = "none";
	

	btn[0].onclick = function(){
		pic_box.style.left = parseInt(pic_box.style.left)+280 + "px";
		if(pic_box.style.left == "0px"){
			btn[0].style.display = "none";
		}else{
			btn[0].style.display = "block";
		}
		if(pic_box.style.left == "-560px"){
			btn[1].style.display = "none";
		}else{
			btn[1].style.display = "block";
		}
		return false;
	}
	btn[1].onclick = function(){
		pic_box.style.left = parseInt(pic_box.style.left)-280 + "px";
		if(pic_box.style.left == "0px"){
			btn[0].style.display = "none";
		}else{
			btn[0].style.display = "block";
		}
		if(pic_box.style.left == "-560px"){
			btn[1].style.display = "none";
		}else{
			btn[1].style.display = "block";
		}
		return false;
	}
}

addLoadEvent(picList);