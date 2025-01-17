var main = {"title":{}, "two":{}}
doc_title = document.getElementById("title")
intro = document.getElementById("intro")
footer = document.getElementById("footer")
doc_title.innerHTML = document.title
intro.innerHTML = intro.innerHTML.replace('""', document.title)
footer.innerHTML = footer.innerHTML.replace('""', (new Date()).getFullYear())
last_section = 0

Array.from(document.getElementsByTagName("iframe")).forEach((element)=>{
  element.style.aspectRatio = element.offsetWidth/element.offsetHeight
  element.width = "100%"
  element.height = ""
})

document.addEventListener("click", function (event){
    let clicked_element = event.target
    console.log(clicked_element)
    console.log(parent)
    if ((clicked_element.classList.contains("toggle-button-icon") && clicked_element.classList.contains("light-mode")) || (clicked_element.classList.contains("toggle-button") && clicked_element.classList.contains("light-mode"))){
        console.log("entree111")
        document.body.className = document.body.className.replace(" light-mode", "")
        console.log(document.body.getElementsByTagName("*"))
        for (i=0; i<(document.body.getElementsByTagName("*")).length; i++){
            console.log(document.body.getElementsByTagName("*")[i].className)
            document.body.getElementsByTagName("*")[i].className = document.body.getElementsByTagName("*")[i].className.replace(" light-mode", "")
            console.log(document.body.getElementsByTagName("*")[i].className)
        }
        console.log("end")
    }
    else if (clicked_element.classList.contains("toggle-button-icon") || clicked_element.classList.contains("toggle-button")){
        console.log("entree")
            document.body.classList += " light-mode"
        console.log(document.body.getElementsByTagName("*"))
        for (i=0; i<=(document.body.getElementsByTagName("*")).length; i++){
            document.body.getElementsByTagName("*")[i].classList += " light-mode"
        }
    }

    if (clicked_element.classList.contains("fa-info") || clicked_element.classList.contains("info-button")){
      if (clicked_element.classList.contains("info-button")){
        clicked_element = clicked_element.elementChild
      }
      console.log(clicked_element)
      if (document.getElementsByTagName("main")[0].classList.contains("collapse")){
        last_section = clicked_element.parentElement.classList[1].split("-")[2]
        console.log("enter")
      console.log(document.getElementsByTagName("main")[0].classList.contains("enlarge"))
      list = document.getElementsByTagName("section")
      console.log(list)
      Array.from(list).forEach((element)=>{
        console.log(element)
        index = element.className.split(" ")[1]
        // console.log(document.getElementsByClassName("short"))
        // console.log(index)
        short = document.getElementsByClassName("short "+ index)[0]
        // console.log(short)
        long = document.getElementsByClassName("long "+ index)[0]
        // console.log(short.nextElementSibling===long)
        if (short.nextElementSibling === long){
          document.getElementsByClassName("fade-in "+index)[0].insertBefore(long, short)
        }
      })
        console.log(clicked_element.parentElement.classList[1].split("-")[2])
        console.log(document.getElementsByClassName("short"))
        document.getElementsByTagName("main")[0].className = document.getElementsByTagName("main")[0].className.replace("collapse", "enlarge");
        document.getElementsByTagName("main")[0].style.animation = "enlarge 2s forwards";
        Array.from(document.getElementsByClassName("fa-minus")).forEach((element) => {
            element.className = element.className.replace("fa-minus", "fa-info");
        });
        console.log(clicked_element.classList)
        clicked_element.className = clicked_element.className.replace("fa-info", "fa-minus")
        Array.from(document.querySelectorAll("section.fade-in")).forEach((element)=>{
          console.log(element.offsetHeight)
          console.log(element.scrollHeight)
          element.style.height = `${element.offsetHeight}px`
        })
        document.getElementsByClassName("short "+ clicked_element.parentElement.classList[1].split("-")[2])[0].style.display = "none"
        // Array.from(document.getElementsByClassName("short")).forEach((element) => {
        //     element.style.animation = "show-down 2s forwards";
        // });
        Array.from(document.querySelectorAll("section.fade-in")).forEach((element)=>{
          console.log(element.offsetHeight)
          console.log(element.scrollHeight)
        })

        // Hide all elements with the "long" class
        Array.from(document.getElementsByClassName("long")).forEach((element) => {
            element.style.animation = "hide-down 2s forwards";
        });
        setTimeout(() => {
            console.log(
              document.getElementsByClassName("long " + clicked_element.parentElement.classList[1].split("-")[2])[0])
            Array.from(
              document.getElementsByClassName("long " + clicked_element.parentElement.classList[1].split("-")[2])).forEach((element)=>{
                element.style.display = "block";
            element.style.animation = "show-down 2s forwards";
              })
        });
        
        setTimeout(()=>{Array.from(document.querySelectorAll("section.fade-in")).forEach((element)=>{
          element.style.transition = "height 2s ease"
          element.offsetHeight
        element.style.height = "auto"
          element.offsetHeight
        console.log(element.offsetHeight)
        console.log(element.scrollHeight)
        // element.style.height = `${element.scrollHeight}px`
      })})
        
        setTimeout(() => {
          
            
        Array.from(document.getElementsByClassName("short")).forEach((element) => {
          element.style.animation = "";
      });
            
      Array.from(document.getElementsByClassName("long")).forEach((element) => {
        element.style.animation = "";
    });Array.from(document.querySelectorAll("section.fade-in")).forEach((element) => {
      element.style.height = "";
  });
        }, 2000);
        
    }
  else{
    console.log(last_section)
    Array.from(document.getElementsByClassName("fa-minus")).forEach((element) => {
        element.className = element.className.replace("fa-minus", "fa-info");
    });
    clicked_element.className = clicked_element.className.replace("fa-info", "fa-minus")
    Array.from(document.querySelectorAll("section.fade-in")).forEach((element)=>{
      element.style.transition = ""
      console.log(element.offsetHeight)
      console.log(element.scrollHeight)
      element.style.height = `${element.offsetHeight}px`
    })
    console.log(clicked_element.classList)
    clicked_element.className = clicked_element.className.replace("fa-info", "fa-minus")
        
    setTimeout(()=>{Array.from(document.querySelectorAll("section.fade-in")).forEach((element)=>{
      document.getElementsByClassName("short "+ clicked_element.parentElement.classList[1].split("-")[2])[0].style.display = "none"
      Array.from(
        document.getElementsByClassName("long " + clicked_element.parentElement.classList[1].split("-")[2])).forEach((element)=>{
          element.style.display = "block";
      element.style.animation = "show-down 2s forwards";})
      
      document.getElementsByClassName("long "+ last_section)[0].style.display = "none"
      
      document.getElementsByClassName("short "+ last_section)[0].style.display = "block"
      document.getElementsByClassName("short "+ last_section)[0].style.animation = "show-down 2s ease"
      element.style.transition = "height 2s ease"
      element.offsetHeight
    element.style.height = "auto"
    console.log(element.offsetHeight)
    console.log(element.scrollHeight)
    setTimeout(()=>{last_section = clicked_element.parentElement.classList[1].split("-")[2]}, 2000)
    // element.style.height = `${element.scrollHeight}px`
  })}, 0)

  }}

    else if (clicked_element.classList.contains("fa-minus") || clicked_element.classList.contains("info-button")){
      if (clicked_element.classList.contains("info-button")){
        clicked_element = clicked_element.childElement
      }
      list = document.getElementsByTagName("section")
      console.log(list)
      Array.from(list).forEach((element)=>{
        console.log(element)
        index = element.className.split(" ")[1]
        // console.log(document.getElementsByClassName("short"))
        // console.log(index)
        short = document.getElementsByClassName("short "+ index)[0]
        // console.log(short)
        long = document.getElementsByClassName("long "+ index)[0]
        // console.log(short.nextElementSibling===long)
        if (long.nextElementSibling === short){
          document.getElementsByClassName("fade-in "+index)[0].insertBefore(short, long)
        }
      })
        console.log(clicked_element.parentElement.classList[1].split("-")[2])
        console.log(document.getElementsByClassName("short"))
        document.getElementsByTagName("main")[0].style.animation = "collapse 2s forwards";
        document.getElementsByTagName("main")[0].className = document.getElementsByTagName("main")[0].className.replace("enlarge", "collapse");
        Array.from(document.getElementsByClassName("fa-minus")).forEach((element) => {
            element.className = element.className.replace("fa-minus", "fa-info");
        });
        //document.getElementsByClassName("short " + clicked_element.parentElement.classList[1].split("-")[2])[0].style.display = "block";

        // Hide all elements with the "long" class
        Array.from(document.getElementsByClassName("long")).forEach((element) => {
            element.style.animation = "hide-down 2s forwards";
          element.style.display = "none"
        });
        Array.from(document.getElementsByClassName("short")).forEach((element) => {
          console.log("enter")
            element.style.animation = "show-down 2s forwards";
          element.style.display = "block"
        });
    }
  })

  function copyCode(codeId) {
    const copyButton = document.querySelector('.copy-button-' + codeId.split('-')[1]);
    const originalContent = copyButton.innerHTML;
  
    // Replace the button content with the Font Awesome tick icon
    copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  
    // Restore the button content after 5 seconds
    
      copyButton.innerHTML = originalContent;
  }
  // JavaScript code
window.addEventListener('scroll', function() {
  var mainOffset = document.querySelector('main').offsetTop;
  var betaIconContainer = document.querySelector('.beta-icon-container');
  var toggleButtonContainer = document.querySelector('.toggle-button-container');
  
  if (window.pageYOffset >= mainOffset) {
    betaIconContainer.classList.add('hide');
    toggleButtonContainer.classList.add('hide');
  } else {
    betaIconContainer.classList.remove('hide');
    toggleButtonContainer.classList.remove('hide');
  }
});
