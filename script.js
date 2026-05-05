
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
let d = Math.floor(
((4 * CC - 2 * CC - 1) + (5 * YY / 4) + (26 * (month + 1) / 10) + day
) % 7;