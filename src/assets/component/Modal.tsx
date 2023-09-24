import "../style/modal.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {useState} from "react";

const gallery = Object.values(import.meta.glob('..//image/project/Kasa/*.{png,jpg,jpeg,PNG,JPEG,webp}', {
    eager: true,
    as: 'url'
}))

const carrouselIcon = <FontAwesomeIcon icon={faChevronRight}/>
const xmark = <FontAwesomeIcon icon={faCircleXmark} style={{color: "#ffffff",}}/>
type modalProps = {
    id: number;
    closeModal: () => void;
}
type ProjectsType = {
    id: number,
    title: string,
    text: string,
    button: number,
    img: string | string[],
    description: string,
    techno: string[],
}[]

type theProjectype = {
    id: number,
    title: string,
    text: string,
    button: number,
    img: string | string[],
    description: string,
    techno: string[],
} | undefined

type projectTechno = string[]

const modalProjects: ProjectsType = [

    {
        id: 2,
        title: "Project Kasa",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
        img: "",
        description: 'truc',
        techno: ['Sass', 'javascript', 'react'],
    },
    {
        id: 4,
        title: "Project Sophie Bruel",
        text: "As part of my training, starting from a basic website, I had to create an interface and connect it to the existing API in order to integrate a page showcasing the architect's work.",
        button: 2,
        img: gallery,
        description: 'truc',
        techno: ['html', 'css', 'javascript'],
    },
    {
        id: 5,
        title: "Project Backend",
        text: "As part of my training, building upon a basic front-end, I developed a REST API using Node.js to manage a grading book system and implemented image optimization during the import process.",
        button: 2,
        img: "",
        description: 'truc',
        techno: ['javascript', 'NodeJs', 'Mongoose'],
    },
    {
        id: 6,
        title: "Project Bookie",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
        img: "",
        description: 'truc',
        techno: ['html', 'css'],
    },
    {
        id: 7,
        title: "Project optimisation",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
        img: "",
        description: 'truc',
        techno: ['html', 'css', 'javascript'],

    },
]

function Modal({id, closeModal}: modalProps) {
    console.log('images', gallery)
    const [index, setIndex] = useState(1)

    const theProject: theProjectype = modalProjects.find(project => project.id === id);

    if (!theProject) {
        return null;
    }
    const TechnoProjet = theProject.techno.map((techno) => <p>{techno}</p>)

    const theProjectImg: string[] | string = theProject.img;

    function HandleIndex() {
        index == 1 ? setIndex(2) : setIndex(1);
        console.log(index)
    }

    return (
        <>
            <div className="box" id={id + "modal"}>
                <p className="iconNavigation" style={{left: '20px'}} onClick={closeModal}>
                    {xmark}&nbsp;<span>Come back to home</span></p>
                <p className={index == 1 ? "iconNavigation rightNav " : "iconNavigation leftNav"} style={{right: '20px'}}
                   onClick={HandleIndex}>
                    <span>Look the description</span> {carrouselIcon}</p>
                <h2>{theProject.title}</h2>

                {/* <div className="carrouselProjct">

                     <img src={theProjectImg[0]} alt=""/> <span>{carrouselIcon}</span></div>*/}
<div style={{display:'flex', width:"100%", height:'100%'}}>
                <iframe className={index == 1 ?'iframeNav' : 'NotIframeNav' }  src="https://betclim.fr/" width="100%"
                        height="100%"></iframe>
                <p className={index == 2 ?'descriptionNav' : 'NotDescriptionNav' } style={{

                    width: "100%",
                    height: "100%"
                }}>{theProject.description}</p>
</div>


                <div className="technoInProject">{TechnoProjet}</div>


            </div>
            <div onClick={closeModal}

                 className='modal'>

            </div>
        </>
    );
}

export default Modal;