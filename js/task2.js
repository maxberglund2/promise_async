const enterNumber = () => {
    return new Promise((resolve, reject) => {
      const userNumber = Number(window.prompt("Enter a number (1 - 6):"));
      const randomNumber = Math.floor(Math.random() * 6 + 1);
  
      if (isNaN(userNumber)) {
        reject(new Error("Wrong Input Type"));
      }
  
      if (userNumber === randomNumber) {
        resolve({
          points: 2,
          randomNumber,
        });
      } else if (
        userNumber === randomNumber - 1 ||
        userNumber === randomNumber + 1
      ) {
        resolve({
          points: 1,
          randomNumber,
        });
      } else {
        resolve({
          points: 0,
          randomNumber,
        });
      }
    });
  };
  
  const continueGame = () => {
    return new Promise((resolve) => {
      if (window.confirm("Do you want to continue?")) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
  
  const handleGuess = async () => {
    try {
      const result = await enterNumber(); 
      alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);
  
      const isContinuing = await continueGame();
  
      if (isContinuing) {
        handleGuess();
      } else {
        alert("Game ends");
      }
    } catch (error) { 
      alert(error);
    }
  };
  
  handleGuess();