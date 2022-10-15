// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  
}


// Get the modaltwo
var modaltwo = document.getElementById("myModaltwo");

// Get the button that opens the modal
var btntwo = document.getElementById("myBtntwo");

// Get the <span> element that closes the modal
var spantwo = document.getElementsByClassName("closetwo")[0];

// When the user clicks the button, open the modal 
btntwo.onclick = function() {
  modaltwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spantwo.onclick = function() {
  modaltwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modaltwo) {
    modaltwo.style.display = "none";
  }
}


// Get the modal
var modalt = document.getElementById("myModalt");

// Get the button that opens the modal
var btnt = document.getElementById("myBtnt");

// Get the <span> element that closes the modal
var spant = document.getElementsByClassName("closet")[0];

// When the user clicks the button, open the modal 
btnt.onclick = function() {
  modalt.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spant.onclick = function() {
  modalt.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalt) {
    modalt.style.display = "none";
  }
}

// Get the modal
var modalq = document.getElementById("myModalq");

// Get the button that opens the modal
var btnq = document.getElementById("myBtnq");

// Get the <span> element that closes the modal
var spanq = document.getElementsByClassName("closeq")[0];

// When the user clicks the button, open the modal 
btnq.onclick = function() {
  modalq.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanq.onclick = function() {
  modalq.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalq) {
    modalq.style.display = "none";
  }
}
