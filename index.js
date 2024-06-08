//stop triche btn all a faire
let btnAll = document.querySelector(".ok");
// les mettre inclicable
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let alerted10;
let alerted7;
let alerted5;
let alerted3;

let countdown = 15;
// const apiUrl = "./codes.json";
let counterR = 0;

// const apiUrlCity = "https://countriesnow.space/api/v0.1/countries";

async function loadJSON(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur lors du chargement du fichier JSON :", error);
    return null;
  }
}
function oneC() {
  let choosedCountry = getRandomInt(245);
  return choosedCountry;
}
function twoC() {
  let choosedCountry2 = getRandomInt(245);
  return choosedCountry2;
}
// let test = loadJSON(apiUrl);
let number1 = oneC();
let number2 = twoC();
if (number1 == number2) {
  number1 = oneC();
  number2 = twoC();
}
function afficherCountry(jsonData) {
  let keysC = Object.keys(jsonData);

  let codeCountry = keysC[number1];

  return codeCountry;
}

function afficherCountry2(jsonData) {
  let keysC = Object.keys(jsonData);

  let codeCountry2 = keysC[number2];

  return codeCountry2;
}

function afficherCountryVal(jsonData) {
  let valueC = jsonData;

  let codeCountry = valueC[afficherCountry(jsonData)];
  let codeCountry2 = valueC[afficherCountry2(jsonData)];
  console.log(codeCountry);
  console.log(codeCountry2);
  return [codeCountry, codeCountry2];
}
//faire un deuxieme pays

//thx gpt

function d() {
  return getRandomInt(2);
}

// combien de pays dans le jeux
//combien de pays dans les question 2 ou 3 ou 5?
//thx gpt
window.addEventListener("load", readyButton);
//
function readyButton() {
  startbutton = document.createElement("button");
  startbutton.textContent = "Start";
  startbutton.className = "ReadyTrue";
  document.querySelector("#box").appendChild(startbutton);

  document.querySelector(".ReadyTrue").addEventListener("click", main);
}

async function main(newValue) {
  if (document.querySelector(".boxInfo")) {
    document.querySelector(".boxInfo").remove();
  }
  if (document.querySelector(".CountSet")) {
    document.querySelector(".CountSet").remove();
  }
  if (document.querySelector(".ReadyTrue")) {
    document.querySelector(".ReadyTrue").remove();
  }
  randomC = d();
  const apiUrl = "./codes.json";
  const jsonData = await loadJSON(apiUrl);
  if (jsonData) {
    if (newValue) {
      number1 = oneC();
      number2 = twoC();
      if (number1 == number2) {
        number1 = oneC();
        number2 = twoC();
      }
    }

    let thisCountry = afficherCountry(jsonData);
    let thisCountry2 = afficherCountry2(jsonData);
    let [valueCountry, valueCountry2] = afficherCountryVal(jsonData);

    let counterHtml = document.createElement("p");
    counterHtml.innerHTML = `Country check : ${counterR}`;
    counterHtml.className = "CounterSet";

    document.querySelector(".counter").appendChild(counterHtml);
    let clicked = false;

    if (counterR <= 10) {
      countdown = 15;
    }
    if (counterR >= 10) {
      if (alerted10 !== true) {
        alerted10 = true;
        alert("More than 10 point = 10 SEC");
      }
      countdown = 10;

      if (counterR >= 15) {
        if (alerted7 !== true) {
          alerted7 = true;
          alert("More than 15 point = 7 SEC");
        }
        countdown = 7;

        if (counterR >= 20) {
          if (alerted5 !== true) {
            alerted5 = true;
            alert("More than 20 point = 5 SEC");
          }
          countdown = 5;

          if (counterR >= 30) {
            if (alerted3 !== true) {
              alerted3 = true;
              alert("More than 30 point = 3 SEC");
            }
            countdown = 3;
          }
        }
      }
    }
    function startCountdown(seconds) {
      let counter = seconds;
      let countdownHtml = document.createElement("h1");

      countdownHtml.className = "CountSet";
      document.getElementById("box").appendChild(countdownHtml);

      const interval = setInterval(() => {
        if (clicked == false) {
          countdownHtml.innerHTML = counter;
          counter--;
          if (counter < 0) {
            clearInterval(interval);
            countdownHtml.innerHTML = "TIMEOUT!";
            testW();
          }
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }

    function testR() {
      clicked = true;
      if (randomC == 0) {
        let resultat = valueCountry;
        document.getElementById("reponse").innerHTML = `<p> ${resultat} </p>`;
      } else {
        let resultat = valueCountry2;
        document.getElementById("reponse").innerHTML = `<p> ${resultat} </p>`;
      }

      let nextButton = document.createElement("button");
      nextButton.className = "nextB";
      nextButton.textContent = "next";
      document.querySelector("#reponse").appendChild(nextButton);
      let theNButton = document.querySelector(".nextB");
      btnR.remove();
      btnW.remove();
      function newSett() {
        theNButton.remove();
        document.querySelector("#reponse").textContent = "";
        document.querySelector(".imgToC").remove();
        document.querySelector(".CounterSet").remove();
        document.querySelector(".jump").remove();

        console.clear();

        main(true);
      }

      theNButton.addEventListener("click", newSett);

      btnR.style.color = "green";
      btnW.style.color = "red";

      document.getElementById("reponse").style.visibility = "visible";
      document.getElementById("reponse").style.color = "green";
      counterR++;
      console.log(`score :${counterR}`);

      // button suivant sinon compteur serv a rien
      return;
    }

    function testW() {
      clicked = true;
      if (randomC == 0) {
        let resultat = valueCountry;
        document.getElementById(
          "reponse"
        ).innerHTML = `<p>it was ${resultat} </p>`;
      } else {
        let resultat = valueCountry2;
        document.getElementById(
          "reponse"
        ).innerHTML = `<p>it was ${resultat} </p>`;
      }

      let nextButton = document.createElement("button");
      nextButton.className = "nextB";
      nextButton.textContent = "suivant";
      document.querySelector("#reponse").appendChild(nextButton);
      let theNButton = document.querySelector(".nextB");
      btnR.remove();
      btnW.remove();
      function newSett() {
        theNButton.remove();
        document.querySelector("#reponse").textContent = "";
        document.querySelector(".imgToC").remove();
        document.querySelector(".CounterSet").remove();
        document.querySelector(".jump").remove();

        console.clear();
        main(true);
      }

      theNButton.addEventListener("click", newSett);

      btnR.style.color = "green";
      btnW.style.color = "red";

      document.getElementById("reponse").style.visibility = "visible";
      document.getElementById("reponse").style.color = "red";
      counterR--;
      console.log(`score :${counterR}`);

      // button suivant
      return;
    }

    let box = document.querySelector("#box");
    if (randomC === 0) {
      const newButtonR = document.createElement("button");
      newButtonR.className = "btnR";
      newButtonR.textContent = valueCountry;
      box.appendChild(newButtonR);

      const newButtonW = document.createElement("button");
      newButtonW.className = "btnW";
      newButtonW.textContent = valueCountry2;
      box.appendChild(newButtonW);
      btnR = document.querySelector(".btnR");
      btnW = document.querySelector(".btnW");

      var br = document.createElement("br");
      br.className = "jump";
      document.querySelector("#box").appendChild(br);
      var imagejavascript = document.createElement("img");
      imagejavascript.src = `./CountryFlag/${thisCountry}.png`;
      imagejavascript.className = "imgToC";

      document.querySelector("#Container").appendChild(imagejavascript);
      startCountdown(countdown);
      btnR.addEventListener("click", testR, true);
      btnW.addEventListener("click", testW);
    } else {
      const newButtonW = document.createElement("button");
      newButtonW.className = "btnW";

      newButtonW.textContent = valueCountry;
      box.appendChild(newButtonW);
      const newButtonR = document.createElement("button");
      newButtonR.className = "btnR";
      newButtonR.textContent = valueCountry2;
      //inverser
      box.appendChild(newButtonR);
      btnR = document.querySelector(".btnR");
      btnW = document.querySelector(".btnW");

      var imagejavascript = document.createElement("img");
      imagejavascript.src = `./CountryFlag/${thisCountry2}.png`;
      imagejavascript.height = "300";
      imagejavascript.className = "imgToC";

      var br = document.createElement("br");
      br.className = "jump";
      document.querySelector("#box").appendChild(br);
      document.querySelector("#Container").appendChild(imagejavascript);
      startCountdown(countdown);
      btnR.addEventListener("click", testR);
      btnW.addEventListener("click", testW);
    }
    if (valueCountry === undefined || valueCountry2 === undefined) {
      if (document.querySelector(".btnW")) {
        document.querySelector(".btnW").remove();
      }
      if (document.querySelector(".btnR")) {
        document.querySelector(".btnR").remove();
      }
      if (document.querySelector(".CounterSet")) {
        document.querySelector(".CounterSet").remove();
      }

      if (document.querySelector(".imgToC")) {
        document.querySelector(".imgToC").remove();
      }
      console.clear();
      console.log("erreur de undifined");
      main(true);
    }
  }
}
