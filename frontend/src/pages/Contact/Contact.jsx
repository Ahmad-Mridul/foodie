import Cover from "../../components/shared/Cover";
import coverBg from "../../assets/contact/banner.jpg";
import SectionHeading from "./../../components/shared/SectionHeading";
import { Helmet } from "react-helmet";
import Address from "../../components/Contact/Address";
import ContactForm from "../../components/Contact/ContactForm";
import "./Contact.css"
const Contact = () => {
    return (
        <div className="space-y-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FOODIE | CONTACT US</title>
            </Helmet>
            <Cover
                bg={coverBg}
                title="CONTACT"
                desc="WOULD YOU LIKE TO TRY A DISH?"
            />
            <Address/>
            <ContactForm/>
        </div>
    );
};

export default Contact;
