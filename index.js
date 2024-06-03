//stop triche btn all a faire
let btnAll = document.querySelector(".ok");
// les mettre inclicable
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
  let choosedCountry = getRandomInt(257);
  return choosedCountry;
}
function twoC() {
  let choosedCountry2 = getRandomInt(257);
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

//button for guessing witch country are the flag
function d() {
  return getRandomInt(2);
}

randomC = d();
// combien de pays dans le jeux
//combien de pays dans les question 2 ou 3 ou 5?
//thx gpt
window.addEventListener("load", main);
//

async function main() {
  const apiUrl = "./codes.json";
  const jsonData = await loadJSON(apiUrl);
  if (jsonData) {
    let thisCountry = afficherCountry(jsonData);
    let thisCountry2 = afficherCountry2(jsonData);
    let [valueCountry, valueCountry2] = afficherCountryVal(jsonData);
    let apiCountryFlag = `./CountryFlag/${thisCountry}.png`;

    console.log(apiCountryFlag);

    let apiCountryFlag2 = `./CountryFlag/${thisCountry2}.png`;

    console.log(apiCountryFlag2);
    console.log(valueCountry);
    console.log(valueCountry2);

    function testR() {
      if (randomC == 0) {
        let resultat = valueCountry;
        document.getElementById("reponse").innerHTML = ` ${resultat}`;
      } else {
        let resultat = valueCountry2;
        document.getElementById("reponse").innerHTML = ` ${resultat}`;
      }
      btnR.style.color = "green";
      btnW.style.color = "red";

      document.getElementById("reponse").style.visibility = "visible";
      document.getElementById("reponse").style.color = "green";
      counterR++;
      console.log(`score :${counterR}`);
      btnAll.style.visibility = "hidden";
      // button suivant sinon compteur serv a rien
      return;
    }

    function testW() {
      if (randomC == 0) {
        let result = valueCountry;
        document.getElementById("reponse").innerHTML = `it was ${result}`;
      } else {
        let result = valueCountry2;
        document.getElementById("reponse").innerHTML = `it was ${result}`;
      }
      btnR.style.color = "green";
      btnW.style.color = "red";

      document.getElementById("reponse").style.visibility = "visible";
      document.getElementById("reponse").style.color = "red";
      counterR--;
      console.log(`score :${counterR}`);
      btnAll.style.visibility = "hidden";
      // button suivant
      return;
    }

    let box = document.querySelector("#box");
    if (randomC === 0) {
      const newButtonR = document.createElement("button");
      newButtonR.className = "btnR ok";
      newButtonR.textContent = valueCountry;
      box.appendChild(newButtonR);

      const newButtonW = document.createElement("button");
      newButtonW.className = "btnW";
      newButtonW.textContent = valueCountry2;
      box.appendChild(newButtonW);
      btnR = document.querySelector(".btnR");
      btnW = document.querySelector(".btnW");

      var imagejavascript = document.createElement("img");
      imagejavascript.src = `./CountryFlag/${thisCountry}.png`;
      document.body.appendChild(imagejavascript);
      imagejavascript.height = "300";

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
      document.body.appendChild(imagejavascript);

      btnR.addEventListener("click", testR);
      btnW.addEventListener("click", testW);
    }
  }
}
