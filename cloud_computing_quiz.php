<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloud Computing Quiz</title>
    <link rel="stylesheet" href="quiz.css">
</head>
<body>
    <div class="quiz-container">
        <h1>Cloud Computing Quiz</h1>
        <form id="quiz-form" action="cloud_computing_result.php" method="post">
            <!-- Cloud Concepts Quiz -->
            <div class="quiz-section">
                <h2>Cloud Concepts</h2>
                <div class="question">
                    <p>What is the main advantage of using cloud computing?</p>
                    <input type="radio" id="cloud-q1-a1" name="cloud-q1" value="a">
                    <label for="cloud-q1-a1">Increased security</label><br>
                    <input type="radio" id="cloud-q1-a2" name="cloud-q1" value="b">
                    <label for="cloud-q1-a2">Scalability and cost-efficiency</label><br>
                    <input type="radio" id="cloud-q1-a3" name="cloud-q1" value="c">
                    <label for="cloud-q1-a3">Faster processing speed</label>
                </div>
                <!-- Add more Cloud Concepts questions here -->
            </div>

            <!-- AWS Quiz -->
            <div class="quiz-section">
                <h2>AWS</h2>
                <div class="question">
                    <p>What is the AWS service used for storing and querying structured data?</p>
                    <input type="radio" id="aws-q1-a1" name="aws-q1" value="a">
                    <label for="aws-q1-a1">Amazon S3</label><br>
                    <input type="radio" id="aws-q1-a2" name="aws-q1" value="b">
                    <label for="aws-q1-a2">Amazon RDS</label><br>
                    <input type="radio" id="aws-q1-a3" name="aws-q1" value="c">
                    <label for="aws-q1-a3">Amazon EC2</label>
                </div>
                <!-- Add more AWS questions here -->
            </div>

            <!-- Add more quiz sections for other technologies -->

            <input type="submit" value="Submit">
        </form>
    </div>