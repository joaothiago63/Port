import Button from "../components/button";
import ContactForm from "./forms/contactForm";


function Contact({ isMobile = false }: { isMobile?: boolean }) {
    return (
        <section id="contact" className="h-screen">
            <div className="grid grid-cols-2">
                <div className="flex flex-col text-center">
                    <div className="flex justify-center">
                        <div className="flex flex-col space-y-5">
                            <label className="font-bold text-6xl">Vamos conectar</label>
                            <span className="text-start px-2">para mais informações! siga me nas redes sociais</span>
                        </div>
                    </div>
                </div>
                <form className="flex justify-end">
                    <div className="w-150 space-y-5 ">
                        <ContactForm />
                        <Button>Enviar</Button>
                    </div>
                </form>
            </div>
        </section>
    );
}



export default Contact;