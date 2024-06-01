import { AboutMe } from './components/aboutMe';
import Main from './components/main';
import './App.scss';
import { Experience } from './components/experience';

function App() {
  return (
    <div className="main">
      <Main />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
