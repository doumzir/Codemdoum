
type PropsMyformation={
    img: string,
    title:string,
    name:string,
    content:string,

}
function MyFormation({img, title, name, content}:PropsMyformation) {
    return (
        <div className="formation" >
            <img src={img} alt={`Fomartion for being ${title} with ${name}`}/>
            <h4>{title}</h4>
            <h5>{name}</h5>
            <p>{content}</p>
        </div>
    );
}

export default MyFormation;