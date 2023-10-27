import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const PopUp = (props: PropsWithChildren<{classes:string,id:string}>) => {

    return createPortal(
        <div className={props.classes}>
            {props.children}
        </div>,document.getElementById(props.id)!
    )
};

export default PopUp;