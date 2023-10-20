import "./App.css";
import SoundCloudCard from "./SoundCloudCard";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import TypingComponent from "./TypingComponent";

function App() {
  return (
    <>
      <Header />
      <TypingComponent />
      <SoundCloudCard />
      <AboutMe />
      <Testimonials />
      <Projects />
    </>
  );
}

export default App;
