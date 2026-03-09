import Button from "../components/button";
import ContactForm from "./forms/contactForm";
import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/likedin.png"
import Github from "../assets/github.png"


function Contact({ isMobile = false }: { isMobile?: boolean }) {
    if (!isMobile) {
        return (
            <section id="contact" className="h-screen">
                <div className="grid grid-cols-2">
                    <div className="flex justify-center">
                        <div className="w-fit flex flex-col space-y-2">
                            <label className="font-bold text-7xl">Vamos conectar</label>
                            <div>
                                <span>para mais informações! siga me nas redes sociais</span>
                            </div>
                            <div className="flex gap-10 mt-12">
                                <a className="cursor-pointer" href="https://www.instagram.com/joao.thiagodomingues.9">
                                    <img src={Instagram} />
                                </a>
                                <a className="cursor-pointer" href="https://github.com/joaothiago63">
                                    <img src={Github} />
                                </a>
                                <a className="cursor-pointer" href="https://www.linkedin.com/in/joao-thiago-d-roberto/">
                                    <img src={Linkedin} />
                                </a>
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

    return (
        <section id="contact" className="h-screen py-20">
            <div className="w-full text-center flex flex-col space-y-3">
                <label className="text-4xl font-bold-">Vamos conectar</label>
                <span className="text-xs">para mais informações! siga me nas redes sociais</span>
                <div className="flex justify-center gap-10 mt-3">
                    <a className="cursor-pointer" href="https://www.instagram.com/joao.thiagodomingues.9">
                        <img src={Instagram} />
                    </a>
                    <a className="cursor-pointer" href="https://github.com/joaothiago63">
                        <img src={Github} />
                    </a>
                    <a className="cursor-pointer" href="https://www.linkedin.com/in/joao-thiago-d-roberto/">
                        <img src={Linkedin} />
                    </a>
                </div>
                <form className="p-5 space-y-5">
                    <ContactForm />
                    <Button className="w-full">Enviar</Button>
                </form>
            </div>
        </section>
    );
}


export default Contact;