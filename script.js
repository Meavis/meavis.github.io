function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    //onderstaande code meeschuiven van inhoud
    document.body.style.marginLeft = "250px";
    document.getElementById("main").style.opacity = "0.5";
    document.getElementById("fixMenubtn").style.opacity = "0.5";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    //onderstaande code terugschuiven van inhoud
    document.body.style.marginLeft= "0";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("fixMenubtn").style.opacity = "1";
}
