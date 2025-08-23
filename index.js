

function updateClock(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >=12 ? "PM" : "AM"


    hours = hours % 12;
    hours = hours ? hours : 12

    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0")
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0")
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0")

    

    
}
setInterval(updateClock, 1000)
updateClock()
