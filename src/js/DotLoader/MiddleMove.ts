import { Helper } from "../Helper";
import { KeyMapper } from "../KeyMapper";

export class MiddleMove{

    static classArray = [KeyMapper.DG_MiddleMoveLoader, KeyMapper.DG_MiddleMoveLoader_BB, KeyMapper.DG_MiddleMoveLoader_WB];

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
                let {elm} = Helper.containClass(elmId, MiddleMove.classArray);
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
    public static setStyle(elmId: string, color: string) {
        try {

            let spinner = new MiddleMove();
            let elm = spinner.checkMethod(elmId) as HTMLElement;

            if (!elm) {
                console.log("No class provided");
            } else {
                elm.style.background = `radial-gradient(closest-side at calc(100%/6) 50%,${color} 90%,#06062b00) 0/75% 100%`
            }
        } catch (error) {
            console.log(error)
        }
    }

    public static hideSpinner(elmId: string) {
        try {
            let spinner = new MiddleMove();
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
            let spinner = new MiddleMove();
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
