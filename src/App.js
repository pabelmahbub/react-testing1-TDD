import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {
  const x = 10
  const y = 20
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>Apple1</li>
          <li>Apple2</li>
          <li>Apple3</li>
        </ul>

        <h3 data-testid="custom-element">Hello custom H4</h3>
        <span title='sum'>{x + y}</span>
      </header>
    </div>
  );
}

export default App;
