let randomNumber = Math.floor(Math.random() * 100) + 1;
let trails = 3;

const checkGuess = () => {
  let userGuess = document.getElementById("guessInput").value;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("result").textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  trails--;

  if (userGuess == randomNumber) {
    document.getElementById("result").textContent = "Congratulations! You guessed the correct number.";
  } else if (userGuess < randomNumber) {
    document.getElementById("result").textContent = "Your guess is too low. You have " + trails + " attempts left.";
  } else {
    document.getElementById("result").textContent = "Your guess is too high. You have " + trails + " attempts left.";
  }

  const inputField = document.getElementById("guessInput"); 
  inputField.addEventListener("keyup", function(event) {
    const inputValue = event.target.value;
    const regex = /^[0-9]+$/;
    if(!regex.test(inputValue)){
      event.preventDefault();
      alert('Please enter Whole numbers only.');
    }
  });
  inputField.value = "";

  if (trails === 0) {
    document.getElementById("result").textContent = "Sorry, you've run out of attempts. The correct number was " + randomNumber + ".";
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
  }
}