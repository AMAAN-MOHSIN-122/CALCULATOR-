// Variable //

const display = document.querySelector('.display');
const btn = document.querySelectorAll('button');
const specialChars = ['%',"/","*",'-',"+","="]
let output = "";

const calculate = (btnValue) => {
  if(btnValue === "=" && btnValue !== ""){
    output = eval(output.replace("%", "100"));
  } else if(btnValue === "Ac"){
 output = "";
  } else if (btnValue === "Del"){
  output = output.toString().slice(0, -1);
  } else{
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
    {
    }
  }
  display.value = output;
};

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => calculate(e.target.dataset.value));
});