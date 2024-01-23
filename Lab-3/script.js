function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var resultElement = document.getElementById("result");
  var resultMessageElement = document.getElementById("result-message");

  if (weight === "" || height === "") {
    alert("Please enter both weight and height.");
    return;
  }

  var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

  resultElement.innerHTML = `Your BMI is: ${bmi}`;

  if (bmi < 18.5) {
    resultMessageElement.innerHTML = "Underweight";
    resultMessageElement.className = "indicator";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultMessageElement.innerHTML = "Normal (Healthy Weight)";
    resultMessageElement.className = "indicator";
  } else if (bmi >= 25 && bmi < 30) {
    resultMessageElement.innerHTML = "Overweight";
    resultMessageElement.className = "indicator";
  } else {
    resultMessageElement.innerHTML = "Obese";
    resultMessageElement.className = "indicator";
  }
}
