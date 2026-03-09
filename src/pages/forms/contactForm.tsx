import Input from "../../components/input";
import TextArea from "../../components/textArea";

interface props {

}

function ContactForm() {
    return (
        <div className="space-y-4 font-light">
            <Input label="Nome" />
            <Input label="Email" />
            <Input label="Subject" />
            <TextArea label="Mensagem" />
        </div>
    );
}

export default ContactForm;