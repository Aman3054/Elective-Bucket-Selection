require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Elective = require("../models/Elective");
const QuizQuestion = require("../models/QuizQuestion");

// Seed script to bootstrap electives and quiz questions for all three buckets.

const seed = async () => {
  try {
    await connectDB();

    await Elective.deleteMany({});
    await QuizQuestion.deleteMany({});

    const electives = await Elective.insertMany([
      {
        title: "Full Stack Development",
        description:
          "End-to-end web development, from responsive frontends to scalable backends and databases.",
        salaryInfo: "Average starting salary: ₹6–10 LPA in India.",
        skills: ["React", "Node.js", "APIs", "Databases", "Deployment"],
      },
      {
        title: "Artificial Intelligence & Machine Learning",
        description:
          "Design and train intelligent systems using data, math, and cutting-edge algorithms.",
        salaryInfo: "Average starting salary: ₹7–12 LPA in India.",
        skills: ["Python", "ML Algorithms", "Data Science", "Deep Learning"],
      },
      {
        title: "Cloud Computing",
        description:
          "Build and manage applications on cloud platforms with strong DevOps practices.",
        salaryInfo: "Average starting salary: ₹6–11 LPA in India.",
        skills: ["AWS/Azure", "Docker", "Kubernetes", "DevOps", "CI/CD"],
      },
    ]);

    const fsd = electives.find((e) => e.title === "Full Stack Development");
    const aiml = electives.find(
      (e) => e.title === "Artificial Intelligence & Machine Learning"
    );
    const cloud = electives.find((e) => e.title === "Cloud Computing");

    const questions = [
      // Full Stack Development (10)
      {
        electiveId: fsd._id,
        question: "Which stack is most commonly used for JavaScript-based full stack apps?",
        options: ["LAMP", "MERN", "MEAN", "Django"],
        correctAnswer: "MERN",
      },
      {
        electiveId: fsd._id,
        question: "Which HTTP method is typically used to create a new resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "POST",
      },
      {
        electiveId: fsd._id,
        question: "In React, which hook is used to manage component state?",
        options: ["useState", "useRef", "useEffect", "useMemo"],
        correctAnswer: "useState",
      },
      {
        electiveId: fsd._id,
        question: "Which database is document-oriented and often used with Node.js?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        correctAnswer: "MongoDB",
      },
      {
        electiveId: fsd._id,
        question: "What does REST stand for?",
        options: [
          "Representational State Transfer",
          "Remote State Transport",
          "Random Secure Transfer",
          "Relational State Tool",
        ],
        correctAnswer: "Representational State Transfer",
      },
      {
        electiveId: fsd._id,
        question: "Which CSS technique is best for responsive layouts?",
        options: ["Tables", "Inline styles", "Flexbox/Grid", "Frames"],
        correctAnswer: "Flexbox/Grid",
      },
      {
        electiveId: fsd._id,
        question: "Which tool is commonly used to bundle frontend assets?",
        options: ["Webpack", "Postman", "Mongo Shell", "Git"],
        correctAnswer: "Webpack",
      },
      {
        electiveId: fsd._id,
        question: "Which status code indicates a successful HTTP request?",
        options: ["200", "301", "404", "500"],
        correctAnswer: "200",
      },
      {
        electiveId: fsd._id,
        question: "Which feature helps React avoid unnecessary re-renders?",
        options: ["Virtual DOM", "SQL Joins", "SSH", "JDK"],
        correctAnswer: "Virtual DOM",
      },
      {
        electiveId: fsd._id,
        question: "Which role suits a Full Stack Developer?",
        options: [
          "Only mobile app UI",
          "Only hardware design",
          "Both frontend and backend web development",
          "Only database administration",
        ],
        correctAnswer: "Both frontend and backend web development",
      },

      // AI / ML (10)
      {
        electiveId: aiml._id,
        question: "Which language is most popular for ML prototyping?",
        options: ["C", "Python", "PHP", "HTML"],
        correctAnswer: "Python",
      },
      {
        electiveId: aiml._id,
        question: "Which library is widely used for deep learning?",
        options: ["React", "TensorFlow", "Express", "Bootstrap"],
        correctAnswer: "TensorFlow",
      },
      {
        electiveId: aiml._id,
        question: "What is overfitting?",
        options: [
          "Model too simple",
          "Model memorizes training data",
          "Data too small",
          "Using wrong language",
        ],
        correctAnswer: "Model memorizes training data",
      },
      {
        electiveId: aiml._id,
        question: "Which algorithm is used for classification?",
        options: [
          "K-Means Clustering",
          "Linear Regression",
          "Logistic Regression",
          "Apriori",
        ],
        correctAnswer: "Logistic Regression",
      },
      {
        electiveId: aiml._id,
        question: "Which task is best suited for supervised learning?",
        options: [
          "Finding groups in data",
          "Predicting house prices",
          "Compressing images",
          "Encrypting passwords",
        ],
        correctAnswer: "Predicting house prices",
      },
      {
        electiveId: aiml._id,
        question: "Which metric is commonly used for classification performance?",
        options: ["Accuracy", "Latency", "Bandwidth", "Throughput"],
        correctAnswer: "Accuracy",
      },
      {
        electiveId: aiml._id,
        question: "Which concept focuses on giving rewards to an agent?",
        options: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Reinforcement Learning",
          "Transfer Learning",
        ],
        correctAnswer: "Reinforcement Learning",
      },
      {
        electiveId: aiml._id,
        question: "Which field most benefits from ML?",
        options: [
          "Static HTML sites",
          "Predictive analytics",
          "Manual accounting",
          "Mechanical drawing",
        ],
        correctAnswer: "Predictive analytics",
      },
      {
        electiveId: aiml._id,
        question: "Which type of data is common in NLP tasks?",
        options: ["Images", "Audio", "Text", "Sensor voltages"],
        correctAnswer: "Text",
      },
      {
        electiveId: aiml._id,
        question: "What is a key skill for AI/ML engineers?",
        options: [
          "Understanding operating systems only",
          "Strong statistics and math",
          "Manual testing",
          "2D animation",
        ],
        correctAnswer: "Strong statistics and math",
      },

      // Cloud Computing (10)
      {
        electiveId: cloud._id,
        question: "Which of these is a major cloud provider?",
        options: ["AWS", "React", "TensorFlow", "MongoDB"],
        correctAnswer: "AWS",
      },
      {
        electiveId: cloud._id,
        question: "What does IaaS stand for?",
        options: [
          "Information as a Service",
          "Infrastructure as a Service",
          "Internet as a Service",
          "Integration as a Service",
        ],
        correctAnswer: "Infrastructure as a Service",
      },
      {
        electiveId: cloud._id,
        question: "Which tool is used to containerize applications?",
        options: ["Git", "Docker", "Postman", "VS Code"],
        correctAnswer: "Docker",
      },
      {
        electiveId: cloud._id,
        question: "What is a key benefit of cloud computing?",
        options: [
          "Manual server maintenance",
          "Fixed capacity",
          "Scalability on demand",
          "No internet required",
        ],
        correctAnswer: "Scalability on demand",
      },
      {
        electiveId: cloud._id,
        question: "Which model lets you deploy code without managing servers?",
        options: [
          "Serverless / FaaS",
          "On-premise hosting",
          "Bare-metal",
          "Desktop apps",
        ],
        correctAnswer: "Serverless / FaaS",
      },
      {
        electiveId: cloud._id,
        question: "What does CI/CD stand for?",
        options: [
          "Continuous Integration / Continuous Delivery",
          "Cloud Integration / Cloud Deployment",
          "Code Inspection / Code Debugging",
          "Central Integration / Central Development",
        ],
        correctAnswer: "Continuous Integration / Continuous Delivery",
      },
      {
        electiveId: cloud._id,
        question: "Which service type focuses on deploying complete applications?",
        options: ["IaaS", "PaaS", "SaaS", "BaaS"],
        correctAnswer: "SaaS",
      },
      {
        electiveId: cloud._id,
        question: "Which concept helps run multiple containers across machines?",
        options: ["NLP", "Kubernetes", "Jenkins", "Photoshop"],
        correctAnswer: "Kubernetes",
      },
      {
        electiveId: cloud._id,
        question: "Which best describes DevOps?",
        options: [
          "Only development",
          "Only operations",
          "Collaboration of development and operations",
          "Only testing team",
        ],
        correctAnswer: "Collaboration of development and operations",
      },
      {
        electiveId: cloud._id,
        question: "Which scenario is ideal for cloud adoption?",
        options: [
          "Static website with no traffic",
          "Highly variable traffic web app",
          "Offline desktop calculator",
          "Single-user local tool",
        ],
        correctAnswer: "Highly variable traffic web app",
      },
    ];

    await QuizQuestion.insertMany(questions);

    console.log("Seed data inserted successfully.");
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
};

seed();

