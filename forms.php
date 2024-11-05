<?php
// Database connection details
$host = "localhost";
$dbname = "SchoolDatabase";
$username = "root"; // Replace with your MySQL username if different
$password = ""; // Replace with your MySQL password if set

// Establish a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission<?php
// Database connection details
$host = "localhost";
$dbname = "admission_app";
$username = "root"; // Replace with your MySQL username if different
$password = ""; // Replace with your MySQL password if set

// Establish a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $studentName = $_POST['studentName'];
    $parentsName = $_POST['parentsName'];
    $emailId = $_POST['email'];
    $phoneNumber = $_POST['phone'];
    $enrollmentClass = $_POST['enrollmentClass'];
    $caste = $_POST['caste'];
    $gender = $_POST['gender'];

    // Insert into the database
    $sql = "INSERT INTO applications (student_name, parents_name, email_id, phone_number, enrollment_class, caste, gender) 
            VALUES ('$studentName', '$parentsName', '$emailId', '$phoneNumber', '$enrollmentClass', '$caste', '$gender')";

    if ($conn->query($sql) === TRUE) {
        echo "Application submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>


