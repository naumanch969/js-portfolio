import { About, Footer, Header, Skills, Testimonials, Work, Contact } from "./containers"
import { Navbar } from "./components"

const App = () => {
  return (
    <div className='bg-primary-color ' >
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// npm rebuild node-sass