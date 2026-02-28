import profile from '../assets/Profile-Icon.png'
import Button from '../components/button'
import Label from "../components/label"

interface props {
    isMobile?: boolean
}

function Home({ isMobile }: props) {

    if (!isMobile) {
        return (
            <div>
                <div className="grid grid-cols-2 h-170">
                    <div className="flex items-center p-4">
                        <div className="px-20">
                            <span>
                                Olá meu nome é João e sou <Label>Desenvolvedor de sistemas</Label>
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
                        <img src={profile} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="p-10">
            <div>
                <div className="text-center items-center flex flex-col space-y-0.5">
                    <span className="w-full">Olá meu nome é João e sou</span>
                    <Label>Desenvolvedor de sistemas Fullstack</Label>
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
        </div>
    )
}

export default Home