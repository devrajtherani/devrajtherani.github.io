var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 1500);
    document.getElementById("arrow1").style.color = "white";
    document.getElementById("arrow2").style.color = "white";
}
function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
}
