import "./styles/main.scss";
import * as buttons from "./ECS/buttonFunctionalities";
import * as arApp from "./ECS/arApp"
/* const { reference } = require("three/examples/jsm/nodes/Nodes.js"); */


/* Get all the buttons from the HTML DOCUMENT:
    Menu button, 
    Upload IFC Model, 
    Select IFC Model, 
    Visualize IFC Model, 
    Start AR Session,
    Technical Information,
    Contact Information
*/
const menuButton = document.getElementById("menu-button");
const uploadButton = document.getElementById("upload-ifc-button");
const selectButton = document.getElementById("select-ifc-button");
const visualizeButton = document.getElementById("visualize-ifc-button");
const startARButton = document.getElementById("start-ar-button");
const technicalInfoButton = document.getElementById("tech-info-button");
const contactInfoButton = document.getElementById("contact-info-button");

/* Add Event Listeners to All the buttons. 
    From the buttonFunctionalities*/
menuButton.addEventListener("click", buttons.toggleMenu);
uploadButton.addEventListener("click", buttons.uploadIFC);
selectButton.addEventListener("click", buttons.selectIFC);
visualizeButton.addEventListener("click", buttons.toggle3DVisualizer);
technicalInfoButton.addEventListener("click", buttons.toggleTechInfo);
contactInfoButton.addEventListener("click", buttons.toggleContacts);

/* This button starts the AR Functionality
    Referencing another JS file */
startARButton.addEventListener("click", arApp.implementArApplication);