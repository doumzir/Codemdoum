import TextType from "../component/TextType";
import LogoAmigraf from "../image/formation/amigraf.svg"
import LogoOC from "../image/formation/Logo_OpenClassrooms.png"
import MyFormation from "../component/MyFormation";
import '../style/allFormation.scss'
const Formation = () => {
    type PropArrayFormation = { id:number; img:string; name:string; title:string; content:string }[]
    const Formations:PropArrayFormation = [
        {
            id :1,
            img: LogoOC,
            title:'Developer Web',
            name:'Open CLassroom',
            content:'I learned how to build a website from scratch, covering everything from project planning to presenting technical specifications. I have built multiple websites using HTML, CSS, JS, React.js with REST API connections, and a Node.js backend using mongoose NoSQL database'


        },
        {
            id :2,
            img:LogoAmigraf,
            title:'Designer Web',
            name:'Amigraf',
            content:'I have learned how to use Photoshop, Figma, and Illustrator, and I have utilized them extensively for designing websites, flyers, and advertising brochures. I have also begun using HTML/CSS and have completed multiple projects in WordPress.'

        }
    ]
    const Myproject = Formations.map((formation)=> <MyFormation key={formation.id}  img={formation.img} name={formation.name} title={formation.title} content={formation.content} />)
    return (
        <section id="Education">
            <TextType presentation={false} Title="It's getting hot ! 👨‍🎓">Allow me to present my educational journey,
                including my degrees and training.</TextType>
<div className="allformation">
            {Myproject}
</div>
        </section>
    );
};

export default Formation;