

const maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];

document.getElementById("akanForm").addEventListener("submit", function(event) {
    event.preventDefault();

const birthdayInput = document.getElementById('birthday').value;
const genderElement = document.querySelector('input[name="gender"]:checked')

if (!birthdayInput || !genderElement) {
    alert("Select your birthdate and gender!");
    return;
}

const gender = genderElement.value;
const dateObj = new Date(birthdayInput);
const DD = dateObj.getDate();
const MM = dateObj.getMonth() +1;
const year = dateObj.getFullYear();
const CC = parseInt(year.toString().slice(0,2));
const YY = parseInt(year.toString().slice(2,4));

let d = ( (Math.floor(CC/4) -(2*CC)-1)+(Math.floor(5*YY/4) )+(Math.floor(26*(MM+1)/10) ) + DD ) % 7;

let dayOfWeek = Math.floor(d);

if (dayOfWeek < 0){
    dayOfWeek = dayOfWeek + 7;
}

let akanName = (gender === "male") ? maleNames[dayOfWeek] :femaleNames[dayOfWeek];
const resultDisplay = document.getElementById('display-text');
resultDisplay.innerText = "Your Akan Name is" + akanName + "!";
resultDisplay.style.color = "blue";
});
