
    let day = (getElementById("day").value);
    let month = (getElementById("month").value);
    let year = (getElementById("year").value);
    let gender = (getElementById().value)

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

    console.log(checkDay(32));
