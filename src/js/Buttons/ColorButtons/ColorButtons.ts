import { KeyMapper } from "../../KeyMapper";
import { Helper } from "../../Helper";


interface EventHandlers {
    onClick?: (event: Event) => void;
    onMouseOver?: (event: Event) => void;
    onMouseOut?: (event: Event) => void;
}

interface Style {
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    textSize?: string,
    unit: string;
}

export class ColorButtons {

    private classArray = [KeyMapper.DG_CB_BtnDanger, KeyMapper.DG_CB_BtnPrimary, KeyMapper.DG_CB_BtnSecondry, KeyMapper.DG_CB_BtnSuccess];

    private checkMethod(elmId: any) {
        try {
            let elm;
            if (!elmId) {
                console.log("Element id not Provided");
                return;
            }
            let container = Helper.getDomElement(elmId, KeyMapper.ID);
            if (!container) {
                console.log("Element not found in DOM");
            } else {
                let colorButton = new ColorButtons()
                let { elm, classUsed } = Helper.containClass(elmId, colorButton.classArray);
                if (!elm) {
                    return null;
                } else {
                    return { elm, classUsed };
                }
            }

            return elm;
        } catch (error) {
            console.log(error)
        }
    }


    public static applyEvent({ onClick, onMouseOver, onMouseOut }: EventHandlers, id: string) {
        let cBtn = new ColorButtons();
        let obj = cBtn.checkMethod(id);

        if (!obj) {
            Helper.displayLog({ msg: "No Class provided" });
        } else {
            let { elm } = obj;
            if (onClick) {
                Helper.attachEventListener(elm as HTMLElement, onClick, "click");
            }

            if (onMouseOver) {
                Helper.attachEventListener(elm as HTMLElement, onMouseOver, "mouseover");
            }

            if (onMouseOut) {
                Helper.attachEventListener(elm as HTMLElement, onMouseOut, "mouseout");
            }
        }
    }

    public static applyStyle({ width, height, color, backgroundColor, textSize, unit = "px" }: Style, id: string) {

        if (!Helper.validateUnit(unit)) {
            Helper.displayLog({ msg: "Please provide valid Units (%, px, rem, em)" })

            return
        }

        let cBtn = new ColorButtons();
        let obj = cBtn.checkMethod(id);

        if (!obj) {
            Helper.displayLog({ msg: "No Class Provided" });
        } else {
            let { elm } = obj;
            let element = elm as HTMLElement;

            if (width) {
                element.style.paddingRight = width + unit;
                element.style.paddingLeft = width + unit;
            }

            if (height) {
                element.style.paddingTop = height + unit;
                element.style.paddingBottom = height + unit;
            }

            if (color) {
                let provideColor = Helper.colorNameToHexCode(color);
                if (provideColor) {
                    element.style.color = provideColor;
                }
            }

            if (backgroundColor) {
                let provideColor = Helper.colorNameToHexCode(backgroundColor);
                if (provideColor) {
                    element.style.background = provideColor;
                }
            }

            if (textSize) {
                element.style.fontSize = textSize + unit.toLowerCase();
            }
        }

    }


    public static hideButton(id: string){
        let cBtn = new ColorButtons();
        let obj = cBtn.checkMethod(id);

        if(!obj){
            Helper.displayLog({msg: "No Class Provided"})
        }else{
            let {elm} = obj;
            let element = elm as HTMLElement;
            element.style.display = "none";
        }
    }

    public static showButton(id: string){
        let cBtn = new ColorButtons();
        let obj = cBtn.checkMethod(id);

        if(!obj){
            Helper.displayLog({msg: "No Class Provided"})
        }else{
            let {elm} = obj;
            let element = elm as HTMLElement;
            element.style.display = "block";
        }
    }


}