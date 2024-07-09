<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Stack Quiz</title>
    <link rel="stylesheet" href="quiz.css">
</head>
<body>
    <div class="quiz-container">
        <h1>Full Stack Quiz</h1>
        <form id="quiz-form" action="full_stack_result.php" method="post">
            <!-- HTML Quiz -->
            <div class="quiz-section">
                <h2>HTML</h2>
                <div class="question">
                    <p>What does the &lt;br&gt; tag do?</p>
                    <input type="radio" id="html-q1-a1" name="html-q1" value="a">
                    <label for="html-q1-a1">Creates a bold text</label><br>
                    <input type="radio" id="html-q1-a2" name="html-q1" value="b">
                    <label for="html-q1-a2">Creates a new line</label><br>
                    <input type="radio" id="html-q1-a3" name="html-q1" value="c">
                    <label for="html-q1-a3">Creates a paragraph</label>
                </div>
            <!-- Java Quiz -->
            <div class="quiz-section">
            <h2>Java</h2>
                <div class="question">
                    <p>1. Number of primitive data types in Java are?</p>
                    <input type="radio" id="java-q1-a1" name="java-q1" value="6">
                    <label for="java-q1-a1">6</label><br>
                    <input type="radio" id="java-q1-a2" name="java-q1" value="7">
                    <label for="java-q1-a2">7</label><br>
                    <input type="radio" id="java-q1-a3" name="java-q1" value="8">
                    <label for="java-q1-a3">8</label><br>
                    <input type="radio" id="java-q1-a4" name="java-q1" value="9">
                    <label for="java-q1-a4">9</label>
                </div>

                 <div class="question">
                    <p>2. What is the size of float and double in java?</p>
                    <input type="radio" id="java-q2-a1" name="java-q2" value="32 and 64">
                    <label for="java-q2-a1">32 and 64</label><br>
                    <input type="radio" id="java-q2-a2" name="java-q2" value="32 and 32">
                    <label for="java-q2-a2">32 and 32</label><br>
                    <input type="radio" id="java-q2-a3" name="java-q2" value="64 and 64">
                    <label for="java-q2-a3">64 and 64</label><br>
                    <input type="radio" id="java-q2-a4" name="java-q2" value="64 and 32">
                    <label for="java-q2-a4">64 and 32</label>
                </div>
                <div class="question">
                    <p>3. Automatic type conversion is possible in which of the possible cases?</p>
                    <input type="radio" id="java-q3-a1" name="java-q3" value="Byte to int">
                    <label for="java-q3-a1">Byte to int</label><br>
                    <input type="radio" id="java-q3-a2" name="java-q3" value="Int to long">
                    <label for="java-q3-a2">Int to long</label><br>
                    <input type="radio" id="java-q3-a3" name="java-q3" value="Long to int">
                    <label for="java-q3-a3">Long to int</label><br>
                    <input type="radio" id="java-q3-a4" name="java-q3" value="Short to int">
                    <label for="java-q3-a4">Short to int</label>
                </div>
                <div class="question">
                    <p>4. Find the output of the following code.</p>
                    <pre>
                        int Integer = 24;
                        char String  = 'I';
                        System.out.print(Integer);
                        System.out.print(String);
                    </pre>
                    <input type="radio" id="java-q4-a1" name="java-q4" value="Compile error">
                    <label for="java-q4-a1">Compile error</label><br>
                    <input type="radio" id="java-q4-a2" name="java-q4" value="Throws exception">
                    <label for="java-q4-a2">Throws exception</label><br>
                    <input type="radio" id="java-q4-a3" name="java-q4" value="I">
                    <label for="java-q4-a3">I</label><br>
                    <input type="radio" id="java-q4-a4" name="java-q4" value="24 I">
                    <label for="java-q4-a4">24 I</label>
                <!-- Add more HTML questions here -->
            </div>
        </div>

            <!-- JavaScript Quiz -->
            <div class="quiz-section">
                <h2>JavaScript</h2>
                <div class="question">
                    <p>What is the correct syntax for a JavaScript function?</p>
                    <input type="radio" id="js-q1-a1" name="js-q1" value="a">
                    <label for="js-q1-a1">function myFunction()</label><br>
                    <input type="radio" id="js-q1-a2" name="js-q1" value="b">
                    <label for="js-q1-a2">function = myFunction()</label><br>
                    <input type="radio" id="js-q1-a3" name="js-q1" value="c">
                    <label for="js-q1-a3">function:myFunction()</label>
                </div>
                <!-- Add more JavaScript questions here -->
            </div>

            <!-- Add more quiz sections for other technologies -->

            <input type="submit" value="Submit">
        </form>
    </div>

    <script src="quiz.js"></script>
</body>
</html>