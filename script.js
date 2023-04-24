//global variables
const diseaseAssociated = document.getElementById("diseaseAssociated");
const renal = document.getElementById("renal");
const boneMarrow = document.getElementById("boneMarrow");
const home = document.getElementById("home");
const gridRightContent = document.getElementById("gridRightContent");
const currentChild = document.getElementById("currentChild");
let currentClass;

//functions to alter the DOM and CSS
function clearCurrentPage () {
    currentClass = gridRightContent.classList;
    gridRightContent.classList.remove(currentClass);
    while (gridRightContent.firstChild) {
    gridRightContent.removeChild(gridRightContent.firstChild);
    }
}

function generateDiseaseAssociated () {
    clearCurrentPage();
    gridRightContent.classList.add("disease-container");
    const diseaseImg = document.createElement("img");
    diseaseImg.classList.add("disease-img");
    diseaseImg.src = "./images/disease.jpg";
    
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = "https://lrc.hrlmp.ca/uploaded/R_HLA%20DNA%20TYPING%20QUESTIONNAIRE%2008sep14.pdf";
    a.innerText = "Click for Requisition";
    a.classList.add("disease-req");

    const diseaseAssociations = document.createElement("div");
    diseaseAssociations.classList.add("disease-associations");
    diseaseAssociations.innerText = 
    `Disease Associations:\n
    Behcet's Uveitis --> B51\n
    Birdshot Uveitis --> A29\n
    Celiac Disease --> DQ2 or DQ8\n
    Abacavir Sensitivity --> B*5701 Allele\n
    Narcolepsy --> DQB1*0602 Allele\n
    Carbamazepine Sensitivity --> B*1502 Allele\n
    Spondylo-arthropathies --> B27`
    gridRightContent.appendChild(diseaseImg);
    gridRightContent.appendChild(a);
    gridRightContent.appendChild(diseaseAssociations);
    
}

function generateRenal () {
    clearCurrentPage();
    //set up container and kidney pic
    gridRightContent.classList.add("renal-container");
    const renalImg = document.createElement("img");
    renalImg.classList.add("kidney");
    renalImg.src = "./images/kidney.jpg";
    
    //set up first notes box
    const renalDiv = document.createElement("div");
    renalDiv.innerText = 
    `Minimum Blood Sample Requirements:\n 
    3x EDTA for typing\n 
    1x Serum for antibody testing\n
    5x ACD for crossmatch\n
    Notes:\n 
    Cells must be < 36hrs old for crossmatch\n
    Antibody tests --> Initial, 8-10 week, \n
    Post-tx (TAT 48hrs, needs lab director approval)`;
    renalDiv.classList.add("renal-requirements");
    
    //set up second notes box
    const extractionDiv = document.createElement("div");
    extractionDiv.innerText = 
    `Extraction Guidelines:\n
    Donors & Recipients ---> 200ul\n
    Minimum Optical Density ---> 20ng/ul\n
    Accepatable Sample Types ---> EDTA, ACD, Spleen (Deceased Donor)`
    extractionDiv.classList.add("extract");
    gridRightContent.appendChild(renalImg);
    gridRightContent.appendChild(renalDiv);
    gridRightContent.appendChild(extractionDiv);
}

function generateBoneMarrow () {
    clearCurrentPage();
    //set up container and bone marrow pic
    gridRightContent.classList.add("bm-container");
    const bmImg = document.createElement("img");
    bmImg.classList.add("bone-marrow-pic");
    bmImg.src = "./images/bonemarrow.jpg";

    //set up recipient box
    const bmRecipHeader = document.createElement('div');
    bmRecipHeader.classList.add('bm-header');
    bmRecipHeader.innerText = "Recipients";
    const bmDiv = document.createElement("div");
    bmDiv.innerText = 
    `Prior to Tx each recipient must have:\n 
    Initial Typing --> Secondary Typing\n
    Initial Antibody ID --> Pre-Tx Antibody ID
    (Minimum 3x EDTA for Typing, 1x serum for Antibody ID\n

    Extraction Notes:\n 
    For all recipients extract 2x volume\n
    Recipient WBC is Important!\n
    If WBC normal: use 5mL EDTA, 15mL RBC lysis, 150 robot protocol\n
    If WBC low: use 10mL EDTA, 30mL RBC lysis, 300 robot protocol\n
    If WBC high: use 5mL EDTA, 15mL RBC lysis, 75 robot protocol
    `;
    bmDiv.classList.add("renal-requirements");

     //set up donor box
    const bmDonorHeader = document.createElement('div');
    bmDonorHeader.classList.add('donor-header');
    bmDonorHeader.innerText = "Donors";
    const bmExtractionDiv = document.createElement("div");
    bmExtractionDiv.innerText = 
    `Prior to Tx each donor must have:\n
    Initial Typing --> Secondary Typing\n
    Typing Orders:\n
    Sibling (1 0f 1) --> A,B,C,DR,DQ\n
    Sibling (n of n) --> A,B,C\n
    Child/Parent --> A,B,C,DR,DQ\n
    UBMD -->\n 
    Extraction Notes:\n
    For UBMDs extract 2x volume
    Minimum Optical Density ---> 20ng/ul\n
    Accepatable Sample Types ---> EDTA, Buccal Swab`
    bmExtractionDiv.classList.add("extract");

    gridRightContent.appendChild(bmImg);
    gridRightContent.appendChild(bmRecipHeader);
    gridRightContent.appendChild(bmDonorHeader);
    gridRightContent.appendChild(bmDiv);
    gridRightContent.appendChild(bmExtractionDiv);
}

function returnHome () {
    clearCurrentPage();
    const homeContainer = document.createElement("div");
    const title = document.createElement("h1");
    title.innerText = "HLA Sample Reference Guide";
    const p1 = document.createElement("p");
    p1.innerText = "Please choose a sample type from the side menu to view the reference";
    const p2 = document.createElement("p");
    p2.innerText = "To learn more about Histocompatibility click below:";
    const a = document.createElement("a");
    a.classList.add("ashi");
    a.innerText = "ASHI";
    a.target = "_blank";
    a.href = "https://www.ashi-hla.org/";
    gridRightContent.classList.add("grid-right");
    gridRightContent.appendChild(homeContainer);
    homeContainer.appendChild(title);
    homeContainer.appendChild(p1);
    homeContainer.appendChild(p2);
    homeContainer.appendChild(a);
}

//event listeners for side menu buttons
home.addEventListener("click", returnHome);

renal.addEventListener("click", generateRenal);

boneMarrow.addEventListener("click", generateBoneMarrow);

diseaseAssociated.addEventListener("click", generateDiseaseAssociated);