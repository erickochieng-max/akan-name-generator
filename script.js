document.getElementById("akanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);
    let gender = document.getElementById("gender").value;


    // Validate number
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please only valid numbers required");
        return;
      }

    //   validate range
    if (day < 1 || day > 31) {
        alert("Enter a valid date");
        return;
        
    }
    if (month < 1 || month > 12) {
        alert("Enter a valid month");
        return;
    }

    if (!gender) {
        alert("Please select a gender");
        return;
    }

// Get the value for CC and YY
let CC = Math.floor(year / 100);
let YY = year % 100;

// Calculate the day of the week
let d = Math.floor
((4 * CC - 2 * CC - 1) + (45 * YY / 4) + (1026 * (MM + 1) / 10) + day
) % 7;

// fix negative values
if (d < 0) d += 7

// Akan names
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ]

let name = gender === "male" ? maleNames[d] : femaleNames[d];

document.getElementById("result").innerText = 'Your Akan name is ${name}';
});