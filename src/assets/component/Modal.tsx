import "../style/modal.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {useState} from "react";
import loading from '../image/load/loading.gif';
/*
const gallery = Object.values(import.meta.glob('..//image/project/Kasa/*.{png,jpg,jpeg,PNG,JPEG,webp}', {
    eager: true,
    as: 'url'
}))*/

const carrouselIcon = <FontAwesomeIcon icon={faChevronRight}/>
const xmark = <FontAwesomeIcon icon={faCircleXmark} style={{color: "#ffffff",}}/>
type modalProps = {
    id: number;
    closeModal: () => void;
    url:string,
    description:string,
    title?:string,
    projectTechno?:string[],
    arraySolving: { Problem:string, Solution:string }[],
}



function Modal({id, closeModal, url, description,title,projectTechno,arraySolving}: modalProps) {
const arrayProblem = arraySolving.map((problem)=> <tr> <td>{problem.Problem}</td> <td>{problem.Solution}</td></tr>)
    const [index, setIndex] = useState(1)
    const project = projectTechno? projectTechno.map(projet => <li>{projet}</li>) : undefined
    /*const theProjectImg: string[] | string = theProject.img;*/

    function HandleIndex() {
        setIsAnimationEnabled(true)
        index == 1 ? setIndex(2) : setIndex(1);
        console.log(index)
    }
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
    const [isIframeLoading, setIsIframeLoading] = useState(true);


    return (
        <>
            <div className="box" id={id + "modal"}>
                <p className="iconNavigation" style={{left: '20px'}} onClick={closeModal}>
                    {xmark}&nbsp;<span>Come back to home</span></p>
                <p className={index == 1 ? "iconNavigation rightNav " : "iconNavigation leftNav"}
                   style={{right: '20px'}}
                   onClick={HandleIndex}>
                    <span>Look the description</span> {carrouselIcon}</p>
                <h2>{title}</h2>

                {/* <div className="carrouselProjct">

                     <img src={theProjectImg[0]} alt=""/> <span>{carrouselIcon}</span></div>*/}
                <div style={{display: 'flex', width: "100%", height: '100%'}}>

                    <div  style={isIframeLoading ? {width:'100%', height:'100%',position:"absolute", backgroundImage:`url(${loading})`,backgroundPosition:'center',transform:'translate' ,backgroundSize:'25%',backgroundRepeat:'no-repeat', borderRadius:'20px', } : {display:'none'} }></div>

                    <iframe onLoad={()=> setIsIframeLoading(false)} style={isAnimationEnabled ? {backgroundColor:"white"} : {animation:'0.0s'}} className={index == 1 ? 'iframeNav' : 'NotIframeNav'} src={url} width="100%"
                            height="100%"></iframe>


                    <div className={index == 2 ? 'descriptionNav' : 'NotDescriptionNav'} style={{

                        width: "100%",
                        height: "fit-content",
                        maxHeight:"85%",

                        overflowY:"scroll",

                    }}>
                        <div className={"content"}> <p>{description}</p>
                    

                        <table className={"problemSolving"}>
                            <thead>
                            <tr>
                                <th>Problems during the  process</th>
                                <th>How i solve the  problemes</th>
                            </tr>
                            </thead>
                            <tbody>

                                {arrayProblem}

                            </tbody>
                        </table>


                        </div>
                    </div>
                </div>


                <ul className="technoInProject">{project}</ul>


            </div>
            <div onClick={closeModal}

                 className='modal'>

            </div>
        </>
    );
}

export default Modal;