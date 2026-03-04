import profile from '../assets/Profile-Icon.png'
import Button from '../components/button'
import Label from "../components/label"

interface props {
    isMobile?: boolean
}

function Home({ isMobile }: props) {

    if (!isMobile) {
        return (
            <section id="home" className="h-screen pt-15">
                <div className="grid grid-cols-2 h-170">
                    <div className="flex items-center p-4">
                        <div className="px-20 min-w-200">
                            <span>
                                Olá meu nome é João e sou
                                <span className="px-2"><Label>Desenvolvedor de sistemas fullstack</Label></span>
                                <br />
                                <br />
                                Especialista em criar aplicações robustas que unem
                                performance, arquitetura sólida e impacto real no negócio,
                                desenvolvendo soluções escaláveis e preparadas
                                para crescer junto com a empresa.
                            </span>
                            <div className="mt-15">
                                <Button>Download CV</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-4">
                        <img src={profile} className="w-150 min-w-150" />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="home" className="p-10">
            <div>
                <div className="text-center items-center flex flex-col space-y-0.5">
                    <span className="w-full">Olá meu nome é João e sou</span>
                    <div className="m-1">
                        <Label>Desenvolvedor de sistemas Fullstack</Label>
                    </div>
                    <div className='w-70 my-8'>
                        <img src={profile} />
                    </div>
                    <span className="text-start">
                        Especialista em criar aplicações robustas que unem
                        performance, arquitetura sólida e impacto real no negócio,
                        desenvolvendo soluções escaláveis e preparadas
                        para crescer junto com a empresa.
                    </span>
                    <div className="mt-15">
                        <Button>Download CV</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home