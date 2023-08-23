import {createPortal} from "react-dom";

type modalProps = {
    id:number;}


function Modal({id}: modalProps) {
    return createPortal(
        <>
        <div>
            <p id={id + "modal"}>truc{id}</p>
        </div>
        </>, document.body
    );
}

export default Modal;