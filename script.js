const form = document.getElementById("input-container");
const input = document.getElementById("input");
const result = document.querySelector(".result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let output = parseInt(input.value);

  const getNextThreeNumbers = (num) => {
    let nextNumbers = [];
    for (let i = 1; i <= 3; i++) {
      nextNumbers.push(num + i * 2);
    }
    return nextNumbers;
  };

  const finalThreeNumbers = getNextThreeNumbers(output);

  // if (output === "") {
  //   result.textContent = "Enter a positive value";
  //   result.style.color = "red";
  // }

  // if (output <= 0) {
  //   result.textContent = "Enter a positive value";
  //   result.style.color = "red";
  // } else if (output % 2 === 0) {
  //   result.textContent = `Next three even numbers are: ${finalThreeNumbers[0]}, ${finalThreeNumbers[1]}, ${finalThreeNumbers[2]}`;
  // } else {
  //   result.textContent = `Next three odd numbers are: ${finalThreeNumbers[0]}, ${finalThreeNumbers[1]}, ${finalThreeNumbers[2]}`;
  // }

  //Refactored Code

  if (output === "" || output <= 0) {
    result.textContent = "Enter a positive number";
    result.style.color = "red";
  } else {
    const nextNumbersType = output % 2 === 0 ? "even" : "odd";
    result.textContent = `Next three ${nextNumbersType} numbers are: ${finalThreeNumbers[0]}, ${finalThreeNumbers[1]}, ${finalThreeNumbers[2]}`;
  }

  /*
// Optional: Clear the input field if the user doesn't want to see the submitted value after clicking submit
input.value = '';
*/
});
