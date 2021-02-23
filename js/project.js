// var acc = document.getElementsByClassName("accordion");
// var panels = document.getElementsByClassName("panel");
// var i;
// var j;

// var handleAccordionClick = function(){
//     for(j = 0; j < panels.length; j++){
//         acc[j].classList.remove("active");
//         panels[j].classList.remove("show");
//     }
//     this.classList.add("active");
//     this.nextElementSibling.classList.add("show");
// }

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = handleAccordionClick;    
// }
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}