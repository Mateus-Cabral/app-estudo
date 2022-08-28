import './App.css';
import MainRoutes from './routers/MainRoutes';
import Menu from './components/Menu';


function App() {
  // const name = "Cabral"
  // const newName = name.toUpperCase()

  // function sum(a,b){
  //   return a + b
  // }

  // const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      {/* <h1>Olá, mundo</h1>
      <p>Meu primeiro app</p>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld/>
      <SayMyName nome="Mateus"/>
      <Frase/>
      <Frase/>
      <Pessoa 
        nome="Mateus" 
        idade="25" 
        profissao="Programador" 
        foto={url}
      />
      <List marca="Ferrari" ano={2010}/>
      <Frase />
      <h1>Testando Eventos</h1>
      <Evento />
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form /> */}
      <Menu />
      <MainRoutes />

    </div>
  );
}

export default App;
