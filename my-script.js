var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 3000);
}
function showPage(){
    document.getElementById("loader") .style.display = "none";
    document.getElementById("myDiv") .style.display = "block";
}
function openNav(){
    document.getElementById("mySidenav") .style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav") .style.width = "0";
}
