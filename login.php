<!DOCTYPE html>
<html>
<head>
    <?php require_once("inc/head.php"); ?> <!-- Head tag related code -->
    <title>Contact Page</title>
    <style>
        .showPwd {
            padding: 8px 20px;
            background: #F99;
        }
    </style>
        
</head>
<body>

<?php require_once("inc/header.php"); ?> <!-- Menu related code -->

    <div class="container" style="margin-top: 100px;">
        <form id="loginForm" class="myForm" method="post" action="inc/auth.php">

            <label>Email:</label><br>
            <input type="email" id="email" name="email" value="ali@example.com"><br><br>

            <label>Password:</label><br>
            <input type="password" id="password" name="password" value="Ali@123"><br><br>
            <div class="showPwd" type="button">TogglePassword</div>


            <button type="submit">Login</button>

        </form>
        <p id="message"></p>

    </div>

    <?php require_once("inc/footer.php"); ?> <!-- footer related code, scripts etc -->

</body>
</html>
