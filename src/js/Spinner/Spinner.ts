import { Helper } from "../Helper";
import { KeyMapper } from "../KeyMapper";

export class Spinner {

    static classArray = [KeyMapper.DG_Spinner, KeyMapper.DG_Spinner_BB, KeyMapper.DG_Spinner_WB];

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
                let {elm} = Helper.containClass(elmId, Spinner.classArray);
                if(!elm){
                   return false
                }else{
                    return elm;
                }
            }

            return elm;
        } catch (error) {
            console.log(error)
        }
    }
    public static setStyle(elmId: string, color: string, size: number, property: string = "px") {
        try {

            let spinner = new Spinner();
            let elm = spinner.checkMethod(elmId) as HTMLElement;

            if (!elm) {
                console.log("No class provided");
            } else {
                elm.style.borderTopColor = color;
                elm.style.width = size + property;
                elm.style.height = size + property;
            }
        } catch (error) {
            console.log(error)
        }
    }

    public static hideSpinner(elmId: string) {
        try {
            let spinner = new Spinner();
            let elm = spinner.checkMethod(elmId) as HTMLElement;

            if (!elm) {
                console.log("No class provided");
            } else {
                elm.style.display = "none";
            }
        } catch (error) {
            console.log(error)
        }

    }

    public static showSpinner(elmId: string) {
        try {
            let spinner = new Spinner();
            let elm = spinner.checkMethod(elmId) as HTMLElement;

            if (!elm) {
                console.log("No class provided");
            } else {
                elm.style.display = "block";
            }
        } catch (error) {
            console.log(error)
        }
    }


}
