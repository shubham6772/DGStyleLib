import { KeyMapper } from "./KeyMapper";
import { Spinner } from "./Spinner/Spinner";

export class Helper {

    public static getDomElement(elmId: any, prefix: any, reference = document) {
        try {
            let Prefix = (prefix == "class") ? "." : "#";
            let elm = reference.querySelector(Prefix + elmId) as HTMLElement;
            if (elm) {
                return elm;
            } else {
                console.log("No Element with ID Found...")
            }
        } catch (error) {
            console.log(error);
        }
    }

    public static containClass(elmId: string, classArray: any[]) {
        let elm;
        let className;
        let element = Helper.getDomElement(elmId, KeyMapper.ID);
        if (element) {
            for (let i = 0; i < classArray.length; i++) {
                if (element?.classList.contains(classArray[i])) {
                    className = classArray[i];
                    elm = element;
                    break;
                }

                if (!elm && !className) {
                    for (let i = 0; i < element.children.length; i++) {
                        let child = element.children[i];
                        if (child) {
                            for (let j = 0; j < Spinner.classArray.length; j++) {
                                if (child.classList.contains(Spinner.classArray[j])) {
                                    className = Spinner.classArray[j];
                                    elm = child;
                                    break;
                                }
                            }
                        }

                        if (elm && className) {
                            break;
                        }
                    }
                }
            }

            return {elm, className};
        } else {
            return {};
        }
    }


}


