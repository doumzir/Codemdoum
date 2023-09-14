import {PropsWithChildren} from 'react';
import '../style/textType.scss'
type PropsTextType = PropsWithChildren<{
    Title : string;
    presentation : boolean;
}>
const TextType = ({Title, children, presentation} : PropsTextType ) => {
    return (
        <div className="textType">
            {presentation ? <h1>{Title}</h1> : <h2>{Title}</h2>}
            <p>{children}</p>
        </div>
    );
};

export default TextType;