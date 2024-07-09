<?php
function storeResult($student_id, $score, $html_q1, $js_q1, ...) {
    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "electivebucket";

    // Create a connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL query
    $sql = "INSERT INTO quiz_results (student_id, score, html_q1, js_q1, ...) VALUES (?, ?, ?, ?, ...)";

    // Prepare the statement
    $stmt = $conn->prepare($sql);

    // Bind the parameters
    $stmt->bind_param("iisss...", $student_id, $score, $html_q1, $js_q1, ...);

    // Execute the statement
    if ($stmt->execute()) {
        // Result stored successfully
        return true;
    } else {
        // Error storing the result
        return false;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>