{"filter":false,"title":"JoSlides.js","tooltip":"/js/JoSlides.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["var slideIndex = 1;","showSlides(slideIndex);","","// Next/previous controls","function plusSlides(n) {","  showSlides(slideIndex += n);","}","","// Thumbnail image controls","function currentSlide(n) {","  showSlides(slideIndex = n);","}","","function showSlides(n) {","  var i;","  var slides = document.getElementsByClassName(\"mySlides\");","  var dots = document.getElementsByClassName(\"dot\");","  if (n > slides.length) {slideIndex = 1} ","  if (n < 1) {slideIndex = slides.length}","  for (i = 0; i < slides.length; i++) {","      slides[i].style.display = \"none\"; ","  }","  for (i = 0; i < dots.length; i++) {","      dots[i].className = dots[i].className.replace(\" active\", \"\");","  }","  slides[slideIndex-1].style.display = \"block\"; ","  dots[slideIndex-1].className += \" active\";","}"],"id":1}],[{"start":{"row":15,"column":48},"end":{"row":15,"column":56},"action":"remove","lines":["mySlides"],"id":2},{"start":{"row":15,"column":48},"end":{"row":15,"column":49},"action":"insert","lines":["J"]}],[{"start":{"row":15,"column":49},"end":{"row":15,"column":50},"action":"insert","lines":["o"],"id":3}],[{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"insert","lines":["S"],"id":4}],[{"start":{"row":15,"column":51},"end":{"row":15,"column":52},"action":"insert","lines":["l"],"id":5}],[{"start":{"row":15,"column":52},"end":{"row":15,"column":53},"action":"insert","lines":["i"],"id":6}],[{"start":{"row":15,"column":53},"end":{"row":15,"column":54},"action":"insert","lines":["d"],"id":7}],[{"start":{"row":15,"column":54},"end":{"row":15,"column":55},"action":"insert","lines":["e"],"id":8}],[{"start":{"row":15,"column":55},"end":{"row":15,"column":56},"action":"insert","lines":["s"],"id":9}],[{"start":{"row":15,"column":59},"end":{"row":16,"column":0},"action":"remove","lines":["",""],"id":11}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":52},"action":"remove","lines":["  var dots = document.getElementsByClassName(\"dot\");"],"id":10}]]},"ace":{"folds":[],"scrolltop":351,"scrollleft":0,"selection":{"start":{"row":12,"column":0},"end":{"row":12,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":14,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1556290717998,"hash":"83040757cc95414058853e5fdfdc506aa9cd8976"}