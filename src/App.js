import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">*/}
        <img src={logo} className="App-logo" alt="logo" />
        <AvatarJsx />
        <h1 className='Titulo' style={{ backgroundColor: 'green'}} onClick={() => console.log('click')}>MisatoEve ^^</h1>      
      <button>boton</button> 
      <input />       
      {/* </header>*/}
    </div>
  );
}

export default App;
