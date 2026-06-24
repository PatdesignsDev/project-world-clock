let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment();

losAngelesDateElement.innerHTML = moment().format("MMMM do YYYY ");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <small> ${losAngelesTime.format("A")} </small>`;
