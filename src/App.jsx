import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
