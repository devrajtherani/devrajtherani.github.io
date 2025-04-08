var myVar;
var reappear;
var reappeara;

function myFunction(){
    myVar = setTimeout(showPage, 3500);
    document.getElementById("circle1").style.display = "block";
    document.getElementById("circle2").style.display = "none";
    document.getElementById("text").style.color = "white";
    document.getElementById("text1").style.color = "white";
    document.getElementById("demo").style.color = "white";
    document.getElementById("wassap1").style.display = "none";
    document.getElementById("post1").style.display = "none";
    document.getElementById("tweet1").style.display = "none";
    document.getElementById("mail1").style.display = "none";
    document.getElementById("copy2").style.display = "none";
    document.getElementById("copied1").style.display = "none";
    document.getElementById("copied2").style.display = "none";
}
var myVar = setInterval(myTimer, 1000)
function myTimer(){
var d = new Date();
var aa = d.toLocaleString()
document.getElementById("demo").innerHTML = aa;}
function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
}
function white(){
    document.body.style.background = "white";
    document.getElementById("refresh").style.color = "black";
    document.getElementById("text").style.color = "black";
    document.getElementById("text1").style.color = "black";
    document.getElementById("demo").style.color = "black";
    document.getElementById("circle2").style.display = "block";
    document.getElementById("circle1").style.display = "none";
    document.getElementById("wassap").style.display = "none";
    document.getElementById("post").style.display = "none";
    document.getElementById("tweet").style.display = "none";
    document.getElementById("mail").style.display = "none";
    document.getElementById("wassap1").style.display = "block";
    document.getElementById("post1").style.display = "block";
    document.getElementById("tweet1").style.display = "block";
    document.getElementById("mail1").style.display = "block";
    document.getElementById("copy1").style.display = "none";
    document.getElementById("copy2").style.display = "block";
    document.getElementById("copied1").style.display = "none";
    document.getElementById("copied2").style.display = "none";
}
function black(){
    document.body.style.background = "black";
    document.getElementById("refresh").style.color = "white";
    document.getElementById("text").style.color = "white";
    document.getElementById("text1").style.color = "white";
    document.getElementById("demo").style.color = "white";
    document.getElementById("circle1").style.display = "block";
    document.getElementById("circle2").style.display = "none";
    document.getElementById("wassap1").style.display = "none";
    document.getElementById("post1").style.display = "none";
    document.getElementById("tweet1").style.display = "none";
    document.getElementById("mail1").style.display = "none";
    document.getElementById("wassap").style.display = "block";
    document.getElementById("post").style.display = "block";
    document.getElementById("tweet").style.display = "block";
    document.getElementById("mail").style.display = "block";
    document.getElementById("copy1").style.display = "block";
    document.getElementById("copy2").style.display = "none";
    document.getElementById("copied1").style.display = "none";
    document.getElementById("copied2").style.display = "none";
}
function copyToClipboard(text) {
var inputc = document.body.appendChild(document.createElement("input"));
inputc.value = window.location.href;
inputc.focus();
inputc.select();
document.execCommand('copy');
inputc.parentNode.removeChild(inputc);
document.getElementById("copy1").style.display = "none";
document.getElementById("copied1").style.display = "block";
reappear = setTimeout(black, 900);
}
function copyToClip(text) {
var inputc = document.body.appendChild(document.createElement("input"));
inputc.value = window.location.href;
inputc.focus();
inputc.select();
document.execCommand('copy');
inputc.parentNode.removeChild(inputc);
document.getElementById("copy2").style.display = "none";
document.getElementById("copied2").style.display = "block";
reappeara = setTimeout(white, 900);
}
