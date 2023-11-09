import TextType from "../component/TextType";
import '../style/contact.scss'

import {FormEventHandler, useRef, useState} from 'react';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import me from '../image/me.jpg'
import LinkSocialMedia from "../component/LinkSocialMedia";
import byeBYe from '../image/byeBye.svg'

const Contact = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [object, setObject] = useState('')
    const [message, setMessage] = useState('')
    const [FormEnd, setFormEnd] = useState(false)

    const form:any= useRef();
console.log(form)

    const sendEmail: FormEventHandler<HTMLFormElement> = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_6530sca', 'template_blitepu', form.current, '70cbnkcrhynLsAZd6')
            .then((result: EmailJSResponseStatus) => {
                if (result.status == 200) {
                    setFormEnd(true)

                    console.log(typeof (result), result)
                } else {
                    alert("Oops! Something went wrong. Please try to join me next time or contact me directly at demdoum.yanis@hotmail.com");
                    console.log(result.text);
                }

            }, (error: EmailJSResponseStatus) => {
                alert("Oops! Something went wrong. Please try to join me next time or contact me directly at demdoum.yanis@hotmail.com");
                console.log(error.text);
            });
    };


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
                {FormEnd ? <div id={'SendGood'}  > <div style={{cursor:'pointer'}}  onClick={()=>setFormEnd(false)}><svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.22578 19.9112C0.12875 18.7745 0.12875 16.9285 1.22578 15.7918L15.2677 1.2417C16.3647 0.104979 18.1463 0.104979 19.2433 1.2417C20.3404 2.37842 20.3404 4.22446 19.2433 5.36118L9.98444 14.946H36.9099C38.4633 14.946 39.7183 16.2464 39.7183 17.856C39.7183 19.4656 38.4633 20.7661 36.9099 20.7661H9.99322L19.2346 30.3509C20.3316 31.4876 20.3316 33.3337 19.2346 34.4704C18.1375 35.6071 16.356 35.6071 15.2589 34.4704L1.217 19.9203L1.22578 19.9112Z" fill="white"/>
                    </svg>
                    </div>


                <h3>Thank You</h3>
                    <hr/>
                    <p>I've received your message and will get back to you shortly.</p>
                   <button id={"buttonReturnForm"} onClick={()=>setFormEnd(false)}><p>Send another message</p> <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M2.32788 2.86876C2.01888 1.91214 2.54371 0.887132 3.50069 0.578246C4.45767 0.269359 5.48307 0.793997 5.79207 1.75062L7.8642 8.16562C8.12601 7.71785 8.54668 7.36219 9.0793 7.19028C9.97133 6.90235 10.9152 7.21908 11.4641 7.91185C11.7152 7.38629 12.1696 6.95759 12.7672 6.76471C13.8627 6.4111 15.0318 6.96586 15.4608 8.0128C15.7212 7.56069 16.1462 7.20364 16.6788 7.03173C17.8263 6.66134 19.0579 7.29149 19.4285 8.43858L20.0996 10.5163L20.3233 11.2089L20.9945 13.2866C21.983 16.3469 20.3029 19.6281 17.2414 20.6163L16.5486 20.8399L13.7773 21.7344L13.7729 21.7358L13.5478 21.8085C13.3312 21.8784 13.1149 21.9339 12.8972 21.9707C10.4243 22.5012 7.82313 21.9833 5.73032 20.5078L1.27027 17.3587C0.446869 16.7784 0.253207 15.6459 0.833698 14.8228C1.41419 13.9997 2.54708 13.8061 3.37049 14.3864L6.83988 16.8372L2.32788 2.86876ZM10.869 12.7309C10.746 12.35 10.3335 12.139 9.95245 12.2619C9.57139 12.3849 9.36028 12.7972 9.48332 13.1782L10.8256 17.3336C10.9486 17.7145 11.3611 17.9256 11.7421 17.8026C12.1232 17.6796 12.3343 17.2673 12.2113 16.8864L10.869 12.7309ZM12.7238 11.3674C12.3427 11.4904 12.1316 11.9027 12.2547 12.2836L13.5969 16.4391C13.72 16.82 14.1324 17.0311 14.5135 16.9081C14.8946 16.7851 15.1057 16.3728 14.9826 15.9919L13.6403 11.8364C13.5173 11.4555 13.1049 11.2444 12.7238 11.3674ZM16.4117 10.9419C16.2887 10.561 15.8762 10.3499 15.4951 10.4729C15.1141 10.5959 14.903 11.0082 15.026 11.3891L16.3683 15.5446C16.4913 15.9255 16.9038 16.1365 17.2848 16.0135C17.6659 15.8906 17.877 15.4783 17.754 15.0973L16.4117 10.9419Z" fill="white"/>
                   </svg>
                   </button>
                    </div> :
                    <form  ref={form} onSubmit={sendEmail}>
                        <h2>Contact me</h2>
                        <div className='elementForm'>
                            <label htmlFor="name">Name or Company</label>
                            <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)}
                                   value={name} required/>
                        </div>
                        <hr/>
                        <div className='elementForm'>

                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="email"
                                   onChange={(event) => setMail(event.target.value)}
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
                        <div className="boxCheckBox"><input type="checkbox" name="checkbox" id="checkbox"
                                                            required/><label
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
                }
            </div>
        </section>
    );
};

export default Contact;