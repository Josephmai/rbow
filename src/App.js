import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RBOW GROUP
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with React and AWS
        </a>
      </header>
    </div>
  );
}

export default App;
