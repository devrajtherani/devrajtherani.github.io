var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 1500);
    document.getElementById("loader-wrapper") .style.display = "block";
}

function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

