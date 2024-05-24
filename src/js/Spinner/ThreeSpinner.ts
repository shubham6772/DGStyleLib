import { Helper } from "../Helper";
import { KeyMapper } from "../KeyMapper";

export class ThreeSpinner {

    static classArray = [KeyMapper.DG_ThreeSpinner, KeyMapper.DG_TS_1, KeyMapper.DG_TS_2, KeyMapper.DG_TS_3, KeyMapper.DG_ThreeSpinner_BB, KeyMapper.DG_TS_1_BB, KeyMapper.DG_TS_2_BB, KeyMapper.DG_TS_3_BB]
    static classUsed: any = "";

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
                let { elm, className } = Helper.containClass(elmId, ThreeSpinner.classArray);
                ThreeSpinner.classUsed = className;
                if (!elm) {
                    return false
                } else {
                    return elm;
                }
            }

            return elm;
        } catch (error) {
            console.log(error)
        }
    }
    public static applyStyle(elmId: string, color: string[], size: number, property: string = "px") {
        try {
            let tspinner = new ThreeSpinner();
            let elm = tspinner.checkMethod(elmId) as HTMLElement;
            if (!elm) {
                console.log("No Class Provided...");
            } else {

                let itr = 1;
                while (itr <= 3) {
                    let child = elm.querySelector(`:nth-child(${itr})`) as HTMLElement;
                    if(!child){
                        console.log(`${itr} child Element not found`);
                    }
                    child.style.borderTopColor = color[itr];
                    child.style.borderRightColor = color[itr];
                    child.style.width = `${size + property}`;
                    child.style.height = `${size +property}`;
                    size += 20;
                    itr++;
                }
            }


        } catch (error) {
            console.log(error)
        }
    }

    public static hideSpinner(elmId: string) {
        try {
            let tspinner = new ThreeSpinner();
            let elm = tspinner.checkMethod(elmId) as HTMLElement;
            if (!elm) {
                console.log("No Class Provided...");
            } else {
                elm.style.display = "none";
            }
        } catch (error) {
            console.log(error);
        }
    }

    public static showSpinner(elmId: string) {
        try {
            let tspinner = new ThreeSpinner();
            let elm = tspinner.checkMethod(elmId) as HTMLElement;
            if (!elm) {
                console.log("No Class Provided...");
            } else {
                elm.style.display = "flex";
            }
        } catch (error) {
            console.log(error);
        }
    }
}