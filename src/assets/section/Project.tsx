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
        text: "I built the Betclim company website from A to Z, from design to deployment, using Figma, Photoshop, and NextJS with Typescript for building the app",
        description: 'During my training, I had the opportunity to be paid by the companies Betclim and Upgrade Formation, where I split my time between training and working in the company. During this year, I was able to create a website for Betclim. I initially built a first version using WordPress to quickly establish an online presence. Later on, I developed a second version using NextJS, Sass, TypeScript, and NodeJS (TS). To create this second version, I started by using Figma and Photoshop for basic designs and mockups. Once I had gathered enough design elements, I transitioned directly to programming.This experience allowed me to learn about the Next.js environment, deployment on Vercel, and to enhance my skills in TypeScript and React in general.',
        button: 1,
        url: "https://betclim.fr/",
        technoProjet: ['Sass', 'NextJS', 'TypeScript']
    },
    {
        id: 2,
        title: "Project Kasa",
        text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.",
        description: 'As part of my OpenClassroom training, I developed a React application based on a prototype and a given JSON dataset. I built a multi-page web application for housing rentals using React, where I learned various hooks, mastered state management, and gained proficiency in manipulating arrays and lists.',

        button: 2,
        url: "https://kaba-react-qhx6.vercel.app/",
        technoProjet: ['Sass', 'React']

    },
    {
        id: 3,
        title: "UpgradeFormation",
        text: "I built the Upgrade company website from A to Z, from design to deployment, using Figma, Photoshop, and Illustrator for design. JavaScript Vanilla, Html/CSS and PHP to build website",
        button: 1,
        description: 'During my training, I had the opportunity to work and receive compensation from Betclim and Upgrade Formation, dividing my time between training and hands-on work at the companies. Throughout the year, I created a website for Upgrade Formation. I began by branding the company, which initially lacked a distinct design, and then I designed a prototype using Figma and Photoshop. Subsequently, I integrated the website using HTML, CSS, JavaScript, and PHP.',
        technoProjet: ['Javascript', 'Html', 'Css', 'Php'],
        url: "https://upgradeformation.fr/"
    },
    {
        id: 4,
        title: "Project Sophie Bruel",
        text: "As part of my training, starting from a basic website, I had to create an interface and connect it to the existing API in order to integrate a page showcasing the architect's work.",
        button: 2,
        description: 'During my training, starting with a basic backend, API, and a prototype, I was tasked with developing the frontend while adhering to the Figma prototype. Firstly, I created a project presentation page and implemented a category filter for the projects in JavaScript, allowing them to be filtered with a click. Next, I coded the login page, initially integrating it based on the prototype and later working on authentication and redirection. Upon successful login, I incorporated certain visible elements to trigger a modal, which I also integrated. Once the modal was open, I implemented a dynamic JavaScript form for adding and modifying projects, interacting with the API based on the received response, and providing the ability to delete projects.',
        technoProjet: ['Javascript', 'Html', 'CSS'],

    },
    {
        id: 5,
        title: "Project Backend",
        text: "As part of my training, building upon a basic front-end, I developed a REST API using Node.js to manage a grading book system and implemented image optimization during the import process.",
        button: 2,
        description: 'For this project, my task was to develop the backend of a book rating website. I began by creating my Express server and then constructed my API (CRUD) with MongoDB. Once I established the routes and connected my Express application to the NoSQL database, I focused on authentication and encryption of private information. Finally, I handled user file management in the application, paying attention to optimizing the uploaded images, and implemented a book rating system based on overall user ratings.',
        technoProjet: ['NodeJS', 'Express', 'Mongoose'],
        url:'https://mon-vieux-grimoire.vercel.app',

    },

    {
        id: 6,
        title: "Project optimisation",
        text: "Conducted a thorough website audit for photographer Nina Carducci, optimizing performance and SEO. Addressed client requests by resolving technical issues. Implemented ongoing enhancements, including HTML restructuring and meta tag optimization, to improve overall online visibility.",
        button: 2,
        description: 'As part of my training, I conducted a comprehensive audit to enhance the performance and SEO of photographer Nina Carducci\'s website. Using web tools such as WAVE and Lighthouse, I optimized the site to eliminate loading delays and improve the speed of image display. Additionally, in response to the client\'s request, I addressed two minor technical issues affecting the proper functioning of the site. Finally, in an ongoing optimization effort, I worked on meta tags using schema.org and Open Graph tags to improve the photographer\'s SEO and visibility on the internet.',
        technoProjet: ['Sass', 'React'],

        url: 'https://doumzir.github.io/',
    },


]


const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState("All"); // Par défaut, "All" est sélectionné
    const [indexArray, setIndexArray] = useState(3);
    console.log(projects.length)
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
            description={project.description}
            url={project.url}
            projetTechno={project.technoProjet}
        >
            {project.text}
        </Card>))
    console.log(projectDisplay)
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    return (
        <section id="Project">
            <TextType presentation={false} Title={"Look at this 👀"}>Some of my recent projects professionals and
                personals/casual</TextType>
            <p className="chooseCategory">Choose your category {icon}</p>
            <Filter stateCategory={handleCategoryChange} selectedCategory={selectedCategory}/>
            <div className="projectContainer">
                {projectDisplay.length <= 3 ? projectDisplay.slice(0, 3) : projectDisplay.slice((indexArray - 3), indexArray)}
            </div>
            <p className={projectDisplay.length > 3 ? "carrousel" : "noneCarrousel"}>
                <span
                    onClick={() => indexArray - 3 > 0 ? setIndexArray(indexArray - 3) : setIndexArray(projectDisplay.length + (3 - (projectDisplay.length % 3)))}>{carrouselIcon}</span>
                {Math.floor(indexArray / 3)}/{Math.floor((projectDisplay.length +2) / 3)}
                <span
                    onClick={() => indexArray < projectDisplay.length ? setIndexArray(indexArray + 3) : setIndexArray(3)}>{carrouselIcon}</span>
            </p>
        </section>
    );
}

export default Project;