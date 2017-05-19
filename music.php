<?php 
	$mysql_server_name='127.0.0.1'; //mysql数据库服务器
	$mysql_username='austin'; //mysql数据库用户名
	$mysql_password='123123'; //mysql数据库密码
	$mysql_database='wangyi'; //mysql数据库名
	$q=$_GET["q"];

	$con = mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
	mysql_query("set name 'utf8'");
	mysql_select_db($mysql_database);
	$sql = "select * from music_adress where number = ".$q;
	$result = mysql_query($sql,$con);
	$row = mysql_fetch_array($result);
	echo $row["address"];
?>