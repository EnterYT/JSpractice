document.getElementById("timeBtn").addEventListener('click', (event) => {
    showDateTime();    
});

const graduationDate = new Date("June 15, 2025 00:00:00");

function showDateTime() {
    const now = new Date();
    document.getElementById("year").innerText = now.getFullYear().toLocaleString();
    document.getElementById("dayOfWeek").innerText = dayOfWeek(now.getDate());
    document.getElementById("day").innerText = now.getDate().toLocaleString();
    document.getElementById("month").innerText = now.getMonth().toLocaleString();
    document.getElementById("graduate").innerText = ((graduationDate.getTime() - now.getTime()) / 2073600).toLocaleString();
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

