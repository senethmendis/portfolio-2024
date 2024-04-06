import { About, Contact, Footer, Hero, Navbar, Projects } from "./components";

function App() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
