<?php require_once("inc/authorized.php"); ?><!DOCTYPE html>
<html>
<head>
    <?php require_once("inc/head.php"); ?> <!-- Head tag related code -->
    <title>Dashboard Page</title>
</head>
<body>

    <?php require_once("inc/header.php"); ?> <!-- Menu related code -->

    <div class="container" style="margin-top: 100px;">
        <table class="view_records">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            
            <?php
                include 'inc/conn.php'; // Database connection handshake

                $sql = "SELECT * FROM students";
                $result = mysqli_query($connection, $sql);

                while ($student = mysqli_fetch_assoc($result)) {
                    ?>
                    <tr>
                        <td><?php echo $student['name']; ?></td>
                        <td><?php echo $student['email']; ?></td>
                        <td><?php echo $student['age']; ?></td>
                        <td>
                            <a href="contact.php?edit=<?= $student['id']; ?>" class="edit">Edit</a>
                        </td>
                        <td>
                            <a href="contact.php?delete=<?= $student['id']; ?>" class="delete">Delete</a>
                        </td>
                    </tr>
                    <?php
                }
            ?>
        </table>
    </div>

    <?php require_once("inc/footer.php"); ?> <!-- footer related code, scripts etc -->

</body>
</html>
