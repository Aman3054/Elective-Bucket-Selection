<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $bucket = $_POST["bucket"];
    $query = $_POST["query"];

    $to = "er.ishitapathak@gmail.com";
    $subject = "New Query from Student Management System";
    $message = "Name: " . $name . "\n";
    $message .= "Bucket: " . $bucket . "\n";
    $message .= "Query: " . $query . "\n";
    $headers = "From: http://localhost/studentmanagement/index.php";

    if (mail($to, $subject, $message, $headers)) {
        echo "Query submitted successfully!";
    } else {
        echo "An error occurred while sending the query.";
    }
}
?>