<?php
    include 'inc/conn.php'; // Database connection handshake

    header("Content-Type: application/json"); // set response type as JSON for ajax operations

    if($_SERVER["REQUEST_METHOD"] == "POST") { // Check if form is submitted
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $age = $_POST["age"];

        $stmt = $connection->prepare("INSERT INTO students (name, email, password, age) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("sssi", $name, $email, $password, $age);
        $inserted = $stmt->execute();

        $result = [];
        if($inserted) {
            $result = [
                "success" => true,
                "message" => "Data added!"
            ];
        }
        else {
            $result = [
                "success" => false,
                "message" => "An error Occured!"
            ];
        }
        echo json_encode($result); // convert php array into JSON
    }
    else {
        echo '{"success": "false", "message": "Method is not POST!"}';
    }
?>