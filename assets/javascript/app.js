$(document).ready(function () {

    //set default variables
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var noAnswer = 0;
    var questionIndex = 0;
    var theFinalCountdown = 0;
    var intervalTimer;

    var questionArray = {
        question: [
            {
                ques: "A driver noticed that the dashboard showed he had driven a total number of 15951 miles. He thought that this was a strange number because no matter in what direction it was read (from left to right or from right to left) it was the same. However, in two hours, the dashboard showed a number that had that same characteristic. What was the speed of the car?",
                optA: "110",
                optB: "55",
                optC: "65",
                optD: "450",
                corAns: "B"
            },
            {
                ques:"One watermelon weighs 10kg (22 lbs) plus the half of its own weight. How much does it weigh?",
                optA: "10kg (22 lbs)",
                optB: "25kg (55 lbs)",
                optC: "5kg (11 lbs)",
                optD: "20kg (44 lbs)",
                corAns: "D"
            },
            {
                ques: "What movie title was translated in China as Run! Ruuunnnn! Cloudzillaaaaa!?",
                optA: "Tornado",
                optB: "Take Shelter",
                optC: "Twister",
                optD: "Four Sheets to the Wind",
                corAns: "C"
            },
            {
                ques: "What was Lukes call sign while in the surroundings of Hoth in The Empire Strikes Back?",
                optA: "Echo 3",
                optB: "Echo 5",
                optC: "Echo 1",
                optD: "Echo 7",
                corAns: "A"
            },
            {
                ques: "In the film Office Space, after being told he was getting fired, Michael Bolton, along with his friends Peter and Samir, decided to rip off the company they worked for. The plan involved embezzling a tiny amount of money from each financial transaction the company made. From what movie did Michael borrow this plan?",
                optA: "Lethal Weapon II",
                optB: "Wall Street",
                optC: "War Games",
                optD: "Superman III",
                corAns: "D"
            },
            {
                ques: "This character, who has appeared in nearly every Final Fantasy game, usually provides transportation to the main characters.",
                optA: "Edgar",
                optB: "Cid",
                optC: "Sabin",
                optD: "Squall",
                corAns: "B"
            },
            {
                ques: "Which song took its title from a girls deodorant?",
                optA: "Sweet Jane",
                optB: "Smells Like Teen Spirit",
                optC: "Baby Love",
                optD: "Kashmir",
                corAns: "B"
            }
        ]

    };

    function newGame() {
        correctAnswer = 0;
        incorrectAnswer = 0;
        noAnswer = 0;
        questionIndex = 0;
        theFinalCountdown = 30;

        updateContent();
    }

    //update values on page
    function updateContent() {
        intervalTimer = setInterval(timeRemaining, 1000);
        $("#time-remaining").html("<h4>Time Remaining: " + theFinalCountdown + "</h4>");
        $("#question").html("<h4>" + questionArray.question[questionIndex].ques + "</h4>");
        $("#option-A").html("<h5>" + questionArray.question[questionIndex].optA + "</h5>");
        $("#option-B").html("<h5>" + questionArray.question[questionIndex].optB + "</h5>");
        $("#option-C").html("<h5>" + questionArray.question[questionIndex].optC + "</h5>");
        $("#option-D").html("<h5>" + questionArray.question[questionIndex].optD + "</h5>");
    }

    function checkAnswer(userChoice) {
        clearInterval(intervalTimer);
        if(questionArray.question[questionIndex].corAns == userChoice){
            correctAnswer++;
            $("#time-remaining").html("");
            $("#question").html("");
            $("#option-A").html("<h2>Correct!</h2>");
            $("#option-B").html("");
            $("#option-C").html("");
            $("#option-D").html("");
        }
        else{
            incorrectAnswer++;
            $("#time-remaining").html("");
            $("#question").html("");
            $("#option-A").html("<h2>Incorrect!</h2>");
            $("#option-B").html("<h4>The correct answer was:</h4>");
            if(questionArray.question[questionIndex].corAns == "A"){
                $("#option-C").html("<h4>" + questionArray.question[questionIndex].optA + "</h4>");
            }
            if(questionArray.question[questionIndex].corAns == "B"){
                $("#option-C").html("<h4>" + questionArray.question[questionIndex].optB + "</h4>");
            }
            if(questionArray.question[questionIndex].corAns == "C"){
                $("#option-C").html("<h4>" + questionArray.question[questionIndex].optC + "</h4>");
            }
            if(questionArray.question[questionIndex].corAns == "D"){
                $("#option-C").html("<h4>" + questionArray.question[questionIndex].optD + "</h4>");
            }
            $("#option-D").html("");
        }
        setTimeout(nextQuestion, 3000);
    }

    function nextQuestion() {
        if(questionIndex < questionArray.question.length - 1){
            questionIndex++;
            theFinalCountdown = 30;
            updateContent();
        }
        else{
            gameOver();
        }
    }

    function timeRemaining() {
        theFinalCountdown--;
        $("#time-remaining").html("<h4>Time Remaining: " + theFinalCountdown + "</h4>");
        if(theFinalCountdown == 0){
            clearInterval(intervalTimer);
            timesUp();
        }
    }

    function timesUp() {
        noAnswer++;

        $("#time-remaining").html("");
        $("#question").html("");
        $("#option-A").html("<h2>Out of Time!</h2>");
        $("#option-B").html("<h4>The correct answer was:</h4>");
        if(questionArray.question[questionIndex].corAns == "A"){
            $("#option-C").html("<h4>" + questionArray.question[questionIndex].optA + "</h4>");
        }
        if(questionArray.question[questionIndex].corAns == "B"){
            $("#option-C").html("<h4>" + questionArray.question[questionIndex].optB + "</h4>");
        }
        if(questionArray.question[questionIndex].corAns == "C"){
            $("#option-C").html("<h4>" + questionArray.question[questionIndex].optC + "</h4>");
        }
        if(questionArray.question[questionIndex].corAns == "D"){
            $("#option-C").html("<h4>" + questionArray.question[questionIndex].optD + "</h4>");
        }
        $("#option-D").html("");

        setTimeout(nextQuestion, 3000);
    }

    function gameOver() {
        $("#time-remaining").html("");
        $("#question").html("<h2>Game Over!</h2>");
        $("#option-A").html("<h4>Correct Answers: " + correctAnswer + "</h4>");
        $("#option-B").html("<h4>Incorrect Answers: " + incorrectAnswer + "</h4>");
        $("#option-C").html("<h4>Timed out: " + noAnswer + "</h4>");
        $("#option-D").html("");

        setTimeout(newGame, 10000);
    }

    //capture click on answer and check if correct
    $("#option-A").click(function () {
        checkAnswer("A");
    });

    $("#option-B").click(function () {
        checkAnswer("B");
    });

    $("#option-C").click(function () {
        checkAnswer("C");
    });

    $("#option-D").click(function () {
        checkAnswer("D");
    });

    newGame();
        
});
