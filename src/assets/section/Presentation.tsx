import TextType from "../component/TextType";
import LinkSocialMedia from "../component/LinkSocialMedia";
import '../style/Presentation.scss';
import builApplication from '../image/cooking website.svg'

import ButtonType from "../component/Button";
const Presentation = () => {
    return (
        <section id="Presentation">
            <div id="whoIm">
<TextType Title="Hi all, I'm Yanis 🤗" presentation={true}> A dedicated front-end web developer 👨🏽‍💻specializing in crafting captivating websites and applications using JavaScript, with a primary focus on ReactJS and Node.js. Alongside these core technologies, I am well-versed in various other libraries and frameworks</TextType>
       <LinkSocialMedia map={4}  />
                <ButtonType text={3} id={NaN} url={undefined} />
            </div>
            <img  width="560px" src={builApplication} alt="A picture of me"/>
        </section>
    );
};

export default Presentation;