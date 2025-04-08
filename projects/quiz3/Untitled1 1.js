var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 1500);
}
function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
}
