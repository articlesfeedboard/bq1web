<!DOCTYPE html>
<html>
<head>
    <?php require_once("inc/head.php"); ?> <!-- Head tag related code -->
    <title>Backend Response Page</title>
</head>
<body>

    <?php require_once("inc/header.php"); ?> <!-- Menu related code -->

    <div class="container" style="margin-top: 100px;">
        <?php

            include 'inc/conn.php'; // Database connection handshake

            if($_SERVER["REQUEST_METHOD"] == "POST") { // Check if form is submitted
                $name = $_POST["name"];
                $email = $_POST["email"];
                $password = $_POST["password"];
                $age = $_POST["age"];

                if(isset($_POST["edit"])) { // if Data is submitted by Edit case
                    $id = $_POST["edit"];
                    $stmt = $connection->prepare("UPDATE students SET name=?, email=?, password=?, age=? WHERE id=?");
                    $stmt->bind_param("sssii", $name, $email, $password, $age, $id);
                    $result = $stmt->execute();
                    if($result) {
                        echo '<h2>Data Updated</h2>';
                    }
                    else {
                        echo '<h2>An error Occured!</h2>';
                    }
                }
                else { // if Data is submitted by Add case
                    $sql = "INSERT INTO students (name, email, password, age) VALUES ('$name', '$email', '$password', '$age')";
                    $result = mysqli_query($connection, $sql);

                    if($result) {
                        echo '<h2>Data Added</h2>';
                    }
                    else {
                        echo '<h2>An error Occured!</h2>';
                    }
                }
            }
            else {
                echo '<h2>Method is not POST</h2>';
            }
        ?>
    </div>

    <?php require_once("inc/footer.php"); ?> <!-- footer related code, scripts etc -->

</body>
</html>

    <?php
    // // Check if form is submitted and is edit page
    // if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["edit"])) {
    //     $name = $_POST["name"];
    //     $email = $_POST["email"];
    //     $password = $_POST["password"];
    //     $age = $_POST["age"];
    //     $id = $_POST["edit"];

    //     $stmt = $connection->prepare("UPDATE students SET name=?, email=?, password=?, age=? WHERE id=?");
    //     $stmt->bind_param("sssii", $name, $email, $password, $age, $id);
    //     $result = $stmt->execute();
    //     if($result) {
    //         echo '<h2>Data Updated</h2>';
    //     }
    //     else {
    //         echo '<h2>An error Occured!</h2>';
    //     }
    // }

    ?>