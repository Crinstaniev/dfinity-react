import logo from "./logo.svg";
import sciecon from "./sciecon_blue.png";
import alpha from "./alpha.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={alpha} alt="sciecon" className="Sci-logo" />
        <p>
          Hello From <code>Johnathan Zhuang</code> & <code>SciEcon</code>!
        </p>
        <a
          className="App-link"
          href="https://github.com/crinstaniev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub!
        </a>
      </header>
    </div>
  );
}

export default App;
