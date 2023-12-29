import './App.css';
import Card from './components/Card/Card';
import LabelPopular from './components/LabelPopular/LabelPopular';

function App() {
  return (
    <div className="App">
      <Card 
        title={"Capuccino"}
        price={"5.20"}
        rate={4.7}
        votes={65}
      />
    </div>
  );
}

export default App;
