import '../style/variable.scss'
import '../style/button.scss'
import {useState} from "react";
import {createPortal} from "react-dom";
import Modal from "./Modal";

type textButton = {
    text: number,
    id: number,
    url: string | undefined
}
const ButtonType = ({text, url, id}: textButton) => {
    const [showModal, setShowModal] = useState(false)
    console.log(showModal)
    return (
        <div>
            {text == 1 ? <a target="_blank" className="button"
                            href={url}>see Website</a> : <><button
                onClick={() => setShowModal(true)}
                className="button">More Detail</button>
            {showModal && createPortal(<Modal id={id} />, document.body)}</>}

        </div>
    );
};

export default ButtonType;