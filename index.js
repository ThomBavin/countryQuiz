const btnR = document.querySelector(".btnR");
const btnW = document.querySelector(".btnW");
//stop triche btn all a faire
const btnAll = document.querySelector(".ok");
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

// let test = loadJSON(apiUrl);
function afficherCountry(jsonData) {
  let choosedCountry = getRandomInt(306);
  console.log(choosedCountry);

  let keysC = Object.keys(jsonData);

  let codeCountry = keysC[choosedCountry];
  console.log(codeCountry);

  return codeCountry;
}
//faire un deuxieme pays

//thx gpt
async function main() {
  const apiUrl = "http://127.0.0.1:5500/codes.json";
  const jsonData = await loadJSON(apiUrl);
  if (jsonData) {
    let thisCountry = afficherCountry(jsonData);
    let apiCountryFlag = `./CountryFlag/${thisCountry}.png`;

    console.log(apiCountryFlag);
  }
}

// combien de pays dans le jeux
//combien de pays dans les question 2 ou 3 ou 5?
//thx gpt
window.addEventListener("load", main);
//
function testR() {
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

// afficherCapitalCity();
// afficherCountry();
btnR.addEventListener("click", testR, true);
btnW.addEventListener("click", testW);
