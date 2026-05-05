
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);
    let gender = document.getElementById("gender").value;

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please only valid numbers required");
        return;
      }

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

