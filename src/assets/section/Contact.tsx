import TextType from "../component/TextType";
import '../style/contact.scss'
import {useState} from "react";
import me from '../image/me.jpg'
import LinkSocialMedia from "../component/LinkSocialMedia";
import byeBYe from '../image/byeBye.svg'

const Contact = () => {

    const mailSvg = <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24.779 50.4441C38.4175 50.4441 49.4737 39.3655 49.4737 25.6993C49.4737 12.0332 38.4175 0.95459 24.779 0.95459C11.1404 0.95459 0.0842285 12.0332 0.0842285 25.6993C0.0842285 39.3655 11.1404 50.4441 24.779 50.4441Z"
            fill="#9B59B6"/>
        <path
            d="M24.779 28.9469L39.5187 16.3038C39.2871 16.1492 38.9785 16.0332 38.6698 16.0332H10.8882C10.5795 16.0332 10.2708 16.1492 10.0393 16.3038L24.779 28.9469Z"
            fill="white"/>
        <path
            d="M25.7822 30.1067C25.2034 30.6094 24.3545 30.6094 23.7757 30.1067L9.34473 17.773V33.8185C9.34473 34.6691 10.0393 35.365 10.8881 35.365H38.6697C39.5186 35.365 40.2132 34.6691 40.2132 33.8185V17.7344L25.7822 30.1067Z"
            fill="white"/>
    </svg>

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [object, setObject] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log('nice')
        console.log(name)
        event.preventDefault()

    }

    return (
        <section id="Contact">
            <TextType Title="Don’t be shy ! ✉️" presentation={false}>Don't hesitate to reach out! I'm as friendly as
                code can be – with a few bugs, but always here to provide a byte of assistance.</TextType>
            <div id="Contactform">

                    <div id="MeContact">
                    <img src={me} height={300} width={300} alt="picture of me"/>
                    <LinkSocialMedia map={2}/>
                    </div>
                    <div id={"GoodByeContact"}>
                    <img src={byeBYe} height={320} width={320} alt="Bye bye"/>
                        <p>SEE YOU SOON 👋</p>
                    </div>

                <form onSubmit={handleSubmit}>
                    <h2>Contact me</h2>
                    <div className='elementForm'>
                        <label htmlFor="name">Name or Company</label>
                        <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}
                               value={name} required/>
                    </div>
                    <hr/>
                    <div className='elementForm'>

                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="email" onChange={(event) => setMail(event.target.value)}
                               value={mail} required/></div>
                    <hr/>
                    <div className='elementForm'>

                        <label htmlFor="subject">Interested for ?</label>
                        <input type="text" name="subject" id="subject"
                               onChange={(event) => setObject(event.target.value)} value={object} required/></div>
                    <hr/>
                    <div className='elementForm'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={15}
                                  onChange={(event) => setMessage(event.target.value)} value={message} required/>
                    </div>
                    <hr/>
                    <div className="boxCheckBox"><input type="checkbox" name="checkbox" id="checkbox" required/><label
                        htmlFor="checkbox">I consent to the use of my data for the purpose of contacting me</label>
                    </div>

                    <div id="SendForm"><label htmlFor="button">Send</label>
                        <button type="submit" id="button" name="button" style={{
                            display: 'flex',
                            width: 'fit-content',
                            height: 'fit-content',
                            backgroundColor: 'white'
                        }}>{mailSvg}</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;