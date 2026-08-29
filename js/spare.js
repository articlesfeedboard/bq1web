

$(document).ready(function(){
    // Code here
});
$(function () {
    // Code here
});


$('.clickTest').on('click', function (){
    alert('Clicked!!!');
});

$('.alertMe').on('click', function (){
    alert('Alert Popup');
});

$(document).on('click', '.alertMe', function(){
    alert('Alert Popup');
});



// Add and Remove Class on click
$(document).on('click', '#homeBtn', function(){
    $('.page_header').toggleClass('fixed');
});


// Just Add Class
$(document).on('click', '.menuToggle', function(){
    $('.page_header .main_navigation').toggleClass('expanded');
});

// Just remove Class
$(document).on('click', '.btn', function(){
    $('.mybox').removeClass('green');
});


// to Add you html in some div using ID
$(document).on('click', '#myBtn_1', function(){
    $("#result").html("<h2>New Title</h2><p>This replaced everything!</p>");
});

// to Remove everything from div using ID
$(document).on('click', '#myBtn_2', function(){
    $("#result").html("");
});




$('.loaderWrapper').hide();
/*
    - remove();

    - toggle();
    - toggleClass();
    - fadeIn();
    - fadeOut();
    - fadeToggle();
    - text();
    - html();
    - css();
    - attr();
    - append();
    - prepend();
    - before();
    - after();

    ================
    Forms
    ================
    - val();
    - click();
    - submit();

    ================
    Traversing
    ================
    - find();
    - parent();
    - children();
    - siblings();
    - first();
    - last();
    - eq(); // starts from 0
    - next();
    - prev();
    - closest();
    - hasClass();
    - attr();
    - removeAttr();
    - trim();

    - not();
    - is();
    - each();
    =================================> appendTo();
    =================================> prependTo();
    =================================> animate.style
    =================================> Hamburger,   https://jonsuh.com/hamburgers/
                                                    https://codepen.io/designcouch/pen/ExvwPY
    =================================> slick
    =================================> selectric
    


<ul class="fruits">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
    <li>Orange</li>
    <li>Guava</li>
    <li>Grapes</li>
</ul>
<button id="btn1">Highlight First</button>

$("#btn1").click(function () {
    $(".fruits li").first().css("color", "red");
});



$(window).scroll(function(){
    var position = $(window).scrollTop();
    $("#scrollCount").text("Scroll Position: " + position);
});






------------------

<form id="myForm" method="post" action="backend.php">

    <label>Name:</label><br>
    <input type="text" id="name" name="name"><br><br>

    <label>Email:</label><br>
    <input type="email" id="email" name="email"><br><br>

    <label>Phone:</label><br>
    <input type="text" id="phone" name="phone"><br><br>

    <label>Age:</label><br>
    <input type="number" id="age" name="age"><br><br>

    <label>Gender:</label><br>
    <select id="gender" name="gender">
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
    </select>
    <br><br>

    <label>Address:</label><br>
    <textarea id="address" name="address"></textarea>
    <br><br>

    <button type="submit">Submit</button>

</form>
<p id="message"></p>



$("#myForm").submit(function (event) {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var age = $("#age").val().trim();
    var gender = $("#gender").val();
    var address = $("#address").val().trim();

    if ( name == "" || email == "" || phone == "" || age == "" || gender == "" || address == "" ) {
        event.preventDefault();
        $("#message").text("Please fill in all fields.").css("color", "red");
    }
    else {
        $("#message").text("Validation passed. Submitting form...").css("color", "green");
    }
});


*/



/*
Create Databases SQL Query:
    CREATE DATABASE school;

Create Tables using SQL:
    CREATE TABLE students (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100),
        email VARCHAR(100),
        age INT
    );

Insert data into table:
    INSERT INTO students (name, email, age)
        VALUES
        ('Ali', 'ali@email.com', 20),
        ('Sara', 'sara@email.com', 21);

Read data from table:
    SELECT * FROM students;
    SELECT name, age FROM students;
    SELECT * FROM students WHERE age > 20;
    SELECT * FROM students ORDER BY age;

Update specific record in table:
    UPDATE students SET age=22 WHERE id=1;
    UPDATE students
        SET name='Ali Khan', email='alikhan@email.com'
        WHERE id=1;
    UPDATE students
        SET age=24
        WHERE name='Ali' AND age=20;


Delete specific record from table:
    DELETE FROM students WHERE id=2;



CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100),
    hod VARCHAR(100)
);
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100),
    age INT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO students (student_name, age, department_id)
    VALUES
    ('Ali', 20, 1),
    ('Sara', 21, 1),
    ('Bilal', 19, 2);

*/

<?php require_once "include/head.php"; ?>
<?php require_once "include/header.php"; ?>
<?php require_once "include/footer.php"; ?>
<?php require_once "include/FootScripts.php"; ?>





<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "school";

$conn = mysqli_connect($host, $username, $password, $database);
if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>

<?php
include "db.php";
$sql = "SELECT * FROM students";
$result = mysqli_query($conn, $sql);


<?php
    while ($student = mysqli_fetch_assoc($result)) {
        var_dump($student);
    } 


mysqli_fetch_assoc($result); // associative array
mysqli_fetch_row($result);   // numeric array
mysqli_fetch_array($result); // both


if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    $sql = "INSERT INTO students (name, email, age) VALUES ('$name', '$email', '$age')";
    mysqli_query($conn, $sql)




    if (mysqli_query($conn, $sql)) {
        // Data inserted successfully
        header("Location: index.php");
        exit;
    } else {
        // Something went wrong
        echo "Error: " . mysqli_error($conn);
    }
}
?>



<?php

include "db.php";

$id = $_GET['id'];

$sql = "SELECT * FROM students WHERE id = $id";

$result = mysqli_query($conn, $sql);

$student = mysqli_fetch_assoc($result);


if (isset($_POST['update'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    $sql = "UPDATE students SET name = '$name', email = '$email', age = '$age' WHERE id = $id";

    mysqli_query($conn, $sql);

    header("Location: index.php");
    exit;
}

?>

<h1>Edit Student</h1>

<form method="POST">

    <label>Name:</label>

    <input
        type="text"
        name="name"
        value="<?php echo $student['name']; ?>"
    >

    <br><br>

    <label>Email:</label>

    <input
        type="email"
        name="email"
        value="<?php echo $student['email']; ?>"
    >

    <br><br>

    <label>Age:</label>

    <input
        type="number"
        name="age"
        value="<?php echo $student['age']; ?>"
    >

    <br><br>

    <button type="submit" name="update">
        Update Student
    </button>

</form>


<?php

include "db.php";
$id = $_GET['id'];
$sql = "DELETE FROM students WHERE id = $id";
mysqli_query($conn, $sql);
header("Location: index.php");
exit;

?>





$("#studentForm").submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: "insert_student.php",
        method: "POST",
        dataType: "json",
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val()
        },
        success: function(result) {
            console.log(result);
            $("#message").text(result.message);
        },
        error: function(xhr) {
            console.log(xhr.responseText);
        },
        complete: function(resp){
            console.log(resp);
        }
    });
});




                REQUEST
JavaScript ──────────────────────────> PHP
             application/json
             {"id":5,"name":"Ali Khan"}

                RESPONSE
JavaScript <────────────────────────── PHP
             application/json
             {"success":true}





<?php
include "db.php";
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$sql = "INSERT INTO students (name, email, age) VALUES ('$name', '$email', '$age')";

header("Content-Type: application/json");
if (mysqli_query($conn, $sql)) {
    echo json_encode([
        "success" => true,
        "message" => "Student added successfully"
    ]);
}
else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to add student"
    ]);
}



ALTER TABLE students AUTO_INCREMENT = 1;
ALTER TABLE students ADD COLUMN password VARCHAR(64) NOT NULL;

INSERT INTO students (name, email, age, password) VALUES
('Ali Khan', 'ali@example.com', 20, 'Ali@123'),
('Sara Ahmed', 'sara@example.com', 21, 'Sara@123'),
('Hamza Malik', 'hamza@example.com', 19, 'Hamza@123'),
('Ayesha Noor', 'ayesha@example.com', 22, 'Ayesha@123'),
('Usman Raza', 'usman@example.com', 20, 'Usman@123'),
('Fatima Shah', 'fatima@example.com', 23, 'Fatima@123'),
('Bilal Ahmed', 'bilal@example.com', 18, 'Bilal@123'),
('Hina Tariq', 'hina@example.com', 21, 'Hina@123');


$username = $_POST['username'];
$password = $_POST['password'];
$stmt = $conn->prepare(
    "SELECT * FROM students WHERE username = ? AND password = ?"
);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

prepare()     → prepare the SQL
bind_param()  → provide the values
execute()     → run the SQL
get_result()  → retrieve the rows if used in SELECT query
fetch_assoc() → get each row retrive named array

$stmt = $conn->prepare( "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?" );
$stmt->bind_param("ssii", $name, $email, $age, $id);
$result = $stmt->execute();

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0) {
        echo "Student updated successfully";
    } else {
        echo "No student was updated";
    }
} else {
    echo "Update failed";
}



// INSERT INTO students (name, email, age, password) VALUES
// ('Ali Khan', 'ali@example.com', 20, SHA2('Ali@123', 256)),
// ('Sara Ahmed', 'sara@example.com', 21, SHA2('Sara@123', 256)),
// ('Hamza Malik', 'hamza@example.com', 19, SHA2('Hamza@123', 256)),
// ('Ayesha Noor', 'ayesha@example.com', 22, SHA2('Ayesha@123', 256)),
// ('Usman Raza', 'usman@example.com', 20, SHA2('Usman@123', 256)),
// ('Fatima Shah', 'fatima@example.com', 23, SHA2('Fatima@123', 256)),
// ('Bilal Ahmed', 'bilal@example.com', 18, SHA2('Bilal@123', 256)),
// ('Hina Tariq', 'hina@example.com', 21, SHA2('Hina@123', 256));




<?php // login
session_start();
$_SESSION['username'] = 'Ali';
$_SESSION['role'] = 'admin';
echo "Session data stored.";

<?php // profile
session_start();
echo "Username: " . $_SESSION['username'];
echo "<br>";
echo "Role: " . $_SESSION['role'];

// Check
if (isset($_SESSION['username'])) {
    echo "Welcome " . $_SESSION['username'];
} else {
    echo "You are not logged in.";
}

<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit;
}
echo "Welcome to the dashboard!";


<?php // Logout
session_start();
session_unset();
session_destroy();
header("Location: login.php");
exit;



auth.php
<form action="authenticate.php" method="POST">
    <label>Username</label>
    <input type="text" name="username">

    <label>Password</label>
    <input type="password" name="password">

    <button type="submit">Login</button>
</form>

<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
?>
<h1>Dashboard</h1>
<p>
    Welcome,
    <?= htmlspecialchars($_SESSION['username']) ?>
</p>
<a href="logout.php">Logout</a>


<?php //login code
session_start();
require_once 'db.php';
$username = $_POST['username'];
$password = $_POST['password'];
$stmt = $conn->prepare("SELECT * FROM students WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows == 1) {
    $student = $result->fetch_assoc();
    $_SESSION['student_id'] = $student['id'];
    $_SESSION['username'] = $student['username'];
    header("Location: dashboard.php");
    exit;
} else {
    echo "Invalid username or password.";
}