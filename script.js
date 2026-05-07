window.addEventListener("load", function() {
    console.log("Page fully loaded with all resources!");
});

"(Starting with sunday at index 0)"
const maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];
document.getElementById('akan-form').addEventListener('submit',function(event) {
    event.preventDefault();

    const DD = Number(document.getElementById('day').value);
    const MM = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    // validation
    
    if (DD < 1 || DD > 31){
        alert("Enter a valid day")
        return;
    }

    if (MM <1 || MM > 12){
        alert("Enter a valid Month")
        return;
    }

    if (!gender){
        alert("Please insert gender")
        return;
    }

    const CC = parseInt(year.toString().slice(0,2));
    const YY = parseInt(year.toString().slice(2,4));

    let d = ( (Math.floor(CC/4) -(2*CC)-1)+(Math.floor(5*YY/4) )+(Math.floor(26*(MM+1)/10) ) + DD ) % 7;

    let dayOfWeek = Math.floor(d);

    if (dayOfWeek < 0) {
        dayOfWeek = dayOfWeek + 7;
    }
    let akanName = (gender ==="male") ? maleNames[dayOfWeek] :femaleNames[dayOfWeek];
    const resultDisplay = document.getElementById('display-text');
    resultDisplay.innerText = "Your Akan name is" + akanName + "!";
    resultDisplay.style.color = "blue";
});


function getDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

