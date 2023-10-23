import '../style/variable.scss'
import '../style/button.scss'
import {useState} from "react";
import {createPortal} from "react-dom";
import Modal from "./Modal";

type textButton = {
    text?: number,
    id: number,
    url?: string ,
    description? : string,
}
const ButtonType = ({text, url, id, description}: textButton) => {
    const [showModal, setShowModal] = useState(false)
    console.log(showModal)

    return (
        <>
            {
                text == 3 ?  <a className="button"
                                href="#Project" >see my projects</a> :

        <div>
            { <><button
                onClick={() => setShowModal(true)}
                className="button">More Detail</button>
            {showModal && createPortal(<Modal closeModal={()=> setShowModal(false)} url={url} id={id} description={description} />, document.body)}</>}

        </div> }
        </>

    );
};

export default ButtonType;