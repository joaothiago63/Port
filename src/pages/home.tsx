import profile from '../assets/Profile-Icon.png'
import Button from '../components/button'
import Label from "../components/label"

function Home() {
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

export default Home