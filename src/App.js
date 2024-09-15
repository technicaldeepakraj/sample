import Card from "./components/Card";
import data from "./db/quotes";
import './index.css'

function App() {
  return (
    <>
    <header className="header">
      <a href="https://deepakrajtech.com" className="header-link">
      DEEPAKRAJTech
      </a>
      <p className="powered-by">Powered by DEEPAKRAJTech</p>
    </header>
      {data.map((val, index) => <Card key={index} text={val.text} author={val.author} />)}
    </>
  );
}

export default App;
