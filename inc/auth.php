<?php
session_start(); // ALWAYS START SESSION ON TOP

include 'conn.php'; // Database connection handshake

if($_SERVER["REQUEST_METHOD"] == "POST") { // Check if login form is submitted
    $email = $_POST["email"];
    $password = $_POST["password"];

    $stmt = $connection->prepare("SELECT id, name, email, password FROM students WHERE email=? AND password=?");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result(); // get result what query has returned

    if ($result->num_rows == 1) { // check if returned response has some rows
	    $student = $result->fetch_assoc();

	    $_SESSION['student_id'] = $student['id']; // add user info in session
	    $_SESSION['student_name'] = $student['name']; // add user info in session
	    $_SESSION['student_email'] = $student['email']; // add user info in session

	    header("Location: /dashboard.php"); // redirect to dashboard
	    exit; // stop further code execution
	}
	else {
	    echo "Invalid email or password.";
	}
    
}
else {
    echo '<h2>Method is not POST</h2>';
}

?>
