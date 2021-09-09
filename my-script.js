var myVar;
var x;

function myFunction(){
    myVar = setTimeout(showPage, 500);
    document.getElementById("timer") .style.display = "none";
}

function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
    x = setTimeout(countdown, 1500)
}
function countdown(){
  document.getElementById("content") .style.display = "none";
  document.getElementById("timer") .style.display = "block";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "15vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  // Set the date we're counting down to
var countDownDate = new Date("Sep 15, 2021 21:02:12").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
