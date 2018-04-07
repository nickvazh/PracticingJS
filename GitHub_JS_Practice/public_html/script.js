function Question (quest, ans1, ans2) {

	this.quest = quest;
	this.ans1 = ans1;
	this.ans2 = ans2;


}


var questionOne = new Question('Is it Day or Night?', 'yes', 'no');
var questionTwo = new Question('Do you like candy?', 'yes', 'no');
var questionThree = new Question('Is it cold today?', 'yes', 'no');



var questions = [

questionOne.quest,
questionTwo.quest,
questionThree.quest

];

var answers = [

questionOne.ans1,
questionOne.ans2,
questionTwo.ans1,
questionTwo.ans2,
questionThree.ans1,
questionThree.ans2

];

var userInput;
var point = 0;
var line = '----------------------------------------------';

console.log('Please answer the questions with Yes or No');
console.log(line);

randomQuestion();

function randomQuestion() {
    
	var randomQ = Math.floor(Math.random() * (questions.length));
	console.log(questions[randomQ]);
	console.log(line);
	userInput = prompt(questions[randomQ]);
	

}


function logic() {

var rightAnswer = 'Right answer ' + '|| Your score is: ';
var wrongAnswer = 'Wrong answer ' + '|| Your score is: ';


	if(userInput === answers[0]){

		point++;
		console.log(rightAnswer + point + ' points');
		console.log(line);

	}else if (userInput === answers[1]){

		console.log(wrongAnswer + point + ' points');
		console.log(line);

	}else if (userInput === answers[2]){

		point++;
		console.log(rightAnswer + point + ' points');
		console.log(line);

	}else if (userInput === answers[3]){

		console.log(wrongAnswer + point + ' points');
		console.log(line);

	}else if (userInput === answers[4]){

		point++;
		console.log(rightAnswer + point + ' points');
		console.log(line);

	}else if (userInput === answers[5]){

		console.log(wrongAnswer + point + ' points');
		console.log(line);	

	}else {

		console.log('no answer ' + '|| Your score is: ' + point + ' points');
		console.log(line);
	}

}

logic();

for (var i = 0; i < 4; i++) {
 
 	randomQuestion();
 	
 	logic();

}

console.log(line);
console.log('    --- Your total score is: ' + point + ' points ---');
console.log(line);
console.log(line);