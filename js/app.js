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

/*HIDES QUESTIONS on PAGE LOAD*/
$('.content').hide();


/*HIDES BEGIN BUTTON ON CLICK, SHOWS FIRST QUESTION*/
$('#begin-button').click(function(){
	$('#begin').hide();
	$('.content').show();
	question();
})

/*LOADS QUESTION and ANSWERS*/
var question = function() {
	$('#feedback').text("Select an Answer and press Submit");
	$('.question').text(questions[0].question);
	for (i = 0; i <= 4; i++) {
		$('.answerform').prepend("<input type='radio' name='answer'>" + questions[0].answers[i] + "<br>");
	};
}

/*SUBMIT CLICKED NOT WORKING PAGE REFRESHES*****/
var submitClicked = $('#submitbutton').click(function() {
	var userAnswer = ('input:radio[name=answer]:checked').val();
	var correctAnswer = questions.correct;
	if (userAnswer == null) {
		$('#feedback').text("Select an answer")}
	else if (userAnswer == correctAnswer) {
		$('#feedback').text("Correct!")}
	else {
		$('#feedback').text("Wrong Answer")
	};
	return false;
})


});