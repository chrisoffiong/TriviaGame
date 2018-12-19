var questions = [
    {
    question: "Which of the following is in Portland, Oregon?",
    answer: 3,
    choices: ["Statue of Liberty", "Ponce City Market", "Cloud Gate", "Pittock Mansion"]
    },
    {
    question: "What is the third digit of pi?",
    answer: 3,
    choices:["8","3", "4", "Mmmmm.."]
    },
    { 
    question: "When was the last leap year?",
    answer: 1,
    choices: ["1918", "2016", "1723", "2008"]
    },
    {
    question: "What is commonly refered to as a 'perfect spiral'?",
    answer: 2,
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

let answersWrong = 0
let answersRight = 0
let unGuessed = 0
let twentySecondsTimer = 20
let randomQuestion = Math.floor(Math.random() * questions.length)
let currentQuestion = questions[randomQuestion]

function nextQuestion() {

    randomQuestion = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[randomQuestion]
    twentySecondsTimer = 20
    $('#q1').text(currentQuestion.question);
    $('#c1').html(currentQuestion.choices[0]) 
    $('#c2').html(currentQuestion.choices[1]) 
    $('#c3').html(currentQuestion.choices[2]) 
    $('#c4').html(currentQuestion.choices[3])
    setInterval(decrement, 1000);

}
$("button").on("click", function() {
    $("button").hide();
    $('#q1').text(currentQuestion.question);
    $('#c1').append(currentQuestion.choices[0]) 
    $('#c2').append(currentQuestion.choices[1]) 
    $('#c3').append(currentQuestion.choices[2]) 
    $('#c4').append(currentQuestion.choices[3]) 
    for(let i=0; i<questions.length; i++){
        for(let j=0; j<questions[i].choices.length; j++){
            if(questions[i].answer===questions[i].choices[j]){
                this.style.backgroundColor = 'green';
            }else{
                this.style.backgroundColor = 'red';
            }
        }
        }
    let timer = setInterval(function() {
        twentySecondsTimer--;
        $(".timer").html("Time:" + twentySecondsTimer)
        if(twentySecondsTimer <=0) {
            clearInterval( timer );
            unGuessed++;
            $(".unguessed").html("Unguessed questions:" + unGuessed)
            alert("Times Up! Correct Answer is" + " " + currentQuestion.choices[currentQuestion.answer])
          nextQuestion();
        };
    },1000)
})

if((userSelect == rightAnswerIndex) && (answered == true)){
    answersWrong++;
    ;
} else if((userSelect != rightAnswerIndex) && (answered == true)){
    answersRight++;
    $('#message').html(messages.incorrect);
    $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);

}
 
/* if(this.choices === this.answer){
    div.style.backgroundColor = "green";
}else{
    div.style.backgroundColor = "red";
}*/
