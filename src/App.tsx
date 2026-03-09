import Home from './pages/home'
import Layout from './Layouts/Layout'
import AboutMe from './pages/aboutMe'
import Contact from './pages/contact'

function App() {

  return (
    <Layout>
      <ComponentsFactory />
    </Layout>
  )
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

export default App
