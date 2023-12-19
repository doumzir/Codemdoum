import { PropsWithChildren } from 'react';
import "../style/card.scss";
import ButtonType from "./Button";



type CardProps = PropsWithChildren<{
    title:string;
    Button:number;
    id:number;
    url: string | undefined;
    description: string,
    projetTechno:string[],
    arraySolving: { Problem:string, Solution:string }[],


}>;
const Card = ({title, children, url, Button, id, description, projetTechno, arraySolving} : CardProps) => {
    return (
        <div id={id+"div"} className={Button == 1 ? "card perso" : "card pro"}>

            <h2>{title}</h2>
            <div className="type" >
                <svg id="Calque_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.53 22.28" fill={Button == 1 ? "#1C557B" : "#116B59"}>

                    <g id="Calque_2-2">
                        <g id="Layer_2">
                            <polygon className="cls-1" points="19.53 2.75 0 22.28 0 0 19.53 2.75"/>
                        </g>
                    </g>
                </svg>
            <p style={Button == 1? {backgroundColor:"#3498DB"}:{backgroundColor:"#1ABC9C"}} >{Button == 1?  "Professional" : "Personal"}</p>

            </div>
            <p className="projetDescription">{children}</p>
            <ButtonType title={title} text={Button} id={id} url={url} projectTechno={projetTechno} description={description} arraySolving={arraySolving}/>



        </div>
    );
};

export default Card;

