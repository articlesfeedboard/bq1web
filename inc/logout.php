<?php // logout.php
session_start(); // start session
session_unset(); // removed session values
session_destroy(); // remove session variable

header("Location: /index.php"); // redirect to Home page
exit; // stop further code execution
?>
