document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM loaded");
  const player = document.getElementById("player-name");
  const playerName = getUrlParam("name");
  console.log("Player name:", playerName);
  if (playerName) {
    player.innerText = playerName;
  }
}

function getUrlParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}
