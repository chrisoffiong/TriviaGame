//questions object to store questions, answers, and choices
var questions = [
    {
        question: "Which of the following is in Portland, Oregon?",
        answer: 3,
        choices: ["Statue of Liberty", "Ponce City Market", "Cloud Gate", "Pittock Mansion"]
    },
    {
        question: "What is the third digit of pi?",
        answer: 2,
        choices: ["8", "3", "4", "Mmmmm.."]
    },
    {
        question: "When was the last leap year?",
        answer: 1,
        choices: ["1918", "2016", "1723", "2008"]
    },
    {
        question: "What is commonly refered to as a 'perfect spiral'?",
        answer: 1,
        choices: ["Tom Brady's throw", "Fibbonaccis number", "Doughnuts", "Stratus Clouds"]
    },
    {
        question: "When was the start of the Autumn Equinox?",
        answer: 0,
        choices: ["September 23rd", "December 9th", "Feburary 29th", "I don't know this one either"]
    },
    {
        question: "What is the third element in the periodic table?",
        answer: 3,
        choices: ["Hydrogen", "Helium", "Xanandium", "Lithium"]
    }]

// global variables
let questionsAnswered = 0;
let answersWrong = 0;
let answersRight = 0;
let unGuessed = 0;
let twentySecondsTimer = 20;
let randomQuestion = Math.floor(Math.random() * questions.length);
let currentQuestion = questions[randomQuestion];
let timer;
let p = $("p")
//starts the game on a button press
//Button disappears before pressed??
$('button').on('click', loadQuestion(), startCounter());
//function that starts the timer
function startCounter() {
    twentySecondsTimer--;
    $('.timer').html('Timer: ' + twentySecondsTimer);
    //if the timer hits 0, number unguessed goes up and timer resets
    if (twentySecondsTimer === 0) {
        unGuessed++;
        $(".unguessed").html("Unguessed questions:" + unGuessed)
        alert("Times Up! Correct Answer is" + " " + currentQuestion.choices[currentQuestion.answer])
        reset();

    }
};
//function that loads questions
function loadQuestion() {
    clearTimeout(timer);
    $('button').remove()
    $('.questions').empty();
    //stops questions from showing if you answer 3
    if(questionsAnswered < 3) {
    $('.questions').show()
    }
    currentQuestion = questions[randomQuestion]
    $('.questions').html(currentQuestion.question + "<br>")
    timer = setInterval(startCounter, 1000);
    $('.timer').html('Timer: ' + twentySecondsTimer);
    //for loops that displays the choices
    for (let i = 0; i < questions[randomQuestion].choices.length; i++) {
        const randomSelected = questions[randomQuestion].choices[i];
        $('.questions').append(`<p data-name='${randomSelected}'> ${randomSelected}`);
    }
    //if you answers two or more questions right you win
    if( questionsAnswered >= 3) {
        if( answersRight >= 2) {
            $(".winner").html("You win!")
        }
    //if not you lose
        else {
            $(".winner").html("You Lose! Try Again!")
        }
        $('questions').empty()
        $('questions').hide()
        $('.timer').empty()
        clearInterval(timer)
        $('.right').show()
        $('.wrong').show()
        
    }
    console.log(questionsAnswered)
    
}
//reset function that resests timer and sets a delay before next question
function reset() {
   
    twentySecondsTimer = 20;
    randomQuestion = Math.floor(Math.random() * questions.length);
    clearInterval(timer);
    setTimeout(loadQuestion, 1500); 
    $(".questions").hide()
   
};
//if a user clicks a choices it determines if the value is the same as the answer or not
$(document).on('click', 'p', function() {
    const value = $(this).attr('data-name');
    //if answer is correct you got a display of correct
    if(value === currentQuestion.choices[currentQuestion.answer]) {
        answersRight++;
        alert("Correct!")
        $(".right").hide()
        $(".right").html("Number right:" + answersRight)
        questionsAnswered++;
        loadQuestion();
        reset()
    }
    //if not you get a wrong display
    else {
        answersWrong++;
        alert("Wrong, the answer is" + " " + currentQuestion.choices[currentQuestion.answer])
        $(".wrong").hide()
        $(".wrong").html("Number wrong:" + answersWrong)
        questionsAnswered++;
        loadQuestion();
        reset()
    }
    ;
});


