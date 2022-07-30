<?php
	define('DB_SERVER', 'nkcodes');
	define('DB_USERNAME', 'nkcodes');
	define('DB_PASSWORD', 'Niraj@963122');
	define('DB_NAME', 'FTR_database');

	$mysql_db = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

	if (!$mysql_db) {
		die("Error: Unable to connect " . $mysql_db->connect_error);
	}
