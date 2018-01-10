function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    //onderstaande code meeschuiven van inhoud
    document.body.style.marginLeft = "250px";
    document.getElementById("main").style.opacity = "0.5";
    document.getElementById("fixMenubtn").style.opacity = "0.5";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    //onderstaande code terugschuiven van inhoud
    document.body.style.marginLeft= "0";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("fixMenubtn").style.opacity = "1";
}

// work in progress
var colors = ['#93032e', '#fffb46', '#cce3de', '#3c6e71', '#731963', '#5863f8', '#09824f'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementByClass('link-project').style.background-color = random_color;
