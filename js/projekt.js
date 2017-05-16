$(document).ready(function () {
    $(".push_menu").click(function () {
        $(".wrapper").toggleClass("active");
    });
});

function buy() {
    var r = confirm("Tryck för att köpa!");
    if (r == true) {
        alert("Köp lyckades.");
    } else {
        alert("Köp avbrutet.");
    }
}

// Klocka



window.onload = function () {
    var c = document.getElementById("duk");
    c.width = 500;
    c.height = 500;
    var ctx = c.getContext("2d");

    // Linjer färg, tjocklek och ändstil
    ctx.strokeStyle = "#D9853B";
    ctx.lineWidth = 17;
    ctx.lineCap = "round";

    // En liten glow
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#D9853B";

    function degToRad(degree) {
        return (degree / 180 * Math.PI);
    }

    function renderTime() {

        // Tiden nu
        var now = new Date();
        var options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        var today = now.toLocaleDateString('sv-SE', options);
        var time = now.toLocaleTimeString();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var newMinutes = minutes + seconds / 60;
        var seconds = now.getSeconds();
        var milliseconds = now.getMilliseconds();
        var newSeconds = seconds + milliseconds / 1000;

        console.log(hours);

        // Bakgrund
        ctx.clearRect(0, 0, 500, 500);

        // Hours = /24*360
        ctx.beginPath();
        ctx.arc(250, 250, 200, degToRad(270), degToRad(hours * 15 - 90));
        ctx.stroke();

        // Minutes = 60*360
        ctx.beginPath();
        ctx.arc(250, 250, 170, degToRad(270), degToRad(minutes * 6 - 90));
        ctx.stroke();

        // Seconds = 60*360
        ctx.beginPath();
        ctx.arc(250, 250, 140, degToRad(270), degToRad(newSeconds * 6 - 90));
        ctx.stroke();

        // Date
        ctx.font = "30px Sans-serif";
        ctx.fillStyle = "#D9853B";
        ctx.fillText(today, 165, 250);

        // Time
        ctx.font = "30px Sans-serif";
        ctx.fillStyle = "#D9853B";
        ctx.fillText(time, 165, 280);
    }

    setInterval(renderTime, 100);
}
