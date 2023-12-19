import  {PropsWithChildren} from 'react';
import '../style/experienceCard.scss'
type PropsCardExp = PropsWithChildren<{
    plants:string,
    job:string,
    nbrYears: number[],
    tasks: string[],
    logo: string,
    color:string
}>
function ExperienceCard({plants, job, nbrYears, children, tasks, logo, color} : PropsCardExp) {
    const taskList = tasks.map((task) => <li key={tasks.indexOf(task)}>{task}</li>)
    return (<>

        <div className="experienceCard" style={{background:`linear-gradient(180deg, ${color} 0% , ${color}33 25% , ${color}00 100%)`}}>
            <h3>{plants}</h3>
            <img src={logo}  height="100px"/>
            <h4>{job}</h4>
            <div className="yearsExp"><p>{nbrYears[0]}</p>-<p>{nbrYears[1]}</p></div>
            <p>{children}</p>
            <ul>{taskList}</ul>

 </div>
            <hr/>
        </>
    );
}

export default ExperienceCard;