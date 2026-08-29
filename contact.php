<!DOCTYPE html>
<html>
<head>
    <?php require_once("inc/head.php"); ?> <!-- Head tag related code -->
    <title>Contact Page</title>
    <style>
        body {
            background: #9FF;
        }
        .fieldWrapper {
            position: relative;
        }
        .showPwd {
            right: 6px;
            bottom: 10px;
            cursor: pointer;
            font-size: 26px;
            padding: 0px 6px;
            background: #F99;
            position: absolute;
        }
    </style>
        
</head>
<body>

<?php require_once("inc/header.php"); ?> <!-- Menu related code -->

    <div class="container" style="margin-top: 100px;">
        <form id="myForm" class="myForm">

            <?php
                $student = [];
                $student['name'] = "";
                $student['email'] = "";
                $student['password'] = "";
                $student['age'] = "";
                $editID = "";
                $deleteID = "";
                if(isset($_GET)) {
                    include 'inc/conn.php'; // Database connection handshake

                    $editID = (isset($_GET['edit'])) ? $_GET['edit'] : "";
                    $deleteID = (isset($_GET['delete'])) ? $_GET['delete'] : "";

                    if($editID) {
                        $sql = "SELECT * FROM students WHERE id=$editID";
                        $result = mysqli_query($connection, $sql);
                        $student = mysqli_fetch_assoc($result);
                        // Hidden field for Edit record
                        echo '<input type="hidden" name="edit" value="'. $editID .'" />';
                    }
                    if($deleteID) {
                        $sql = "DELETE FROM students WHERE id=$deleteID";
                        // $result = mysqli_query($connection, $sql);
                        // if($result ) {
                        //     echo "<h2>Record ID ".$deleteID." Deleted successfully!</h2> <br/>";
                        // }
                        // else {
                        //     echo "<h2>An error occured while deleting record!</h2>";
                        // }
                    }

                }

            ?>

            <label>Name:</label>
            <input type="text" id="name" name="name" value="<?php echo $student['name']; ?>"><br><br>

            <label>Email:</label>
            <input type="email" id="email" name="email" value="<?php echo $student['email']; ?>"><br><br>

            <div class="fieldWrapper">
                <label>Password:</label>
                <input type="password" id="password" name="password" value="<?php echo $student['password']; ?>">
                <div class="showPwd" type="button">&#x1F441;</div>
            </div><br><br>

            <label>Age:</label>
            <input type="number" id="age" name="age" value="<?php echo $student['age']; ?>"><br><br>


            <button type="submit">Submit</button>

        </form>
        <p id="message"></p>

    </div>

    <?php require_once("inc/footer.php"); ?> <!-- footer related code, scripts etc -->

</body>
</html>
