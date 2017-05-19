function get_music_address(str){
	var xmlHttp=null
	if (window.XMLHttpRequest)
	  {
	  xmlHttp=new XMLHttpRequest()
	  }
	else if (window.ActiveXObject)
	  {
	  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")
	  }
	var music_box = document.getElementById("music-box");
	var url="music.php"
	url=url+"?q="+str
	url=url+"&sid="+Math.random()
	xmlHttp.onreadystatechange=stateChanged 
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)

	function stateChanged() 
	{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	 { 
	 	// document.getElementById("music-box").getElementsByTagName("source")[0].setAttribute("src",xmlHttp.responseText);
	 	document.getElementById("music-box").innerHTML = "<video controls autoplay name=\"media\" id=\"music-box-control\">"+
																"<source src="+ xmlHttp.responseText +" type=\"audio/mpeg\">"
																"</video>";
	 } 
	}

	
}