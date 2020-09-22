let modal = document.getElementById("myModal");
let cardButton = document.getElementById("cardBtn");
let span = document.getElementsByClassName("close")[0];

cardButton.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
