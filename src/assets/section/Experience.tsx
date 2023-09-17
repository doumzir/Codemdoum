import TextType from "../component/TextType";
import betclimLogo from "../image/icon/logPLants/Betclim.svg"
import upgradeLogo from "../image/icon/logPLants/logo upgrade.svg"
import sodriveLogo from "../image/icon/logPLants/Logo So drive.svg"
import ExperienceCard from "../component/ExperienceCard";
import "../style/experience.scss";
const Experience = () => {
    const profession =  [
        {Plants: "Betclim",
            job:"Web developer Full Stack",
            years:[2022, 2023],
            text: "I create web application for Betclim who wants to develop a website that allows users to find accommodation and activities in the city of their choice.\n" +
                "I create a travel agency homepage for a fictive company who wants to  ",
            task : ["Website","Flyer","Community management"],
            logo: betclimLogo,
            color: "#3396D8"
        },
        {Plants: "Upgrade",
            job:"Web developer Front End",
            years:[2022, 2023],
            text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.\n" +
                "I create a travel agency homepage for a fictive company who wants to  ",
            task : ["Website","Flyer","Community management"],
            logo: upgradeLogo,
            color: "#139798",
        },
        {Plants: "So'drive Burger",

            job:"Web developer Web designer",
            years:[2019, 2020],
            text: "I create a travel agency homepage for a fictive company who wants to develop a website that allows users to find accommodation and activities in the city of their choice.\n" +
                "I create a travel agency homepage for a fictive company who wants to  ",
            task : ["Website","Flyer","Community management"],
            logo: sodriveLogo,
            color: "#FCF700"
        }
    ]
    const ProfessionList = profession.map(profession => (<ExperienceCard plants={profession.Plants} key={profession.years[0]} logo={profession.logo} task={profession.task} job={profession.job} nbrYears={profession.years} color={profession.color}>{profession.text}</ExperienceCard>))
    return (
        <section id="Experience">
            <TextType presentation={false} Title="Where I cooked ? 💼">My experiences in differents companies</TextType>
           <div className="allProfession">{ProfessionList}</div>
        </section>
    );
};

export default Experience;