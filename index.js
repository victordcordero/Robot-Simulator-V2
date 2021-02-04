document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  let allMoves = document.querySelector("#move-button")
  allMoves.addEventListener('click', movement)

  function movement() {
    let moves = document.getElementById("moves-container");
    selectedMove = moves.removeChild(moves.childNodes[0])
    move((moves.childNodes[0]).innerText)
    selectedMove.remove()
  }
  
});
