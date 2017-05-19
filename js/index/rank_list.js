var up_music_name_arr = new Array;
up_music_name_arr[0] = "短叹";
up_music_name_arr[1] = "不害怕";
up_music_name_arr[2] = "成全";
up_music_name_arr[3] = "Levitate";
up_music_name_arr[4] = "天若有情";
up_music_name_arr[5] = "张士超你到底把我家钥匙放在哪里了";
up_music_name_arr[6] = "和你";
up_music_name_arr[7] = "小半";
up_music_name_arr[8] = "커플 (2016)";
up_music_name_arr[9] = "岁月轻狂";

var new_music_name_arr = new Array;
new_music_name_arr[0] = "Baby ，До свидания (达尼亚)";
new_music_name_arr[1] = "火星人来过";
new_music_name_arr[2] = "齐天大圣";
new_music_name_arr[3] = "告白气球";
new_music_name_arr[4] = "春风十里";
new_music_name_arr[5] = "当我在这里";
new_music_name_arr[6] = "你说";
new_music_name_arr[7] = "张士超你到底把我家钥匙放在哪里了";
new_music_name_arr[8] = "曾经守候";
new_music_name_arr[9] = "天若有情";

var make_music_name_arr = new Array;
make_music_name_arr[0] = "一头偶像";
make_music_name_arr[1] = "我爱你";
make_music_name_arr[2] = "失眠";
make_music_name_arr[3] = "还爱着我";
make_music_name_arr[4] = "Lonely God";
make_music_name_arr[5] = "如果这些都可以";
make_music_name_arr[6] = "初恋";
make_music_name_arr[7] = "刚好";
make_music_name_arr[8] = "暗河日记";
make_music_name_arr[9] = "故事";

function createList() {
	var up_rank_list = document.getElementById("up_rank");
	var new_rank_list = document.getElementById("new_rank");
	var make_rank_list = document.getElementById("make_rank");

	var flag = 1;
	for (var i = 0; i < 11; i++) {
		var dd_node = document.createElement("dd");
		up_rank_list.appendChild(dd_node);
		dd_node.style.width = "228px";
		dd_node.style.height = "32px";
		if(flag){
			dd_node.style.backgroundColor = "#E8E8E8";
			flag = 0;
		}else{
			dd_node.style.backgroundColor = "#F4F4F4";
			flag = 1;
		}
	}
	flag = 1;
	for (var i = 0; i < 11; i++) {
		var dd_node = document.createElement("dd");
		new_rank_list.appendChild(dd_node);
		dd_node.style.width = "228px";
		dd_node.style.height = "32px";
		if(flag){
			dd_node.style.backgroundColor = "#E8E8E8";
			flag = 0;
		}else{
			dd_node.style.backgroundColor = "#F4F4F4";
			flag = 1;
		}
	}
	flag = 1;
	for (var i = 0; i < 11; i++) {
		var dd_node = document.createElement("dd");
		make_rank_list.appendChild(dd_node);
		dd_node.style.width = "228px";
		dd_node.style.height = "32px";
		if(flag){
			dd_node.style.backgroundColor = "#E8E8E8";
			flag = 0;
		}else{
			dd_node.style.backgroundColor = "#F4F4F4";
			flag = 1;
		}
	}
	// 给新歌榜添加歌名与控制板
	var up_rank_dd_list = up_rank_list.getElementsByTagName("dd");
	var new_rank_dd_list = new_rank_list.getElementsByTagName("dd");
	var make_rank_dd_list = make_rank_list.getElementsByTagName("dd");
	var name_arr;
	for(var j = 0; j < 3; j++){
		if(j == 0){
			rank_dd_list = up_rank_dd_list;
			name_arr = up_music_name_arr;
		}
		if(j == 1){
			rank_dd_list = new_rank_dd_list;
			name_arr = new_music_name_arr;
		}
		if(j == 2){
			rank_dd_list = make_rank_dd_list;
			name_arr = make_music_name_arr;
		}
		var more_music = document.createElement("a");
		var more_music_text = document.createTextNode("查看全部>");
		more_music.setAttribute("href", "#");
		more_music.style.color = "#000";
		more_music.style.fontSize = "12px";
		more_music.style.float = "right";
		more_music.style.fontFamily = "Arial, Helvetica, sans-serif";
		more_music.style.marginRight = "20px";
		more_music.appendChild(more_music_text);
		rank_dd_list[10].appendChild(more_music);
		for (var i = 0; i < rank_dd_list.length-1; i++) {
			// 榜单歌名
			var dd_music_num = document.createElement("span");
			if(i<3){
				dd_music_num.className = "first"
			}
			var dd_music_nem_text = document.createTextNode((i+1).toString());
			dd_music_num.appendChild(dd_music_nem_text);
			rank_dd_list[i].appendChild(dd_music_num);
			var dd_music_a = document.createElement("a");
			dd_music_a.className = "music_name";
			dd_music_a.setAttribute("href", "#");
			dd_music_a.setAttribute("title", name_arr[i]);
			var dd_music_text = document.createTextNode(name_arr[i]);
			dd_music_a.appendChild(dd_music_text);
			rank_dd_list[i].appendChild(dd_music_a);
			// 控制器
			var control_div = document.createElement("div");
			control_div.className = "rank-value-control hide";
			var a_play = document.createElement("a");
			var a_add = document.createElement("a");
			var a_file = document.createElement("a");
			a_play.setAttribute("href", "#");
			a_add.setAttribute("href", "#");
			a_file.setAttribute("href", "#");
			a_play.className = "play";
			a_add.className = "add";
			a_file.className = "file";
			control_div.appendChild(a_play);
			control_div.appendChild(a_add);
			control_div.appendChild(a_file);
			rank_dd_list[i].appendChild(control_div);
			rank_dd_list[i].onmouseover = function(){
				this.getElementsByTagName("div")[0].className = "rank-value-control";
				this.getElementsByTagName("a")[0].style.width = "85px";
			}
			rank_dd_list[i].onmouseout = function(){
				this.getElementsByTagName("div")[0].className = "rank-value-control hide";
				this.getElementsByTagName("a")[0].style.width = "165px";
			}
		}
	}
}

addLoadEvent(createList);

