


function tabControl(){
 document.getElementById('defaultOpen').click()
}
//generate random number form 1-2
function randomNumber(){
	return pattern = Math.ceil(Math.random() * 2);
}
// perform operation
function calculate(){

	const pattern = randomNumber();

	if (pattern == 1) {

		//pattern 1: N x N

		const num1 = Math.ceil(Math.random() * 20);

		const num2 = Math.ceil(Math.random() * 4) +2; 

		const op1 = num1 * num2;
		const op2 = op1 * num2;
		const op3 = op2 * num2;
		const op4 = op3 * num2;
		const op5 = op4 * num2;
		const answer = op5 * num2;
		//pass the value on array
		const numbers = [num1, num2, answer, pattern, op1, 
						op2, op3, op4, op5];
		// display solution in solution tab				
		const solution = document.querySelector('.solution-txt');
		solution.innerHTML = 'N x N x N x N x N';

		return numbers
	
	}else if(pattern == 2){

		//pattern 2: N + N

		const num1 = Math.ceil(Math.random() * 100);

		const num2 = Math.ceil(Math.random() * 100) +2; 

		const op1 = num1 + num2;
		const op2 = op1 + num2;
		const op3 = op2 + num2;
		const op4 = op3 + num2;
		const op5 = op4 + num2;
		const answer = op5 + num2;

		const numbers = [num1, num2, answer, pattern, op1, 
						op2, op3, op4, op5];

		const solution = document.querySelector('.solution-txt');
		solution.innerHTML = 'N + N + N + N + N';

		return numbers

	}

}


function generateChoices(){

	const calculated = calculate();
	const answer = calculated[2];

	const randomNumber1 = Math.ceil(Math.random() * 100);
	const randomNumber2 = Math.ceil(Math.random() * 100);
	const randomNumber3 = Math.ceil(Math.random() * 100);
	// add random value to the original answer
	const choice1 = answer + randomNumber1;
	const choice2 = answer + randomNumber2;
	const choice3 = answer + randomNumber3;
	
	const numbers = [choice1, choice2, choice3, answer, calculated[4], calculated[5], 
					calculated[6], calculated[7], calculated[8], calculated[0], calculated[1],
					calculated[3]];

	return numbers

}


function displayResult(){

	function shuffleChoices(array){
		array.sort(() => Math.random() - 0.5);
	}

	const numbers = generateChoices();

	const answer = numbers[3];
	const num1 = numbers[9];
	const num2 = numbers[10];
	const pattern = numbers[11];
	const displayTest = [numbers[4], numbers[5], numbers[6], numbers[7], numbers[8] ];
	const choices = [numbers[0], numbers[1], numbers[2], answer];

	shuffleChoices(choices);
	distributeNumbers(choices);

	const viewTest = document.querySelector('.test');

	viewTest.innerHTML = `${displayTest.join(', ')} ____`;

	console.log(`1st number: ${num1}`);
	console.log(`2nd number: ${num2}`);
	console.log(`Answer from displayResult: ${answer}`);
	console.log(`Shuffled Choices: ${choices}`);
	console.log(`Pattern: ${pattern}`);
	console.log(`displayTest: ${displayTest}`);
	// store the correct answer in session
	sessionStorage.setItem('answer',answer);

	return answer;
}

function distributeNumbers(choices){

	const number1 = choices[0];
	const number2 = choices[1];
	const number3 = choices[2];
	const number4 = choices[3];
	
	const labelOne = document.querySelector('.label-one');
	const labelTwo = document.querySelector('.label-two');
	const labelThree = document.querySelector('.label-three');
	const labelFour = document.querySelector('.label-four');

	const inputOne = document.querySelector('.input-one');
	const inputTwo = document.querySelector('.input-two');
	const inputThree = document.querySelector('.input-three');
	const inputFour = document.querySelector('.input-four');
	// distribute numbers in label
	labelOne.innerHTML = number1;
	labelTwo.innerHTML = number2;
	labelThree.innerHTML = number3;
	labelFour.innerHTML = number4;

	labelOne.setAttribute("id", number1);
	labelTwo.setAttribute("id", number2);
	labelThree.setAttribute("id", number3);
	labelFour.setAttribute("id", number4);

	labelOne.setAttribute("for", `answer-${number1}`);
	labelTwo.setAttribute("for", `answer-${number2}`);
	labelThree.setAttribute("for", `answer-${number3}`);
	labelFour.setAttribute("for", `answer-${number4}`);
	// distribute numbers at input
	inputOne.setAttribute("value", number1);
	inputTwo.setAttribute("value", number2);
	inputThree.setAttribute("value", number3);
	inputFour.setAttribute("value", number4);

	inputOne.setAttribute("id", `answer-${number1}`);
	inputTwo.setAttribute("id", `answer-${number2}`);
	inputThree.setAttribute("id", `answer-${number3}`);
	inputFour.setAttribute("id", `answer-${number4}`);

}

function removeDesign(){
	// remove the checked value at inputs
	document.querySelector('.input-one').checked = false;
	document.querySelector('.input-two').checked = false;
	document.querySelector('.input-three').checked = false;
	document.querySelector('.input-four').checked = false;

	const alert = document.querySelector('.alert');

	const labelOne = document.querySelector('.label-one');
	const labelTwo = document.querySelector('.label-two');
	const labelThree = document.querySelector('.label-three');
	const labelFour = document.querySelector('.label-four');
	//add space at alert for content
	alert.innerHTML = "&nbsp;";
	alert.classList.remove("alert-incorrect");
	//remove 'correct class'
	labelOne.classList.remove('correct');
	labelTwo.classList.remove('correct');
	labelThree.classList.remove('correct');
	labelFour.classList.remove('correct');
	//remove 'incorrect class'
	labelOne.classList.remove('incorrect');
	labelTwo.classList.remove('incorrect');
	labelThree.classList.remove('incorrect');
	labelFour.classList.remove('incorrect');

}

function onSubmit() {

		//get the correct answer form session
		const correctAnswer = sessionStorage.getItem('answer')
		
		const alert = document.querySelector('.alert');
		//get the selected value
	  	const selected = document.querySelector('input[name = choices]:checked').value;

	    if (selected == correctAnswer) {
	    	alert.innerHTML = "correct";
	    	//set style for correct answer
			const answer = document.querySelector(`[id='${correctAnswer}']`);
	    	answer.classList.add("correct");

	    }else{
	    	alert.innerHTML = "incorrect";
	    	alert.classList.add("alert-incorrect");
	    	//set style for correct answer
			const answer = document.querySelector(`[id='${correctAnswer}']`);
	    	answer.classList.add("correct");
	    	//set style for incorrect answer
	    	const currentAnswer = document.querySelector(`[id='${selected}']`);
	    	currentAnswer.classList.add("incorrect");
	    }

	}


//tab
function switchContent(evt, content) {
	  var i, tabcontent, tablinks;
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
	    tabcontent[i].style.display = "none";
	  }
	  tablinks = document.getElementsByClassName("tablinks");
	  for (i = 0; i < tablinks.length; i++) {
	    tablinks[i].className = tablinks[i].className.replace(" active", "");
	  }

	  document.getElementById(content).style.display = "block";
	  evt.currentTarget.className += " active";
}