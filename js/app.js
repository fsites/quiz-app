$(document).ready(function() {

/*QUESTIONS ARRAY*/
var questions = [
	{question: "Who managed the Oakland A's from 2007-2011?",
	answers: ["Bob Geren", "Tony La Russa", "Charlie Manuel", "Ozzie Guillen"],
	correct: 0},

	{question: "Which pitcher won the 1992 Cy Young Award with the Oakland A's?",
	answers: ["Randy Johnson", "Roger Clemens", "Dennis Eckersley", "David Cone"],
	correct: 2},

	{question: "Who has the most all time home runs for the Oakland A's?",
	answers: ["Reggie Jackson", "Mark McGwire", "Willie McCovey", "Jose Canseco"],
	correct: 1},

	{question: "Where did the Oakland A's franchise originate?",
	answers: ["Kansas City", "Washington D.C.", "Chicago", "Philadelphia"],
	correct: 3},

	{question: "Which former A's player holds the record for most stolen bases in MLB history?",
	answers: ["Reggie Jackson", "Mo Vaughn", "Willie McCovey", "Rickey Henderson"],
	correct: 3}
];

/*GLOBAL VARIABLES*/
var questionNum = 0
var numberCorrect = 0

/*HIDES QUESTIONS on PAGE LOAD*/
$('.content').hide();

/*HIDES BEGIN BUTTON ON CLICK, SHOWS FIRST QUESTION*/
$('#begin-button').click(function(){
	$('#begin').hide();
	$('.content').show();
	$('#feedback').text("Select an Answer and press Submit");
	question();
})

/*HELPER FUNCTION - LOADS QUESTION and ANSWERS*/
function question() {
	console.log("questionNum = " + questionNum);
	if (questionNum < questions.length) {
		$('.question').text(questions[questionNum].question);
		for (i = 0; i < questions[questionNum].answers.length; i++) {
			$('.answers').prepend("<input type='radio' name='answer' class='radio' value=' "+ i +" '>" 
				+ questions[questionNum].answers[i] 
				+ "<br>");
			}
		}
	else {
		quizEnd()
	}
}

/*HELPER FUNCTION - REMOVES RADIO BUTTONS*/
function removeAnswers() {
	$('.radio').remove();
	$('.answers').empty();
}

/*HELPER FUNCTION - ENDS QUIZ and DISPLAYS RESULTS*/
function quizEnd() {
		$('.question').hide()
		$('.answerform').hide()
		$('#feedback').text("You got " 				
			+ numberCorrect 
			+ " out of " + questions.length + " correct")
}
		
/*SUBMIT CLICKED FUNCTION*/
$('#submitbutton').click(function() {
	//local variables to be compared
	var userAnswer = $('input[type=radio]:checked').val();
	var correctAnswer = questions[questionNum].correct;
		//Checks answers and moves to next question
		if (userAnswer == null) {
			$('#feedback').text("You need to pick something...")}
		else if (userAnswer == correctAnswer) {
			$('#feedback').text("Correct!")
			removeAnswers()
			questionNum++
			numberCorrect++
			question()	
		}
		else {
			$('#feedback').text("Wrong Answer")
			removeAnswers()
			questionNum++
			question()
		};
	console.log('submit clicked')
	console.log('userAnswer is ' + userAnswer)
	return false;
})


});

/*THIGNS TO ADD
More questions (100)
Restart button
Make scalable for mobile
Display current score
Tweak css
Score as percentage
Display number of questions remaining
Display correct answers if answered wrong
*/









