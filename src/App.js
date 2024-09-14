import Card from "./components/Card";
import data from "./db/quotes";
import './index.css'

function App() {
  return (
    <>
      {data.map((val, index) => <Card key={index} text={val.text} author={val.author} />)}
    </>
  );
}

export default App;
