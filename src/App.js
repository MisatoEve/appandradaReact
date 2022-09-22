import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//import AvatarJsx from './components/AvatarJsx';
//import Button from './components/Button/Button'; 
//import Counter from './components/Counter/Counter';

import Navbar from './components/Navbar/Navbar';

function App() {

//  const accept = () => {
//    console.log('cancele')
//  }

  return (
    <div className="App">
      {/* <header className="App-header">*/}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <AvatarJsx />
        <Button label={'cancelar'} background='blue' action={accept}/>
        <Button label={'aceptar'} background='green' action={() => console.log('acepte')}/> */}
        {/* <h1 className='Titulo' style={{ backgroundColor: 'green'}} onClick={() => console.log('click')}>MisatoEve ^^</h1>      
      <button>boton</button> 
      <input /> */}       
      {/* </header>*/}
      {/*  <Counter /> */}
        <Navbar />
        <ItemListContainer greeting={'Estos son nuestros productos disponibles!! ^^'}/>
    </div>
  );
}

export default App;
