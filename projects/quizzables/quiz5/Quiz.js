var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 3500);
    document.getElementById("circle1").style.display = "block";
    document.getElementById("circle2").style.display = "none";
    document.getElementById("text").style.color = "white";
    document.getElementById("arrow1").style.color = "white";
    document.getElementById("arrow2").style.color = "white";
}
function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
}
function white(){
    document.body.style.background = "white";
    document.getElementById("refresh").style.color = "black";
    document.getElementById("text").style.color = "black";
    document.getElementById("circle2").style.display = "block";
    document.getElementById("circle1").style.display = "none";
}
function black(){
    document.body.style.background = "black";
    document.getElementById("refresh").style.color = "white";
    document.getElementById("text").style.color = "white";
    document.getElementById("circle1").style.display = "block";
    document.getElementById("circle2").style.display = "none";
}

