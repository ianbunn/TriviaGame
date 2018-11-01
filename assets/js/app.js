$(document).ready(function () {

    $("#startGame").click(function() {

        trivia.startGame();

    })

})

var ticker = 1;

var timerLeft = 5;

// Trivia object with properties and methods to start and run the game
var trivia = {

    // Default trivia properties
    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0,
    qRound: 0,
    timerId: "",
    countdown: function() {

        // If timerLeft is not equal to zero, substract 1 and append that timerLeft to #timer
        if (timerLeft != 0) {
            timerLeft--;
            $("#timer").text("Time Remaining: " + timerLeft + " seconds");



            // If timerLeft is 0 then show unanswered
            if(timerLeft === 0){
                $("#question").hide();
                $("#choices").hide();
                $("#unanswered").show();

                this.qRound=1;
                
            }

        }
    },

    // Start game with trivia's method
    startGame: function(){

        // Starting game by adding hide and show
        $("#startGame").hide();
        $("#timer").show();

        // Load question and choices
        this.loadQuestion();
        this.loadChoices();

        // Run trivia countdown method every second when game is started
        setInterval(this.countdown, 1000);

    },

    // Load the question
    loadQuestion: function() {

        
        $("#question").text(this.questions.question1.question);
        $("#question").show();

    },

    // Load the choices, looks pretty redundant, so it can be cleaned up
    loadChoices: function() {

        $("#choice1").text(this.questions.question1.choices[0]);
        $("#choices").show();
        $("#choice2").text(this.questions.question1.choices[1]);
        $("#choices").show();
        $("#choice3").text(this.questions.question1.choices[2]);
        $("#choices").show();
        $("#choice4").text(this.questions.question1.choices[3]);
        $("#choices").show();

    },

    // There is nothing in this trivia.checkAnswer method !!!NEEED TO WORK ON IT!!!
    checkAnswer: function() {

        // if user clicks on correct div
        // show correct answer

        // else if user clicks on incorrect div
        // show incorrect answer

        // else user doesn't click on any div
        // show unanswered

    },

    // Questions set as an object with props, array choices and answer
    questions: {
        question1: {
            question: "During his embarrassing Dundie award presentation, Michael covers a number of popular songs. To whom is Michael presenting a Dundie award when he sings along to 'You Sexy Thing' by '70s British funk band Hot Chocolate?",
            choices: [
                "Michael",
                "Jim",
                "Meredith",
                "Ryan"
            ],
            answer: "Ryan"
        },

        question2: {
            question: "What is Michael Scott's middle name?",
            choices: [
                "Scranton",
                "Michael",
                "George",
                "Gary"
            ],
            answer: "Gary"
        },

        question3: {
            question: "What username did Michael use on his online dating site account?",
            choices: [
                "LoverNotAFighter",
                "CallMeMaybe",
                "LittleKidLover",
                "YouSexyThingYou"
            ],
            answer: "LittleKidLover"
        },

        question4: {
            question: "What is the exclusive club that Pam, Oscar, and Toby establish in the episode 'Branch Wars'?",
            choices: [
                "Luxury Club",
                "The Insiders Club",
                "Thee Club",
                "Finer Things Club"
            ],
            answer: "Finer Things Club"
        },

        question5: {
            question: "What is the name of the paper company where 'The Office' takes place?",
            choices: [
                "Office Depot",
                "Dunder-Mifflin",
                "The Paper Company",
                "Dungler-Muffler"
            ],
            answer: "Dunder-Mifflin"
        },

        question6: {
            question: "At Jim and Pam's wedding in the 'Niagara' episode, what was Kevin wearing on his feet?",
            choices: [
                "Dress shoes",
                "Tennis shoes",
                "Sandals",
                "Tissue boxes"
            ],
            answer: "Tissue boxes"
        },

        question7: {
            question: "In the episode 'The Coup', the members of the Stamford branch play a video game with each other. However, Jim finds that he is completely inept at the game. What game is it?",
            choices: [
                "Geors of War",
                "FIFA",
                "Redemption",
                "Call of Duty"
            ],
            answer: "Call of Duty"
        },

        question8: {
            question: "Who admits responsibility for inhaling pot smoke at an Alicia Keys concert in 'Drug Testing' episode?",
            choices: [
                "Jim",
                "Ryan",
                "Michael",
                "Kelly"
            ],
            answer: "Michael"
        }

    }

};