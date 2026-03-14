import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/home'
import Layout from './Layouts/Layout'
import AboutMe from './pages/aboutMe'
import Contact from './pages/contact'

function Landing() {

    const navigate = useNavigate();

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        navigate(`/${id}`, { replace: true });
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <Layout>
            <ComponentsFactory />
        </Layout>
    );
}

function ComponentsFactory({ isMobile = false }: { isMobile?: boolean }) {
    return (
        <>
            <Home isMobile={isMobile} />
            <AboutMe isMobile={isMobile} />
            <Contact isMobile={isMobile} />
        </>
    );
}

export default Landing;