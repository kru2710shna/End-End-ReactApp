import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const ToggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Set background to white for light mode
      alerting("Light Mode has been enabled", "Success!")
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#333'; // Set background to dark grey for dark mode
      alerting("Dark Mode has been enabled", "Success!")
    }
  };

  const [alert, setalert] = useState(null)

  const alerting = (message, type) => {

    setalert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes> {/* Use Routes instead of Switch */}
            <Route exact path="/about" element={<About />} /> {/* Use element prop for components */}
            <Route exact path="/" element={<TextForm alerting={alerting} heading="Enter text here" mode={mode} />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
