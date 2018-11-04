$(document).ready(function () {
    $("#start").on("click", function () {
        $(this).hide();
        setTimeout(round, 1000);
        timerStart();
    });
});

// DEFAULT VARIABLES FOR THE GAME
var roundNumber = 0;
var question = "";
var answers = [];
var correctAnswer = "";
var incorrectAnswers = 0;
var correctAnswers = 0;
var unanswered = 0;
var timeLeft = 15;
var countdown;

var usersChoice;

// TRIVIA QUESTIONS
var questions = [
    {
    question: "During his embarrassing Dundie award presentation, Michael covers a number of popular songs. To whom is Michael presenting a Dundie award when he sings along to 'You Sexy Thing' by '70s British funk band Hot Chocolate?",
    answers: ["Michael", "Jim", "Meredith", "Ryan"],
    correctAnswer: "Ryan",
    gif: "<img src='assets/images/question1.gif'  class='img-fluid'>"
    },
    {
    question: "What is Michael Scott's middle name?",
    answers: ["Scranton", "Michael", "George", "Gary"],
    correctAnswer: "Gary",
    gif: "<img src='assets/images/question2.gif'  class='img-fluid'>"
    },
    {
    question: "What username did Michael use on his online dating site account?",
    answers: ["LoverNotAFighter", "CallMeMaybe", "LittleKidLover", "YouSexyThingYou"],
    correctAnswer: "LittleKidLover",
    gif: "<img src='assets/images/question3.gif'  class='img-fluid'>"
    },
    {
    question: "What is the exclusive club that Pam, Oscar, and Toby establish in the episode 'Branch Wars'?",
    answers: ["Luxury Club", "The Insiders Club", "Thee Club", "Finer Things Club"],
    correctAnswer: "Finer Things Club",
    gif: "<img src='assets/images/question4.gif'  class='img-fluid'>"
    },
    {
    question: "What is the name of the paper company where 'The Office' takes place?",
    answers: ["Office Depot", "Dunder-Mifflin", "The Paper Company", "Dungler-Muffler"],
    correctAnswer: "Dunder-Mifflin",
    gif: "<img src='assets/images/question5.jpg' class='img-fluid'>"
    },
    {
    question: "At Jim and Pam's wedding in the 'Niagara' episode, what was Kevin wearing on his feet?",
    answers: ["Dress shoes", "Tennis shoes", "Sandals", "Tissue boxes"],
    correctAnswer: "Tissue boxes",
    gif: "<img src='assets/images/question6.gif' class='img-fluid'>"
    },
    {
    question: "In the episode 'The Coup', the members of the Stamford branch play a video game with each other. However, Jim finds that he is completely inept at the game. What game is it?",
    answers: ["Geors of War", "FIFA", "Fortnite", "Call of Duty"],
    correctAnswer: "Call of Duty",
    gif: "<img src='assets/images/question7.gif'  class='img-fluid'>"
    },
    {
    question: "Who admits responsibility for inhaling pot smoke at an Alicia Keys concert in 'Drug Testing' episode?",
    answers: ["Jim", "Ryan", "Michael", "Kelly"],
    correctAnswer: "Michael",
    gif: "<img src='assets/images/question8.gif'  class='img-fluid'>"
    }
]

// EACH QUESTION GETS A FRESH TIMER WITH TIMERCOUNTDOWN FUNCTION EVERY SECOND
function timerStart() {
    clearInterval(countdown);
    timeLeft = 15;
    countdown = setInterval(timerCountDown, 1000);
};

// DECREASE THE TIMER INTERVAL BY ONE
function timerCountDown() {
    timeLeft--;
    $("#timer").text("Time Remaining: " + timeLeft + " seconds");
    if (timeLeft <= 0) {
        stopTimer();
        $("#round").html("<p>You ran out of time!</p><p>The correct answer is <span id='rightAnswerChoice'>" + questions[roundNumber].correctAnswer + "</span>.</p>");
        $("#choices").html("");
        unanswered++;
        setTimeout(nextRound, 2*1000);
    }
};

function stopTimer() {
    clearInterval(countdown);
}

// SHOW THE QUESTION AND CHOICES FOR THE ROUNDNUMBER
function round() {

    $("#timer").show();

    $("#round").text(questions[roundNumber].question);

    $("#choices").html(
        "<p class='answer col-12'>" + questions[roundNumber].answers[0] + "<p>" +
        "<p class='answer col-12'>" + questions[roundNumber].answers[1] + "<p>" +
        "<p class='answer col-12'>" + questions[roundNumber].answers[2] + "<p>" +
        "<p class='answer col-12'>" + questions[roundNumber].answers[3] + "<p>"
    )

    $(".answer").on("click", function () {
        usersChoice = $(this).text();
        if (usersChoice === questions[roundNumber].correctAnswer) {
            correct();
        } else {
            incorrect();
        }
    });

}

// LOAD THE NEXT ROUND CONDITIONAL TO CHECK FOR LAST ROUND
function nextRound() {
    if (roundNumber < 7) {
        roundNumber++;
        setTimeout(round, 2000);
        setTimeout(timerStart, 1000);
    } else {
        setTimeout(gameOver, 2000);
    }
}

// CHECK FOR CORRECT ANSWER AND ADD IT TO THE SCORE
function correct() {
    stopTimer();
    correctAnswers++
    $("#round").text("You got it right!");
    $("#choices").html(questions[roundNumber].gif);
    setTimeout(nextRound, 2*1000);
}

// CHECK FOR INCORRECT ANSWER AND ADD IT TO THE SCORE
function incorrect() {
    stopTimer();
    incorrectAnswers++;
    $("#round").html("<p>You got it wrong!</p><p>The correct answer is <span id='rightAnswerChoice'>" + questions[roundNumber].correctAnswer + "</span>.</p>");
    $("#choices").html("");
    setTimeout(nextRound, 2*1000);
}

// SHOW SCORE TO USER AND CHOICE TO RESTART GAME
function gameOver() {

    var score = Math.round((correctAnswers / 8) * 100);

    $("#timer").hide();

    $("#round").html("<h1>YOUR SCORE: " + score +"/100</h1>");
    $("#choices").html(
        "<p>Correct Answers: " + correctAnswers + "<p>" +
        "<p>Incorrect Answers: " + incorrectAnswers + "<p>" +
        "<p>Unanswered: " + unanswered + "<p>" +
        "<br><button id='newGame'>Click here to play again</button>"
    );

    $('#newGame').on("click", function () {
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        roundNumber = 0;
        timer = 16;
        setTimeout(round, 1000);
        timerStart();
    })
}