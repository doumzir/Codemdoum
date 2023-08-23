import TextType from "../component/TextType";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowTurnDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import Card from "../component/Card";
import Filter from "../component/Filter";
import "../style/Project.scss"

const icon = <FontAwesomeIcon icon={faArrowTurnDown}/>
const carrouselIcon = <FontAwesomeIcon icon={faChevronRight}/>

const projects = [
    {
        id: 1,
        title: "Betclim",
        text: "I built the Betclim company website from A to Z, from design to deployment, using Figma, Photoshop, and WordPress. I utilized JavaScript to add dynamism to the pages.",
        button: 1,
        url: "https://betclim.fr/"
    },
    {
        id: 2,
        title: "Project Kasa",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
    },
    {
        id: 3,
        title: "Upgrade",
        text: "I built the Upgrade company website from A to Z, from design to deployment, using Figma, Photoshop, and Illustrator for design. JavaScript Vanilla, Html/CSS and PHP to build website",
        button: 1,
        url: "https://betclim.fr/"
    },
    {
        id: 4,
        title: "Project Sophie Bruel",
        text: "As part of my training, starting from a basic website, I had to create an interface and connect it to the existing API in order to integrate a page showcasing the architect's work.",
        button: 2,
    },
    {
        id: 5,
        title: "Project Backend",
        text: "As part of my training, building upon a basic front-end, I developed a REST API using Node.js to manage a grading book system and implemented image optimization during the import process.",
        button: 2,
    },
    {
        id: 6,
        title: "Project Bookie",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
    },
    {
        id: 7,
        title: "Project optimisation",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        button: 2,
    },


]


const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState("All"); // Par défaut, "All" est sélectionné
    const [indexArray, setIndexArray] = useState(4);
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project =>
            selectedCategory === "Perso" && project.button === 2 ||
            selectedCategory === "Pro" && project.button === 1
        );

    const projectDisplay = filteredProjects.map(project => (
        <Card
            key={project.id}
            id={project.id}
            title={project.title}
            Button={project.button}
            url={project.url}
        >
            {project.text}
        </Card>))
console.log(projectDisplay)
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    return (
        <div id="Project">
            <TextType Title={"Look at this 👀"}>Some of my recent projects professionals and personals/casual</TextType>
            <p className="chooseCategory">Choose your category {icon}</p>
            <Filter stateCategory={handleCategoryChange} selectedCategory={selectedCategory}/>
            <div className="projectContainer">
                {projectDisplay.length < 4 ? projectDisplay.slice(0, 4) : projectDisplay.slice((indexArray - 4), indexArray)}
            </div>
            <p className={projectDisplay.length > 4 ? "carrousel" : "noneCarrousel"}><span
                onClick={() => indexArray - 4 > 0 ? setIndexArray(indexArray - 4) : setIndexArray(projectDisplay.length + (4 - (projectDisplay.length % 4)))}>{carrouselIcon}</span>{Math.floor(indexArray / 4)}/{Math.floor((projectDisplay.length + 4) / 4)}<span
                onClick={() => indexArray < projectDisplay.length ? setIndexArray(indexArray + 4) : setIndexArray(4)}>{carrouselIcon}</span>
            </p>
        </div>
    );
}

export default Project;