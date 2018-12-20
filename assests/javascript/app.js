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


let questionsAnswered = 0;
let answersWrong = 0;
let answersRight = 0;
let unGuessed = 0;
let twentySecondsTimer = 20;
let randomQuestion = Math.floor(Math.random() * questions.length);
let currentQuestion = questions[randomQuestion];
let timer;
let p = $("p")

$('button').on('click', loadQuestion(), startCounter());
function startCounter() {
    twentySecondsTimer--;
    $('.timer').html('Timer: ' + twentySecondsTimer);
    if (twentySecondsTimer === 0) {
        unGuessed++;
        $(".unguessed").html("Unguessed questions:" + unGuessed)
        alert("Times Up! Correct Answer is" + " " + currentQuestion.choices[currentQuestion.answer])
        reset();

    }
};
function loadQuestion() {
    clearTimeout(timer);
    $('button').remove()
    $('.questions').empty();
    if(questionsAnswered < 3) {
    $('.questions').show()
    }
    currentQuestion = questions[randomQuestion]
    $('.questions').html(currentQuestion.question + "<br>")
    timer = setInterval(startCounter, 1000);
    $('.timer').html('Timer: ' + twentySecondsTimer);
    for (let i = 0; i < questions[randomQuestion].choices.length; i++) {
        const randomSelected = questions[randomQuestion].choices[i];
        $('.questions').append(`<p data-name='${randomSelected}'> ${randomSelected}`);
    }
    if( questionsAnswered >= 3) {
        if( answersRight >= 2) {
            $(".winner").html("You win!")
        }
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

function reset() {
   
    twentySecondsTimer = 20;
    randomQuestion = Math.floor(Math.random() * questions.length);
    clearInterval(timer);
    setTimeout(loadQuestion, 1500); 
    $(".questions").hide()
   
};

$(document).on('click', 'p', function() {
    const value = $(this).attr('data-name');
    if(value === currentQuestion.choices[currentQuestion.answer]) {
        answersRight++;
        alert("Correct!")
        $(".right").hide()
        $(".right").html("Number right:" + answersRight)
        questionsAnswered++;
        loadQuestion();
        reset()
        
    }
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


