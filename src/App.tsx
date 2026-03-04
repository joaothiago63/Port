import Home from './pages/home'
import Layout from './Layouts/Layout'
import AboutMe from './pages/aboutMe'

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
    </>
  );
}

export default App
