var point1 = 0;
var yourScore = '/3 points is your score!';
var line = '----------------------------------------------';

console.log('Plese select an answer from the follwing list:');
console.log(line);

question1();
question2();
question3();

function question1() {

	console.log('1. Good');
	console.log('2. Bad');
	console.log('3. Ok');
	console.log(line);

	var ans1 = prompt('How are you?');



	if (ans1 === 'good') {
			// right answer
			point1++;
			console.log('Thats awesome! ' + point1 + yourScore);

		
	
	} else if (ans1 === 'bad') {
		
		console.log('Hang in there! ' + point1 + yourScore);
		
	} else if(ans1 === 'ok') {
		
		console.log('Why only ok? ' + point1 + yourScore);

	} else {
		
		console.log('Come on! Tell me! ' + point1 + yourScore);
	}

	console.log(line);
}

function question2() {

	console.log('1. Nothing');
	console.log('2. Something');
	console.log('3. Everything');
	console.log(line);

	var ans2 = prompt('Whats new?');

	if (ans2 === 'nothing') {

		console.log('Really? ' + point1 + yourScore);
		
	} else if (ans2 === 'something') {

		//right answer
		point1++
		console.log('Tell me! Tell me! ' + point1 + yourScore);
		
		
	} else if(ans2 === 'everything') {

		console.log('Wow Really? ' + point1 + yourScore);

	} else{

		console.log('Come on! Tell me! ' + point1 + yourScore);
	}

	console.log(line);
}

function question3() {

	console.log('1. Yes');
	console.log('2. No');
	console.log('3. Maybe');
	console.log(line);

	var ans3 = prompt('Do you like candy?');

	if (ans3 === 'yes'){

		console.log('What kind? ' + point1 + yourScore);
		
	} else if (ans3 === 'no') {

		//right answer
		point1++
		console.log('Saving your teeth for someone special? ' + point1 + yourScore);
		

	} else if(ans3 === 'maybe') {

		console.log('Make a decision! ' + point1 + yourScore);
		

	} else{

		console.log('Come on! Tell me! ' + point1 + yourScore);
		
	}

		
}
		console.log(line);
		console.log(line);
		console.log('Your total score is ' + point1 + '/3 points!');
		console.log(line);