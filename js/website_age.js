window.setTimeout("Tick()", 1000);

function getString(age) {
    var seconds = Math.floor(age/1000);
    var minutes = Math.floor(seconds/60);
    seconds = seconds - minutes*60;
    var hours = Math.floor(minutes/60);
    minutes = minutes-hours*60;
    days = Math.floor(hours/12);
    hours = hours-days*12;
    var age_str =  days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
    return age_str;
}

function Tick() {
window.setTimeout("Tick()", 1000);
var current = new Date().getTime();
var start = 1426963766876;
var age = current-start;
//console.log(getString(age));
document.getElementById("website_age_text").innerHTML = "PS: This website is still under constuction. In fact, it has been only been " + getString(age) + " since it's creation. So it may look slightly shallow right now, but I'm working on it!";
}
