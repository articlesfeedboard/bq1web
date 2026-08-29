<?php

	$host = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'school';


	$connection = mysqli_connect($host, $username, $password, $database);

	if(!$connection) {
		die('Connection Failed!');
	}


?>