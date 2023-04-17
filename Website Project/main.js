//Elden Ring Website by Matthew

//Add button even listener
document.getElementById("btn").addEventListener("click", btnClicked);

//Function
function btnClicked() {
  //Get Variables
  let question1 = document.getElementById("q1").value.toLowerCase();
  let question2 = document.getElementById("q2").value.toLowerCase();
  let question3 = document.getElementById("q3").value.toLowerCase();
  let question4 = document.getElementById("q4").value.toLowerCase();
  let question5 = document.getElementById("q5").value.toLowerCase();
  let output = document.getElementById("output");
  let total = 0;

  //Process and add up total
  //Question 1
  if (question1 === "limgrave") {
    total = total + 1;
    document.getElementById("q1").style.borderColor = "green";
  } else {
    document.getElementById("q1").style.borderColor = "red";
  }
  //Question 2
  if (question2 === "malenia" || question2 === "malenia blade of miquella") {
    total = total + 1;
    document.getElementById("q2").style.borderColor = "green";
  } else {
    document.getElementById("q2").style.borderColor = "red";
  }
  //Question 3
  if (
    question3 === "godrick" ||
    question3 === "godrick the grafted" ||
    question3 === "renalla" ||
    question3 === "renalla queen of the full moon"
  ) {
    total = total + 1;
    document.getElementById("q3").style.borderColor = "green";
  } else {
    document.getElementById("q3").style.borderColor = "red";
  }
  //Question 4
  if (question4 === "rykard" || question4 === "rykard lord of blasphemy") {
    total = total + 1;
    document.getElementById("q4").style.borderColor = "green";
  } else {
    document.getElementById("q4").style.borderColor = "red";
  }
  //Question 5
  if (question5 === "radagon") {
    total = total + 1;
    document.getElementById("q5").style.borderColor = "green";
  } else {
    document.getElementById("q5").style.borderColor = "red";
  }

  //Define number correct and percent
  let percent = (total / 5) * 100;
  output.innerHTML = "Number Correct = " + total + "/5" + "(" + percent + "%)";
}
