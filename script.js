



function Question (quest, ans1, ans2) {

	this.quest = quest;
	this.ans1 = ans1;
	this.ans2 = ans2;

}


var questionOne = new Question('How are you?', 'good', 'feeling great');
var questionTwo = new Question('Do you like candy?', 'yes', 'no');
var questionThree = new Question('Is it cold today?', 'yes', 'no');

logic();
Question();

var question1 = prompt(questionOne.quest);

/*var questions = [

'candy',

prompt(questionOne.quest),
prompt(questionTwo.quest),
prompt(questionThree.quest)

];
*/

/*
var yourScore = '/3 points is your score!';
var line = '----------------------------------------------';

console.log('Plese select an answer from the follwing list:');
console.log(line);
	
	console.log(questionOne.quest);
    console.log(questionOne.ans1);
	console.log(questionOne.ans2);
	console.log(line);

	console.log(questionTwo.quest);
    console.log(questionTwo.ans1);
	console.log(questionTwo.ans2);
	console.log(line);

	console.log(questionThree.quest);
    console.log(questionThree.ans1);
	console.log(questionThree.ans2);
	console.log(line);
*/
/*

 
console.log(questionOne.quest);
console.log(questionOne.ans1);
console.log(questionOne.ans2);

console.log(questionTwo.quest);
console.log(questionTwo.ans1);
console.log(questionTwo.ans2);

console.log(questionThree.quest);
console.log(questionThree.ans1);
console.log(questionThree.ans2);

*/
/*
function logic() {

	questionOne.ans1 = prompt(questionOne.quest);

	if (questionOne.ans1 === questionOne.ans1) {

		console.log('Your answer is: ' + questionOne.ans1);

	} else if (questionOne.ans1 === questionOne.ans2) {

		console.log('Your answer is: ' + questionOne.ans2);
	
	} else {

		console.log('You did not enter an answer!');
	
	}
	
	questionTwo.ans1 = prompt(questionTwo.quest);

	if (questionTwo.ans1 === questionTwo.ans1) {

		console.log('Your answer is: ' + questionTwo.ans1);

	} else if (questionTwo.ans1 === questionTwo.ans2) {

		console.log('Your answer is: ' + questionTwo.ans2);
	
	} else {

		console.log('You did not enter an answer!');
	
	}

	questionThree.ans1 = prompt(questionThree.quest);

	if (questionThree.ans1 === questionThree.ans1) {

		console.log('Your answer is: ' + questionThree.ans1);

	} else if (questionThree.ans1 === questionThree.ans2) {

		console.log('Your answer is: ' + questionThree.ans2);
	
	} else {

		console.log('You did not enter an answer!');
	
	}

}

logic();

*/



function randomQuestion() {

	randomQ = Math.floor(Math.random() * (questions.length));
	console.log(questions[randomQ]);
}

randomQuestion();


function logic() {

	if(questions === questionOne.ans1){

		console.log('this is the right answer');

	}else if (questionOne.quest === questionOne.ans2){

		console.log('this is the wrong answer');

	}else {

		console.log('no answer');
	}
}



