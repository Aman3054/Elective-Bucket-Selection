<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Student Management System</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="style2.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap-theme.min.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
</head>
<body>
    <nav>
        <div class="container">
            <label class="logo">Niet-College</label>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="introduction.php">Introduction</a></li>
                <li><a href="introduction.php">Bucket</a></li>
                <li><a href="login.php" class="btn btn-success">Login</a></li>
            </ul>
        </div>
    </nav>
    <div class="section1">
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <h1 class="img_text">Elective <br>Bucket<br> Selection</h1>
                </div>
                <div class="col-xs-8">
                    <div class="text-center">
                        <img class="main_img" src="stud.jpg" alt="Student Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container1">
        <div class="row">
            <div class="col-md-8">
                <h1>Introduction</h1>
                <p>Discover Elective Bucket Selection at Niet-College:</p>
                <p><strong>AI/ML:</strong> Immerse yourself in Artificial Intelligence and Machine Learning, exploring algorithms and predictive modeling for real-world applications in diverse fields.</p>
                <p><strong>Full Stack:</strong> Become a versatile developer proficient in both frontend and backend technologies, mastering web development and creating scalable applications.</p>
                <p><strong>Cloud Computing:</strong> Explore the world of Cloud Computing, learning about virtualization, distributed computing, and cloud deployment models to architect scalable solutions on leading platforms like AWS, Azure, and GCP.</p>
            </div>
            <div class="col-md-4">
                <img class="welcome_img" src="img2.png" alt="Welcome Image">
            </div>
        </div>
    </div>

    <center>
        <h1>Buckets</h1>
    </center>
      <div class="section2">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="bucket-container">
                        <img src="fullstack.jpg" alt="Full Stack" class="img-responsive bucket-img">
                        <p>"Embark on a journey into the realm of Full Stack Development, where you'll master both frontend and backend technologies. From crafting responsive user interfaces to building robust server-side architectures, this elective empowers you to create dynamic web applications that resonate in the digital world."</p>
                        <div class="alt-text">
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bucket-container">
                        <h2><centre>AI/ML</centre></h2>
                        <img src="aiml.png" alt="AI/ML" class="img-responsive bucket-img">
                        <br>
                        <p>"Dive into the cutting-edge fields of Artificial Intelligence and Machine Learning, where algorithms come to life and data fuels innovation. Explore the depths of predictive modeling, pattern recognition, and neural networks, and unlock the potential of AI to revolutionize industries and reshape the future."</p>
                        <div class="alt-text">
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bucket-container">
                        <img src="cloudcomputing.png" alt="Cloud Computing" class="img-responsive bucket-img">
                        <p>"Enter the boundless skies of Cloud Computing and soar above traditional infrastructure limitations. Learn to harness the power of virtualization, distributed computing, and cloud deployment models on leading platforms like AWS, Azure, and GCP. Architect scalable solutions and elevate your projects to new heights with the agility and efficiency of cloud technology."</p>
                        <div class="alt-text">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <center>
        <h1 class="query">Query Form</h1>
    </center>


    <div align ="center" class="query_form">
        <form action="process_form.php" method="POST">

            <div class="quer_int">
                <label class="label_text">Name</label>
                <input class ="input_deg" type="text" name="">
            </div>

            <div class="quer_int">
               <label class="label_text">Bucket</label>
                <input class="input_deg"  type="text" name="">
            </div>

            <div class="quer_int">
                <label class="label_text">Query</label>
                <textarea class="input_txt"></textarea>
            </div>
            <div class="quer_int">
                
                <input class="btn btn-primary" id="submit"type="Submit" value="submit">
            </div>

        </form>

     </div>

     <footer>
         <h3 class="footer_txt">All @copyright reserved by niet.co.in </h3>
     </footer>   
</body>
</html>
