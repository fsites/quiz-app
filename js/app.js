$(document).ready(function() {

/*QUESTIONS ARRAY*/
var questions = [
	{question: "Who managed the Oakland A's from 2007-2011?",
	answers: ["Bob Geren", "Tony La Russa", "Charlie Manuel", "Ozzie Guillen"],
	correct: 0},

	{question: "Which pitcher won the 1992 Cy Young Award with the Oakland A's?",
	answers: ["Randy Johson", "Roger Clemens", "Dennis Eckersley", "David Cone"],
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
	$('.question').text(questions[questionNum].question);
	for (i = 0; i <= 4; i++) {
		$('.answerform').prepend("<input type='radio' name='answer' class='radio'>" 
			+ questions[questionNum].answers[i] 
			+ "<br>");
	};
}

/*HELPER FUNCTION - REMOVES PREVIOUS ANSWERS*/
function removeAnswers() {
	undefined /*placeholder*/
}

/*SUBMIT CLICKED FUNCTION*/
var submitClicked = $('#submitbutton').click(function() {
	var userAnswer = $('.radio').prop('checked', true).val();
	var correctAnswer = questions[questionNum].correct;
	if (userAnswer == null) {
		$('#feedback').text("You didn't pick an answer... we can't have people hitting submit without even trying. So make a guess, you have a 25% chance of getting it right. Don't worry, the next question is easier.")}
	else if (userAnswer == correctAnswer) {
		questionNum++
		$('#feedback').text("Correct!")
		question()
	}
	else {
		questionNum++
		$('#feedback').text("Wrong Answer")
		question()
	};
	console.log('submit clicked')
	console.log("questionNum = " + questionNum)
	return false;
})


});