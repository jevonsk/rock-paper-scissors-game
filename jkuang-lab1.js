var tokens = ["ROCK", "SCISSORS", "PAPER", "LIZARD", "SPOCK"];

var gameStats;
function startGame() { //start game
	gameStats = {};
	gameStats.roundsPlayed = 0;
	gameStats.roundsLimit = 0;
	gameStats.humanWins = 0;
	gameStats.compWins = 0;
	
	var rtp = document.getElementById("ROUNDS_TO_PLAY");
	var rr = document.getElementById("ROUNDS_REMAINING");
	var divStart = document.getElementById("DIV_START");
	var divPlay = document.getElementById("DIV_PLAY");
	var result = document.getElementById("RESULT");
	gameStats.roundLimit = parseInt(rtp.value);
	rr.innerHTML = rtp.value;
	divStart.hidden = true;
	divPlay.hidden = false;
	result.hidden = false;
}
//Game buttons
function userSelect(selection) {
	
	var rr = document.getElementById("ROUNDS_REMAINING");
	var hc = document.getElementById("HUMAN_CHOSE");
	var cc = document.getElementById("COMPUTER_CHOSE");
	var out = document.getElementById("RESULT");
	var human = document.getElementById("HUMAN_WINS");
	var computer = document.getElementById("COMPUTER_WINS");
	var overall = document.getElementById("OVERALL");
	
	var userChoice = selection.id;
	var comChoice = compSelect();
	
	gameStats.roundsPlayed++;
	rr.innerHTML = gameStats.roundLimit - gameStats.roundsPlayed;
	hc.innerHTML = userChoice;
	cc.innerHTML = comChoice;
	
	var winner = compChoices(userChoice, comChoice);
	
	out.innerHTML = winner;
	human.innerHTML = gameStats.humanWins;
	computer.innerHTML = gameStats.compWins;
	
	if (gameStats.roundsPlayed > gameStats.roundLimit) {
		document.getElementById("DIV_PLAY").hidden = true;
		alert("game over");
	}
	if (gameStats.humanWins > gameStats.compWins) { //Overall winner
		overall.innerHTML = "Human";
	}
	
	else {
		overall.innerHTML = "Computer";
	}
}

function compChoices(userChoice, comChoice) {
	var winMatrix = {
		'ROCK' : ['SCISSORS', 'LIZARD'],
		'SPOCK' : ['SCISSORS', 'ROCK'],
		'PAPER' : ['ROCK', 'SPOCK'],
		'SCISSORS' : ['PAPER', 'LIZARD'],
		'LIZARD' : ['SPOCK', 'PAPER']
		
	};
	
	if (winMatrix[userChoice].includes(comChoice)) {
		gameStats.humanWins++; // human wins total
		return "HUMAN";
	}
	// TIE result
	else if (winMatrix[userChoice] == winMatrix[comChoice]) {
		return "TIE";
	}
	
	else {
		gameStats.compWins++; // computer wins total
		return "COMPUTER";
		
	}
}
//Computer select
function compSelect() {
	var comp = getRandomInt(0,tokens.length);
	return tokens[comp];
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


