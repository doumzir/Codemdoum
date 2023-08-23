import {PropsWithChildren} from 'react';

type PropsTextType = PropsWithChildren<{
    Title : string;
}>
const TextType = ({Title, children} : PropsTextType ) => {
    return (
        <div>
            <h2>{Title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default TextType;