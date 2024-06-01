// ........................................................ CSS classes Imports................................................................................................................................
// Loaders Starts Here
// Spinners CSS Import
import "../CSS/Loaders/Spinner/Spinner.css"
import "../CSS/Loaders/Spinner/ThreeSpinner.css"
import "../CSS/Loaders/Spinner/BenSpinner.css"

// MiddleMoce CSS Import
import "../CSS/Loaders/DotLoader/MiddleMove.css"
// Loaders Ends Here

// Buttons Starts Here
import "../CSS/Buttons/ColorButtons/BtnPrimary.css"
import "../CSS/Buttons/ColorButtons/BtnSecondry.css"
import "../CSS/Buttons/ColorButtons/BtnDanger.css"
import "../CSS/Buttons/ColorButtons/BtnSuccess.css"

// CSS Class Import Ends Here


//........................................................ JS Classes Imports..................................................................................................................................
// Loaders
import { Spinner, ThreeSpinner, BenSpinner, MiddleMove } from "./Loaders"
import {ColorButtons } from "./Buttons"

 

// JS Class Import Ends Here

export class Main{
    
    public static init(){
        (window as any).DGstyle = {
            Spinner,
            ThreeSpinner,
            BenSpinner,
            MiddleMove, 
            ColorButtons,
        }
    }   
    
}


Main.init();
