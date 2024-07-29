document.getElementById("timeBtn").addEventListener('click', (event) => {
    showDateTime();    
});
document.getElementById("name-group").addEventListener('click', (event) => {
    showNameGroup();
});

const graduationDate = new Date("June 15, 2025 00:00:00");

function showDateTime() {
    const now = new Date();
    document.getElementById("year").innerText = now.getFullYear().toLocaleString();
    document.getElementById("dayOfWeek").innerText = dayOfWeek(now.getDate());
    document.getElementById("day").innerText = now.getDate().toLocaleString();
    document.getElementById("month").innerText = monthInText(now.getMonth());
    document.getElementById("graduate").innerText = Math.round((graduationDate.getTime() - now.getTime()) / (1000 * 3600 * 24)).toLocaleString() + " days!";
}
function dayOfWeek(day){
    switch (day%7){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 0:
            return "Sunday";
    }
}

function monthInText(month){
    switch (month % 12){
        case 0:
            return "December";
        case 1:
            return "January";
        case 2:
            return "February";        
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
    }
}

function showNameGroup(){
    document.getElementById("name").innerText = "Yersayan Toleu";
    document.getElementById("group").innerText = "SE-2217";
}

