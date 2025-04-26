var totalGames = 1000;
var winsBySwitching = 0;
var winsByStaying = 0;
var resultsContainer = document.getElementById("results");

for (var gameNumber = 1; gameNumber <= totalGames; gameNumber++) {
  var carDoor = Math.floor(Math.random() * 3) + 1;
  var initialChoice = Math.floor(Math.random() * 3) + 1;

  var hostOpenedDoor;
  do {
    hostOpenedDoor = Math.floor(Math.random() * 3) + 1;
  } while (hostOpenedDoor === initialChoice || hostOpenedDoor === carDoor);

  var resultMessage = "<strong>Game " + gameNumber + "</strong><br>";
  resultMessage += "Car is behind Door: " + carDoor + "<br>";
  resultMessage += "Player initially chose Door: " + initialChoice + "<br>";
  resultMessage += "Host opened Door: " + hostOpenedDoor + "<br>";

  if (initialChoice === carDoor) {
    winsByStaying++;
    resultMessage += '<span class="stay">Best Strategy: Stay!</span><br><br>';
  } else {
    winsBySwitching++;
    resultMessage += '<span class="switch">Best Strategy: Switch!</span><br><br>';
  }

  resultsContainer.innerHTML += resultMessage;
}


var switchingWinRate = ((winsBySwitching / totalGames) * 100).toFixed(2);
var stayingWinRate = ((winsByStaying / totalGames) * 100).toFixed(2);

resultsContainer.innerHTML += "<hr>";
resultsContainer.innerHTML += "<h2>Summary</h2>";
resultsContainer.innerHTML += "Wins by Switching: <strong>" + winsBySwitching + "</strong> (" + switchingWinRate + "%)<br>";
resultsContainer.innerHTML += "Wins by Staying: <strong>" + winsByStaying + "</strong> (" + stayingWinRate + "%)<br>";
