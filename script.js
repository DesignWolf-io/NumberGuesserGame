// Claim variables
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate Random target Answer
const generateTarget = () => Math.floor(Math.random() * 9);

// Get distance to Target works with negative numbers and catches bad input
const getAbsoluteDistance = (num, secretTarget) => {
  if (num > 9 || num < 0) {
    alert('Guess has to be between 0 and 9');
    throw new Error('Program Terminated Due To Bad Input By User');
  } else {
    Math.abs(num - secretTarget);
  };
};

// Compare User Guess and Computer Guess against target guess
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
return getAbsoluteDistance(humanGuess, secretTarget) <= getAbsoluteDistance(computerGuess, secretTarget) ? true : false;
};

// Update score based on winner
const updateScore = winner => winner === 'computer' ? computerScore ++ : humanScore ++;

// Update round
const advanceRound = () => currentRoundNumber++
