

const Icon:Array<string> = []
import {Link}
const LinkSocialMedia = ({Icon}) => {
    return (
        <div>
<a>{Icon[0]}</a>
            <a>{Icon[1]}</a>
            <a>{Icon[2]}</a>
            <a>{Icon[3]}</a>
        </div>
    );
};

export default LinkSocialMedia;