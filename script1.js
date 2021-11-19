var a;
var d;
function load(){
    a = setTimeout(page, 1500);
    document.getElementById("loader-wrapper").style.display = "block";
}
function page(){
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("maincontent").style.display = "block";
    document.getElementById("copied").style.display = "none";
}
function first(){
  document.getElementById("first").style.color = "yellow";
  d = setTimeout(back, 3000);
}
function second(){
  document.getElementById("second").style.color = "yellow";
  d = setTimeout(back, 3000);
}
function back(){
  document.getElementById("first").style.color = "#eeeeee";
  document.getElementById("second").style.color = "#eeeeee";
}
function copyToClipboard(text) {
var inputc = document.body.appendChild(document.createElement("input"));
inputc.value = windows.location.href;
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
