import "../style/modal.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


const carrouselIcon = <FontAwesomeIcon icon={faChevronRight}/>

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
    techno: string[],
}[]

type theProjectype = {
    id: number,
    title: string,
    text: string,
    button: number,
    img: string | string[],
    techno: string[] ,
} | undefined

type projectTechno = string[]

const modalProjects: ProjectsType = [

    {
        id: 2,
        title: "Project Kasa",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
        img: "",
        techno: ['Sass','javascript','react'] ,
    },
    {
        id: 4,
        title: "Project Sophie Bruel",
        text: "As part of my training, starting from a basic website, I had to create an interface and connect it to the existing API in order to integrate a page showcasing the architect's work.",
        button: 2,
        img: ["https://media.joomeo.com/large/64e5e6e934804/MUY5NjQxOTIl_EIg5tJAlFjEfH6QX3T3.jpg",
            "https://public.joomeo.com/albums/64e5e6e934804/files/MUY5NjQxOTIl_EIg5tJAlFVsNeZj6zZv",
            "https://public.joomeo.com/albums/64e5e6e934804/files/MUY5NjQxOTJlOkGvjAc6eN66kpOwoVJ3",
            "https://public.joomeo.com/albums/64e5e6e934804/files/MUY5NjQxOTJlOkGvjAc6eEe6_Rc61OMs",
            "https://public.joomeo.com/albums/64e5e6e934804/files/MUY5NjQxOTJlOkGvjAc6eDUDGB3fYr6t"]

        ,
        techno: [ 'html','css','javascript'] ,
    },
    {
        id: 5,
        title: "Project Backend",
        text: "As part of my training, building upon a basic front-end, I developed a REST API using Node.js to manage a grading book system and implemented image optimization during the import process.",
        button: 2,
        img: "",
        techno: ['javascript','NodeJs','Mongoose'] ,
    },
    {
        id: 6,
        title: "Project Bookie",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
        img: "",
        techno: [ 'html','css'] ,
    },
    {
        id: 7,
        title: "Project optimisation",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
        img: "",
        techno:[ 'html','css','javascript'],

    },
]

function Modal({id, closeModal}: modalProps) {

    const theProject: theProjectype = modalProjects.find(projetc => projetc.id === id);

    if (!theProject) {
        return null;
    }
const TechnoProjet = theProject.techno.map((techno)=> <p>{techno}</p>)

    const theProjectImg: string[] | string = theProject.img;

    console.log("modal projet :", theProject)
    return (
        <>

            <div className="box" id={id + "modal"}>
                <p onClick={closeModal}>X{id}</p>
                <div className="carrouselProjct">
                    <span>{carrouselIcon}</span>
                    <img src={theProjectImg[0]} alt=""/> <span>{carrouselIcon}</span></div>
                <div>{TechnoProjet}</div>

            </div>
            <div onClick={closeModal}
                 className='modal'>
            </div>
        </>
    );
}

export default Modal;