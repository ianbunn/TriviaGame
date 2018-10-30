$(document).ready(function () {

})

var trivia = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0,
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
                answer = this.choices[3]
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
                answer = this.choices[1]
            }
        },
        question3: {
            question: "Which of these is NOT a name of one of the Office (Scranton, VA) employees?",
            choices: [
                "Michael",
                "Dwight",
                "Kevin",
                "Frederick"
            ],
            answer: function () {
                answer = this.choices[1]
            }
        },
        question4: {
            question: "Which of these is NOT a name of one of the Office (Scranton, VA) employees?",
            choices: [
                "Michael",
                "Dwight",
                "Kevin",
                "Frederick"
            ],
            answer: function () {
                answer = this.choices[2]
            }
        },
        question5: {
            question: "Which of these is NOT a name of one of the Office (Scranton, VA) employees?",
            choices: [
                "Michael",
                "Dwight",
                "Kevin",
                "Frederick"
            ],
            answer: function () {
                answer = this.choices[3]
            }
        },
        question6: {
            question: "Which of these is NOT a name of one of the Office (Scranton, VA) employees?",
            choices: [
                "Michael",
                "Dwight",
                "Kevin",
                "Frederick"
            ],
            answer: function () {
                answer = this.choices[0]
            }
        },
        question7: {
            question: "Which of these is NOT a name of one of the Office (Scranton, VA) employees?",
            choices: [
                "Michael",
                "Dwight",
                "Kevin",
                "Frederick"
            ],
            answer: function () {
                answer = this.choices[1]
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