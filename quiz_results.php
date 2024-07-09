<?php
// Database connection details
$servername = "localhost";
$username = "root@localhost";
$password = "";
$dbname = "quiz_db";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the submitted answers
$student_id = 1; // Replace with the actual student ID
$quiz_type = 'full_stack'; // Change this to the respective quiz type
$html_q1 = isset($_POST['html-q1']) ? $_POST['html-q1'] : '';
$js_q1 = isset($_POST['js-q1']) ? $_POST['js-q1'] : '';
// Add more questions here

// Prepare the SQL query
$sql = "INSERT INTO quiz_results (student_id, quiz_type, html_q1, js_q1) VALUES (?, ?, ?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Bind the parameters
$stmt->bind_param("isss", $student_id, $quiz_type, $html_q1, $js_q1);

// Execute the statement
if ($stmt->execute()) {
    echo "<script>alert('Thank you! Submitted successfully.');</script>";
} else {
    echo "<script>alert('Error storing the result. Please try again.');</script>";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>