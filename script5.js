function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("open").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").style.display = "block";
  }
  document.addEventListener("mousemove", parallax);
  function parallax(e){
    document.querySelectorAll(".one").forEach(function(move){

      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }