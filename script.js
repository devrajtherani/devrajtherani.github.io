var myVar;
var g;
var d;

function myFunction(){
    myVar = setTimeout(showPage, 1500);
    document.getElementById("loader-wrapper") .style.display = "block";
    document.getElementById("share") .style.display = "none";
    document.getElementById("copied").style.display = "none";
}

function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
    g = setTimeout(share, 120000)
}
function share(){
  document.getElementById("content") .style.display = "none";
  document.getElementById("share") .style.display = "block";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function copyToClipboard(text) {
  var inputc = document.body.appendChild(document.createElement("input"));
  inputc.value = window.location.href;
  inputc.focus();
  inputc.select();
  document.execCommand('copy');
  inputc.parentNode.removeChild(inputc);
  document.getElementById("copy").style.display = "none";
  document.getElementById("copied").style.display = "block";
  d = setTimeout(reappear, 900);
  }
  function reappear(){
    document.getElementById("copy").style.display = "block";
    document.getElementById("copied").style.display = "none";
  }

