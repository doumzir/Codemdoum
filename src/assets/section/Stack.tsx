import TextType from "../component/TextType";
import "../style/Stack.scss"
import iconJavascript from "../image/icon/JS icon.svg"
import reactIcon from "../image/icon/React-icon.svg"
import scssIcon  from "../image/icon/Sass_Logo_Color.svg"
import nodeJSIcon from '../image/icon/Node.js_logo.svg'
import mongooseIcon from "../image/icon/MongoDB-Logo.svg"
import packageManger from "../image/icon/Packagemanager.svg"

const myStack = [
    {
        id:1,
        stackName: "JavaScript",
        icon: iconJavascript,
    },
    {
        id:2,
        stackName: "React.js",
        icon: reactIcon,
    },
    {
        id:3,
        stackName: "Scss",
        icon: scssIcon,
    },
    {
        id:4,
        stackName: "NodeJs",
        icon: nodeJSIcon,
    },
    {
        id:5,
        stackName: "With mongoose",
        icon: mongooseIcon,
    },
    {
        id:6,
        stackName: "Package manager",
        icon: packageManger,
    }
]

const Stack = () => {
    const listStack = myStack.map(stack => (<li  key={stack.id} ><img height="92px" src={stack.icon} alt={stack.stackName}/>{stack.stackName}</li>))
    return (
        <section id="Skills">
            <TextType presentation={false} Title="What’s stack ? 🧐">Curious Front end developer, i want to explore every JS stack </TextType>
        <ul>{listStack}</ul>
        </section>
    );
};

export default Stack;