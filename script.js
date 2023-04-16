//global variables
const diseaseAssociated = document.getElementById("diseaseAssociated");
const renal = document.getElementById("renal");
const boneMarrow = document.getElementById("boneMarrow");
const home = document.getElementById("home");
const gridRightContent = document.getElementById("gridRightContent");

//functions to alter the DOM and CSS
function clearCurrentPage () {
    
}

function generateDiseaseAssociated () {

}

function generateRenal () {

}

function generateBoneMarrow () {

}

function returnHome () {
    location.reload();
}

//event listeners for side buttons
home.addEventListener("click", returnHome);

renal.addEventListener("click", generateRenal);

boneMarrow.addEventListener("click", generateBoneMarrow);

diseaseAssociated.addEventListener("click", generateDiseaseAssociated);