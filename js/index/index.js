function addMusicLink(){
	var list = document.getElementById("popular-value").getElementsByTagName("p");
	var music_list = new Array;
	var str = new String;
	for (var i =  0; i <list.length; i++) {
		(function(){
			var tem = i;
			var tem_str = null;
			music_list[tem] = list[tem].getElementsByTagName("a")[0];
			str = music_list[tem].getAttribute("name");
			tem_str = str;
			music_list[tem].onclick = function (){
				get_music_address(tem_str);	
				return false;
			}	
		})()
	}
}

addLoadEvent(addMusicLink);