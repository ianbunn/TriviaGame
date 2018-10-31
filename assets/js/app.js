$(document).ready(function () {

    $("#startGame").click(function() {

        trivia.startGame();

        // Timer to start when button is clicked
        var timer = setInterval(function() {
            $("#timer").html("Time Remaining: " + timer + " seconds")
        }, 30 * 1000);

    })

})

var trivia = {

    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0,
    timer: 15,
    startGame: function(){

        // Starting game by adding hide and show element
        $("#startGame").hide();
        $("#timer").show();
        $("#question").show();
        $("#choices").show();
        
    },
    questions: {
        question1: {
            question: "During his embarrassing Dundie award presentation, Michael covers a number of popular songs. To whom is Michael presenting a Dundie award when he sings along to 'You Sexy Thing' by '70s British funk band Hot Chocolate?",
            choices: [
                "Michael",
                "Jim",
                "Meredith",
                "Ryan"
            ],
            answer: function() {
                answer = this.questions.question1.choices[3]
            }
        },

        question2: {
            question: "What is Michael Scott's middle name?",
            choices: [
                "Scranton",
                "Michael",
                "George",
                "Gary"
            ],
            answer: function () {
                answer = this.questions.question2.choices[3]
            }
        },

        question3: {
            question: "What username did Michael use on his online dating site account?",
            choices: [
                "LoverNotAFighter",
                "CallMeMaybe",
                "LittleKidLover",
                "YouSexyThingYou"
            ],
            answer: function () {
                answer = this.questions.question3.choices[2]
            }
        },

        question4: {
            question: "What is the exclusive club that Pam, Oscar, and Toby establish in the episode 'Branch Wars'",
            choices: [
                "Luxury Club",
                "The Insiders Club",
                "Thee Club",
                "Finer Things Club"
            ],
            answer: function () {
                answer = this.questions.question4.choices[3]
            }
        },

        question5: {
            question: "What is the name of the paper company where 'The Office' takes place?",
            choices: [
                "Office Depot",
                "Dunder-Mifflin",
                "The Paper Company",
                "Dungler-Muffler"
            ],
            answer: function () {
                answer = this.questions.question5.choices[1]
            }
        },

        question6: {
            question: "At Jim and Pam's wedding in the 'Niagara' episode, what was Kevin wearing on his feet?",
            choices: [
                "Dress shoes",
                "Tennis shoes",
                "Sandals",
                "Tissue boxes"
            ],
            answer: function () {
                answer = this.questions.question6.choices[3]
            }
        },

        question7: {
            question: "In the episode 'The Coup', the members of the Stamford branch play a video game with each other. However, Jim finds that he is completely inept at the game. What game is it?",
            choices: [
                "Geors of War",
                "FIFA",
                "Redemption",
                "Call of Duty"
            ],
            answer: function () {
                answer = this.questions.question7.choices[3]
            }
        },

        question8: {
            question: "Who admits responsibility for inhaling pot smoke at an Alicia Keys concert in 'Drug Testing'?",
            choices: [
                "Jim",
                "Ryan",
                "Michael",
                "Kelly"
            ],
            answer: function () {
                answer = this.questions.question8.choices[2]
            }
        }

    }
};
    // You'll create a trivia game that shows only one question until the player answers it or their time runs out

    // If the player selects the correct answer, show a screen congratulating them for choosing the right option.After a few seconds, display the next question-- do this without user input

    // The scenario is similar for wrong answers and time - outs

    // If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question

    // If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.Wait a few seconds, then show the next question

    // On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game(without reloading the page)