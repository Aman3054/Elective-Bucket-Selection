<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI/ML Quiz</title>
    <link rel="stylesheet" href="quiz.css">
</head>
<body>
    <div class="quiz-container">
        <h1>AI/ML Quiz</h1>
        <form id="quiz-form" action="ai_ml_result.php" method="post">
            <!-- Python Quiz -->
            <div class="quiz-section">
                <h2>Python</h2>
                <div class="question">
                    <p>What is the output of the following Python code? print(3 + 2 * 2)</p>
                    <input type="radio" id="py-q1-a1" name="py-q1" value="a">
                    <label for="py-q1-a1">5</label><br>
                    <input type="radio" id="py-q1-a2" name="py-q1" value="b">
                    <label for="py-q1-a2">7</label><br>
                    <input type="radio" id="py-q1-a3" name="py-q1" value="c">
                    <label for="py-q1-a3">10</label>
                </div>
                <!-- Add more Python questions here -->
            </div>

            <!-- Machine Learning Quiz -->
            <div class="quiz-section">
                <h2>Machine Learning</h2>
                <div class="question">
                    <p>What is the goal of supervised learning algorithms?</p>
                    <input type="radio" id="ml-q1-a1" name="ml-q1" value="a">
                    <label for="ml-q1-a1">To find patterns in data without any labeled examples</label><br>
                    <input type="radio" id="ml-q1-a2" name="ml-q1" value="b">
                    <label for="ml-q1-a2">To learn from labeled examples and make predictions on new data</label><br>
                    <input type="radio" id="ml-q1-a3" name="ml-q1" value="c">
                    <label for="ml-q1-a3">To cluster data into groups without any labels</label>
                </div>
                <!-- Add more Machine Learning questions here -->
            </div>

            <!-- Add more quiz sections for other technologies -->

            <input type="submit" value="Submit">
        </form>
    </div>

    <script src="quiz.js"></script>
</body>
</html>