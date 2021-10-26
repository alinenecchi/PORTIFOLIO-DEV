import './App.css';

function App() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
    .then(() => console.log("Sucesso"))
    .catch(() => console.log("Erro"))
  return (
    <div className="App">
      <header className="App-header">
       Em desenvolvimento
      </header>
    </div>
  );
}

export default App;
