var i = 0;
var txt = 'This is Devraj Therani. I am a student as well as the Video Editing Head @ Delhi Public School, Indore. I keep interest in coding and I am a Beginner. My hobbies are coding, playing cricket and studying. I keep interest in almost every subject. I welcome suggestions which you can post me on any of the various ways mentioned on the Contacts Page. Hope you liked my site!!!!!!';
var speed = 45;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "20vw";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }