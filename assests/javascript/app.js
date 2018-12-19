var questions = [
    {
        question: "Which of the following is in Portland, Oregon?",
        answer: 3,
        choices: ["Statue of Liberty", "Ponce City Market", "Cloud Gate", "Pittock Mansion"]
    },
    {
        question: "What is the third digit of pi?",
        answer: 3,
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


for (let i = 0; i < questions[0].choices.length; i++) {

    // display into the
}

let questionsAnswered = 0
let answersWrong = 0
let answersRight = 0
let unGuessed = 0
let twentySecondsTimer = 20
let randomQuestion = Math.floor(Math.random() * questions.length)
let currentQuestion = questions[randomQuestion]

function nextQuestion() {
    twentySecondsTimer = 20
    randomQuestion = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[randomQuestion]
    let timer = setInterval(function () {
        
        $(".timer").html("Time:" + twentySecondsTimer)
        twentySecondsTimer--;
        if (twentySecondsTimer <= 0) {
            clearInterval(timer);
            unGuessed++;
        }
    }, 1000)
    $('#q1').text(currentQuestion.question);
    $('#c1').html(currentQuestion.choices[0])
    $('#c2').html(currentQuestion.choices[1])
    $('#c3').html(currentQuestion.choices[2])
    $('#c4').html(currentQuestion.choices[3])
    if (questionsAnswered = 3) {
        $(".questions").hide()
        $(".right").show()
        $(".wrong").show()
    }

}
$("button").on("click", function () {
    $("button").hide();
    $('#q1').text(currentQuestion.question);
    $('#c1').append(currentQuestion.choices[0])
    $('#c2').append(currentQuestion.choices[1])
    $('#c3').append(currentQuestion.choices[2])
    $('#c4').append(currentQuestion.choices[3])
    let timer = setInterval(function () {
        twentySecondsTimer--;
        $(".timer").html("Time:" + twentySecondsTimer)
        if (twentySecondsTimer <= 0) {
            clearInterval(timer);
            questionsAnswered++;
            unGuessed++;
            $(".unguessed").html("Unguessed questions:" + unGuessed)
            alert("Times Up! Correct Answer is" + " " + currentQuestion.choices[currentQuestion.answer])
            nextQuestion();
        };
    }, 1000)
})
$(".questions").on("click", function (event) {
    if (event = currentQuestion.choices[currentQuestion.answer]) {
        answersRight++;
        alert("Correct!")
        $(".right").hide()
        $(".right").html("Number right:" + answersRight)
        questionsAnswered++;
        nextQuestion();

    }
    else {
        answersWrong++;
        alert("Wrong, the answer is" + " " + currentQuestion.choices[currentQuestion.answer])
        $(".wrong").hide()
        $(".wrong").html("Number wrong:" + answersWrong)
        questionsAnswered++;
        nextQuestion();
    }
})



/* if(this.choices === this.answer){
    div.style.backgroundColor = "green";
}else{
    div.style.backgroundColor = "red";
}*/
