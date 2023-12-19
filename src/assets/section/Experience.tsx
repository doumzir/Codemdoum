import TextType from "../component/TextType";
import betclimLogo from "../image/icon/logPLants/Betclim.svg"
import upgradeLogo from "../image/icon/logPLants/logo upgrade.svg"
import dualLogo from "../image/icon/logPLants/dualpublogowhite.svg"
import ExperienceCard from "../component/ExperienceCard";
import "../style/experience.scss";
const Experience = () => {
    const professions =  [
        {Plants: "Betclim",
            job:"Web developer Full Stack",
            years:[2022, 2023],
            text: "I branded and developed a complete React web application for Betclim, a company specializing in home energy. I initially created a simplified version using WordPress and then a more advanced one using NextJS with TypeScript to showcase its services.",
            task : ["NextJs","TypeScript","Sass","Photoshop / Illustrator","Wordpress"],
            logo: betclimLogo,
            color: "#3396D8"
        },
        {Plants: "Upgrade Formation",
            job:"Web developer Front End",
            years:[2022, 2023],
            text: "I branding a design and a complete website for Upgrade Formation, a company specialized in training for home energy.",
            task : ["Javascript","Html","CSS","PHP", "Photoshop / Illustrator"],
            logo: upgradeLogo,
            color: "#139798",
        },
        {Plants: "DualPub",

            job:"Web developer Web designer",
            years:[2019, 2020],
            text: "I have created some WordPress sites and restructured HTML and CSS websites. I have also designed a variety of designs and presentation videos, among other things. I have worked for many different companies, with the most common one being So'driveBurger.",
            task : ["Wordpress","HTML - CSS","Photoshop / AfterEffect / Illustrator"],
            logo: dualLogo,
            color: "#009DD9"
        }
    ]
    const ProfessionList = professions.map(profession => (<ExperienceCard plants={profession.Plants} key={professions.indexOf(profession)} logo={profession.logo} tasks={profession.task} job={profession.job} nbrYears={profession.years} color={profession.color}>{profession.text}</ExperienceCard>))
    return (
        <section id="Experience">
            <TextType presentation={false} Title="Where I cooked ? 💼">My experiences in differents companies</TextType>
           <div className="allProfession">{ProfessionList}</div>
        </section>
    );
};

export default Experience;