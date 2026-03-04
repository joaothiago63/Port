
interface props {
    isMobile?: boolean
}

function AboutMe({ isMobile }: props) {
    if (!isMobile)
        return (
            <section id="about" className="space-y-20 px-20 pb-20 pt-60 flex flex-col h-screen">
                <label className="text-5xl font-bold">Sobre mim</label>
                <span className="w-300">Desenvolvo sistemas web completos para empresas que precisam de tecnologia confiável
                    e bem estruturada.
                    <br />
                    Trabalho com .NET e Java no backend e React e Angular no frontend, criando soluções personalizadas
                    que ajudam negócios a automatizar processos, organizar informações e crescer com mais eficiência.
                    <br />
                    Meu compromisso é entregar projetos com qualidade técnica, clareza na comunicação
                    e foco em resultado.
                    Vamos transformar sua ideia em uma solução profissional.</span>
            </section>
        )

    return (
        <section id="about" className="space-y-20 p-10 flex flex-col h-screen">
            <label className="text-5xl font-bold">Sobre mim</label>
            <span>Desenvolvo sistemas web completos para empresas que precisam de tecnologia confiável
                e bem estruturada.
                <br />
                Trabalho com .NET e Java no backend e React e Angular no frontend, criando soluções personalizadas
                que ajudam negócios a automatizar processos, organizar informações e crescer com mais eficiência.
                <br />
                Meu compromisso é entregar projetos com qualidade técnica, clareza na comunicação
                e foco em resultado.
                Vamos transformar sua ideia em uma solução profissional.</span>
        </section>
    )
}

export default AboutMe