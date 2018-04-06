



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



