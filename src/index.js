// ........................................................ CSS classes Imports................................................................................................................................
// Loaders Starts Here
// Spinners CSS Import
import "./CSS/Loaders/Spinner/Spinner.css"
import "./CSS/Loaders/Spinner/ThreeSpinner.css"
import "./CSS/Loaders/Spinner/BenSpinner.css"

// MiddleMoce CSS Import
import "./CSS/Loaders/DotLoader/MiddleMove.css"
// Loaders Ends Here

// Buttons Starts Here
import "./CSS/Buttons/ColorButtons/BtnPrimary.css"
import "./CSS/Buttons/ColorButtons/BtnSecondry.css"
import "./CSS/Buttons/ColorButtons/BtnDanger.css"
import "./CSS/Buttons/ColorButtons/BtnSuccess.css"

// Navbar Starts here
import "./CSS/Navbar/Navbar.css"
// Navbar End Here

// CSS Class Import Ends Here

//........................................................ JS Classes Imports..................................................................................................................................
// Loaders
import { Spinner, ThreeSpinner, BenSpinner, MiddleMove } from "./js/Loaders"

// Color Buttons
import {ColorButtons } from "./js/Buttons"

// Navbar
import { Navbar } from "./js/Navbar/Navbar" 

// JS Class Import Ends Here

var DGstyle = {
    Spinner,
    ThreeSpinner,
    BenSpinner,
    MiddleMove, 
    ColorButtons,
    Navbar,
}

window.DGstyle = DGstyle;