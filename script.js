function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    //document.body.style.marginLeft = "250px";
    document.getElementById("main").style.opacity = "0.5";
    document.getElementById("fixMenubtn").style.opacity = "0.5";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    //document.body.style.marginLeft= "0";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("fixMenubtn").style.opacity = "1";
}
