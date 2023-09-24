import LinkSocialMedia from "../component/LinkSocialMedia";
import '../style/footer.scss'
function Footer() {
    return (
        <footer>
            <p><svg width="16" height="16" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_116_651)">
                    <path d="M10.1109 23.4C12.5156 20.3906 18 13.0969 18 9C18 4.03125 13.9688 0 9 0C4.03125 0 0 4.03125 0 9C0 13.0969 5.48438 20.3906 7.88906 23.4C8.46562 24.1172 9.53438 24.1172 10.1109 23.4ZM9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_116_651">
                        <rect width="18" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>&nbsp;
                 Lille, France <br/>Open for oportunities : Yes</p>

            <LinkSocialMedia map={4}/>
            <p>⚡ Made on 💻  with ❤️ ( and some 🧠 ) by Codemdoum ⚡</p>
        </footer>
    );
}

export default Footer;