var questions = [
    {
    question: "Which of the following is in Portland, Oregon?",
    answer: "Pittock Mansion",
    choices: ["1. Statue of Liberty", "2. Ponce City Market", "3. Cloud Gate", "4. Pittock Mansion"]
    },
    {
    question: "What is the third digit of pi?",
    answer: "4",
    choices:["1. 8","2. 3", "3. 4", "4.Mmmmm.."]
    },
    { 
    question: "When was the last leap year?",
    answer: "2016",
    choices: ["1918", "2016", "1723", "2008"]
    },
    {
    question: "What is commonly refered to as a 'perfect spiral'?",
    answer: "Fibonaccis number",
    choices: ["Tom Brady's throw", "Fibbonaccis number", "Doughnuts", "Stratus Clouds"]
    },
    { 
    question: "When was the start of the Autumn Equinox?",
    answer: "September 23rd",
    choices: ["September 23rd", "December 9th", "Feburary 29th", "4. I don't know this one either"]
    },
    { 
    question: "What is the third element in the periodic table?",
    answer: "Lithium",
    choices: ["1. Hydrogen", "2. Helium", "3. Xanandium", "4. Lithium"]
    }]


let nextQuestion = 0;

for (let i = 0; i < questions[0].choices.length; i++) {
    // display into the
}

let answersWrong = 0
let answersRight = 0
let unGuessed = 0
let twentySecondsTimer = 20
let randomQuestion = Math.floor(Math.random() * questions.length)
let currentQuestion = questions[randomQuestion]

function restart() {

    randomQuestion = Math.floor(Math.random() * questions.length)
    twentySecondsTimer = 20
    $('#q1').text(currentQuestion.question);
    $('#c1').append(currentQuestion.choices[0]) 
    $('#c2').append(currentQuestion.choices[1]) 
    $('#c3').append(currentQuestion.choices[2]) 
    $('#c4').append(currentQuestion.choices[3]) 

}
$("button").one("click", function() {
    $("button").hide();
    $('#q1').text(currentQuestion.question);
    $('#c1').append(currentQuestion.choices[0]) 
    $('#c2').append(currentQuestion.choices[1]) 
    $('#c3').append(currentQuestion.choices[2]) 
    $('#c4').append(currentQuestion.choices[3]) 
    let timer = setInterval(function() {
        twentySecondsTimer--;
        $(".timer").html("Time:" + twentySecondsTimer)
        if(twentySecondsTimer <=0) {
            clearInterval( timer );
            unGuessed++;
            $(".unguessed").html("Unguessed questions:" + unGuessed)
          restart();
        };
    },1000)
 

})


// for(let i=0; i<questions.length; i++){
// for(let j=0; j<questions[i].choices.length; j++){
//     if(questions[i].answer===questions[i].choices[j]){
//         .style.backgroundColor = 'green';
//     }else{
//         this.style.backgroundColor = 'red';
//     }
// }
// }
/* if(this.choices === this.answer){
    div.style.backgroundColor = "green";
}else{
    div.style.backgroundColor = "red";
}*/
